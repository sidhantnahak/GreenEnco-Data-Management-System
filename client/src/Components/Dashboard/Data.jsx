import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import { delete_data, get_data_details } from '../../Redux/dataAction';

const Data = ({ data, index,convertDate }) => {
    
    const dispatch=useDispatch();
   

    useEffect(() => {
      
    }, [dispatch])
    
    return (
        <>

            <tr>
                <th scope="row">{index + 1}</th>
                <td >{convertDate(data.date)}</td>
                <td>{data.PVSYST_GHI}</td>
                <td>{data.PVSYST_GTI}</td>
                <td>{data.PVSYST_Energy}</td>
                <td>{data.Contractual_Energy}</td>
                <td>{data.Actual_GTI}</td>
                <td>{data.Actual_GHI}</td>
                <td>{data.PVSyst_GTI_Actual_GTI}</td>
                <td>{data.PVSyst_GHI_Actual_GHI}</td>
                <td>{data.PVSyst_Energy_Contractual_Energy}</td>
                <td>{data.T_Cell_Avg}</td>
                <td>{data.Actual_Inverter_Energy}</td>
                <td>{data.Actual_Export_Energy}</td>
                <td>{data.Actual_Import_Energy}</td>
                <td>{data.AC_loss}</td>
                <td>{data.Net_Energy}</td>
                <td>{data.Normalised_Energy}</td>
                <td>
                    <span id='data_action_links' style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.2rem" }}>
                        <Link style={style} onClick={()=>dispatch(get_data_details(data._id))} className="fa-solid fa-eye  text-decoration-none fs-4 text-white hover-pulse"data-toggle="modal" data-target="#exampleModalLong" ></Link>
                        <Link  onClick={()=>dispatch(get_data_details(data._id))}  className="fa-solid fa-pen-to-square text-decoration-none fs-4 text-white" data-toggle="modal" data-target="#exampleModalLong2"></Link>
                        <Link onClick={()=>dispatch(get_data_details(data._id))} className="fa-solid fa-trash text-decoration-none fs-4 text-white" data-toggle="modal" data-target="#exampleModalCenter"></Link>
                    </span>
                </td>
            </tr>
        </>
    )
}

export default memo(Data)