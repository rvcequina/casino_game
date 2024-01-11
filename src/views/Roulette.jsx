import React,{useContext} from 'react'
import { dataContext } from '../provider/context'

const Roulette = () => {
    const {rouletteGames}=useContext(dataContext)
    return (
      <div className='content'>
          {
              
              rouletteGames?.map((item,index)=>{
                      
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

export default Roulette