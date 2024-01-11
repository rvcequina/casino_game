import React,{useContext} from 'react'
import { dataContext } from '../provider/context'

const Other = () => {
    const {otherGames}=useContext(dataContext)
    return (
      <div className='content'>
          {
              
              otherGames?.map((item,index)=>{
                      
                  return  (<div key={index}>
  
                              <div className='image-container'>
                                 
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

export default Other