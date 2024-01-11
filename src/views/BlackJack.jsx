import React,{useContext,useEffect} from 'react'
import { dataContext } from '../provider/context'

const BlackJack = () => {
    const {blackjackGames}=useContext(dataContext)
    
  

    return (
      <div className='content'>
          {
              
              blackjackGames?.map((item,index)=>{
                      
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

export default BlackJack