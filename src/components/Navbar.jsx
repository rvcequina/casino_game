import React, { useEffect, useRef,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


export const Navbar = () => {

    const [isToggle,setIsToggle]=useState(false)
    let navigate = useNavigate();
    const navlinks = [
        { label: 'Top Games', url: 'topgames', id: 0, },
        { label: 'New Games', url: 'newgames', id: 1, },
        { label: 'Slots', url: 'slots', id: 2, },
        { label: 'Jackpots', url: 'jackpots', id: 3, },
        { label: 'Live', url: 'live', id: 4, },
        { label: 'Blackjack', url: 'blackjack', id: 5, },
        { label: 'Roulette', url: 'roulette', id: 6, },
        { label: 'Table', url: 'table', id: 7, },
        { label: 'Poker', url: 'poker', id: 8, },
        { label: 'Other', url: 'other', id: 9, }
    ]

    const handleSelect = (idx) => {
        let x = Array.from(document.querySelectorAll('.navbar-links'))
        x.map(item=>{
            item.classList.remove('active')
        })
        x[idx].classList.add('active')
    }

    const handleSelectMobile = (idx) => {
        let x = Array.from(document.querySelectorAll('.mobile-navlinks'))
        x.map(item=>{
            item.classList.remove('active')
        })
        x[idx].classList.add('active')
        setIsToggle(false)
    }

    useEffect(()=>{
        let x = Array.from(document.querySelectorAll('.navbar-links'))
        x[0].classList.add('active')
        return navigate("/");
    },[])

    const handleToggle = ()=>{
        setIsToggle(!isToggle)
    }


    return (
     <>
        <div className='navbar'>
            {
                navlinks.map(item => {
                    return <Link key={item.id} to={item.url} className='navbar-links' onClick={() => { handleSelect(item.id) }}>{item.label}</Link>
                })
            }
             <div className='nav-toggle' onClick={()=>{handleToggle()}}>Menu</div>
         
        </div>
        <div className={`mobile-menu ${isToggle? 'active':''}`}>
                    
                {
                    navlinks.map(item => {
                        return <Link key={item.id} to={item.url} className='mobile-navlinks'  onClick={() => { handleSelectMobile(item.id) }} >{item.label}</Link>
                    })
                }
        </div>
     </>
    )
}
