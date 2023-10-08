import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './chart.css'
import Lodor from '../Lodor/Lodor';
import ChartItem from './ChartItem';


const Barchart = () => {
    const [label1, setLebel1] = useState(["PVSYST_Energy", "Contractual_Energy", "Actual_Inverter_Energy", "Actual_Export_Energy", "Actual_Import_Energy", "Net_Energy", "Normalised_Energy"])

    const [label2, setLebel2] = useState(["PVSYST_GHI", "PVSYST_GTI", "Actual_GTI", "Actual_GHI"])

    const { alldata, loading } = useSelector(state => state.alldata);

    useEffect(() => {
        
    
    }, [])
    

    return (
        <>
            {loading ? <Lodor /> :
                <div className='chart_main_div'>
                    <h3 className='text-center mb-4'>Data Representation Using Bar-Chart</h3>
                    
                        {alldata && alldata.length>0&& alldata.map((e) => {
                            return <ChartItem key={e._id} details={e} label1={label1} label2={label2} type={"Bar"} />
                        })}
                </div>
            }
        </>
    )
}

export default Barchart