import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//layout
import { Game } from '@/Layouts/Game'

//views
import  TopGames  from './views/TopGames';
import NewGames from './views/NewGames';
import Slots from './views/Slots';
import Jackpots from './views/Jackpots';
import Live from './views/Live';
import BlackJack from './views/BlackJack';
import Roulette from './views/Roulette';
import Table from './views/Table';
import Poker from './views/Poker';
import Other from './views/Other';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Game />}>
        <Route index element={<TopGames />} />
        <Route index path="topgames" element={<TopGames />} /> 
        <Route index path="newgames" element={<NewGames />} /> 
        <Route index path="slots" element={<Slots />} /> 
        <Route index path="jackpots" element={<Jackpots />} /> 
        <Route index path="live" element={<Live />} /> 
        <Route index path="blackjack" element={<BlackJack />} /> 
        <Route index path="roulette" element={<Roulette />} /> 
        <Route index path="table" element={<Table />} /> 
        <Route index path="poker" element={<Poker />} /> 
        <Route index path="other" element={<Other />} /> 
        <Route
              path="*"
              element={<Navigate to="/" replace />}
          />
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
