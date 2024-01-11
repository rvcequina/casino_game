import React,{useContext, useEffect} from 'react'
import { dataContext } from '../provider/context'
const TopGames = () => {
    const {topGames}=useContext(dataContext)

    useEffect(()=>{
        handleRibbon()
    },[])

    const handleRibbon = () =>{
        
        const getEl = Array.from(document.querySelectorAll('.image-container'))

        

        topGames?.map((item,index)=>{
            if(item.categories.includes('new')){
                getEl[index].classList.add('new')
            }
        })
    }

  return (
    <div className='content'>
        {
            
            topGames?.map((item,index)=>{
                    
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

export default TopGames