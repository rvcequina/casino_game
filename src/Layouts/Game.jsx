import React from 'react'
import { Routes, Route, Navigate,Outlet } from "react-router-dom";

import { Navbar } from '../components/Navbar'
export const Game = ({

}) => {
  return (
   <>
    <Navbar/>
    <div className='content-container'>
        <Outlet/>
    </div>
   </>
  )
}
