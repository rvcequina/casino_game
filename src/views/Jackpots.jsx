import React,{useContext, useEffect,useRef,useState} from 'react'
import { dataContext } from '../provider/context'

const Jackpots = () => {
  const {jackpotList}=useContext(dataContext)
  const [bonus,setBonus]=useState(0)
  const [timer, setTimer] = useState(0);
  

  useEffect(()=>{
    let interval;
    interval = setInterval(() => {
      setTimer(timer => timer + 1);
      console.log('test',bonus)
      setBonus(bonus => bonus + 100);
    }, 5000);
    return () => clearInterval(interval);
  },[])



    return (
      <div className='content'>
          {
              
              jackpotList?.map((item,index)=>{
                      
                  return  (<div key={index}>
  
                              <div className='image-container'>
                                  <div className='jackpot-amt'>Jackpot Price: {item.amount+bonus}</div>
                                  <img src={item.image} alt="" />
                                  <div className='overlay'>
                                    <div>play {item.name}</div>
                                    
                                </div>
                              </div>
  
                          </div>)
              })
          }    
       </div>
    )
}

export default Jackpots