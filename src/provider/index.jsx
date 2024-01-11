import { useContext, useEffect, useState } from "react";
import { DATA_CONTEXT,dataContext } from "./context";
import axios from "axios";

const DataProvider = ({ children }) => {
  const [data, setData] = useState(DATA_CONTEXT);

  const [topGames, setTopGames] = useState();
  const [newGames, setNewGames] = useState()
  const [slotsGames,setSlotsGames]=useState()
  const [pokerGames,setPokerGames]=useState()
  const [blackjackGames,setBlackJackGames]=useState()
  const [rouletteGames,setRouletteGames]=useState()
  const [otherGames,setOtherGames]=useState()
  const [jackpotList,setJackpotList]= useState()
 
  useEffect(()=>{
   
    getData()
   

  },[])

  const getData =async ()=>{
     await axios({
      method: 'get',
      url: 'https://stage.whgstage.com/front-end-test/games.php',
    })
      .then( (res) => {

        
        let toparray=[]
        let newarray=[]
        let slotsarray=[]
        let pokerarray=[]
        let blackjackarray=[]
        let roulettearray=[]
        let othersarray=[]

        let listarray=[]
        listarray.push(...res.data)
        getJackpotData(listarray)
        res.data.map(item=>{
        
          if (item.categories.includes('top')){
              toparray.push(item)
          }
          
         
        })

        res.data.map(item=>{
        
          if (item.categories.includes('new')){
            newarray.push(item)
          }
          
         
        })
        res.data.map(item=>{
        
          if (item.categories.includes('slots')){
            slotsarray.push(item)
          }
          
         
        })
        res.data.map(item=>{
        
          if (item.categories.includes('poker')){
            pokerarray.push(item)
          }
          
         
        })

        res.data.map(item=>{
        
          if (item.categories.includes('blackjack')){
            blackjackarray.push(item)
          }
          
         
        })

        res.data.map(item=>{
        
          if (item.categories.includes('roulette')){
            roulettearray.push(item)
          }
          
         
        })

        res.data.map(item=>{
        
          if (item.categories.includes('ball') ||item.categories.includes('virtual')||item.categories.includes('fun')||item.categories.includes('classic')){
            othersarray.push(item)
          }
          
         
        })


      

        
        
      
       
      

       
      // console.log(othersarray)
       setTopGames(toparray)
       setNewGames(newarray)
       setSlotsGames(slotsarray)
       setPokerGames(pokerarray)
       setBlackJackGames(blackjackarray)
       setRouletteGames(roulettearray)
       setOtherGames(othersarray)
       
      });

    
  }


  const getJackpotData = async (gamelist)=>{
    
    let getjackpotList=[]
    await axios({
      method: 'get',
      url: 'https://stage.whgstage.com/front-end-test/jackpots.php',
    })
      .then( (res) => {
        res.data.map(item=>{
          
          gamelist.map(data=>{
            if(data.id.includes(item.game)){
             getjackpotList.push({...data ,amount:item.amount})
            }
            
          })
        })
        setJackpotList(getjackpotList)
        
      });
      
  }



  return (
    <dataContext.Provider value={{ 
      newGames,
      topGames,
      slotsGames,
      pokerGames,
      blackjackGames,
      rouletteGames,
      otherGames,
      jackpotList
    }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);

export default DataProvider;