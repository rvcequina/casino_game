import React,{useContext,useEffect} from 'react'
import { dataContext } from '../provider/context'

const NewGames = () => {
    const {newGames}=useContext(dataContext)

    useEffect(()=>{
        handleRibbon()
    },[])

    const handleRibbon = () =>{
      
        const getEl = Array.from(document.querySelectorAll('.image-container'))

        

        newGames?.map((item,index)=>{
            if(item.categories.includes('top')){
               
                getEl[index].classList.add('top')
            }
        })
    }
    return (
      <div className='content'>
          {
              
              newGames?.map((item,index)=>{
                      
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

export default NewGames