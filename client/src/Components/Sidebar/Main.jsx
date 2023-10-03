import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './Home'
import Content from './Content'
import AddData from '../Dashboard/AddData'
// import Picharts from '../Charts/Picharts'

const Main = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contents' element={<Content/>}/>
            <Route path='/add-data' element={<AddData/>}/>
            {/* <Route path='/pichart' element={<Picharts/>}/> */}

        </Routes>        
        </>

    )
}

export default Main