import React, { memo, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Sidebar/Home'
import AddData from './AddData'
import Dashboard from './Dashboard'
import Piechart from '../Charts/Piechart'
import Barchart from '../Charts/Barchart'
import Linechart from '../Charts/Linechart'


const Main = () => {

    
 
    useEffect(() => {
       
    }, [])
    return (
        <>
        
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/add-data' element={<AddData />} />
                 <Route path={`/chart/pie-chart`} element={< Piechart/>} />
                 <Route path={`/chart/Bar-chart`} element={< Barchart/>} />
                 <Route path={`/chart/Line-chart`} element={< Linechart/>} />

            </Routes>
        </>

    )
}

export default memo(Main)