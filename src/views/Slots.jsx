import React,{useContext,useEffect} from 'react'
import { dataContext } from '../provider/context'

const Slots = () => {
    const {slotsGames}=useContext(dataContext)

   
    useEffect(()=>{
        handleRibbon()
    },[])

    const handleRibbon = () =>{
      
        const getEl = Array.from(document.querySelectorAll('.image-container'))

        

        slotsGames?.map((item,index)=>{
            if(item.categories.includes('top')){
         
                getEl[index].classList.add('top')
            }
        })
    }
    return (
      <div className='content'>
          {
              
              slotsGames?.map((item,index)=>{
                      
                  return  (<div key={index}>
  
                              <div className='image-container'>
                                 
                                  <img src={item.image} alt=""  />
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

export default Slots