import React from 'react'
import Nav from './component/Nav'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import News from './Pages/News/News'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-slate-900'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path = '/News' element={<News/>}/>


      </Routes>
      
    </div>
  )
}

export default App