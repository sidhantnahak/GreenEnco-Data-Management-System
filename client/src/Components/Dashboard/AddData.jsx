import React, { useEffect, useState } from 'react'
import './adddata.css'
import { useDispatch, useSelector } from 'react-redux'
import { adddata, clearErrors, getall_data } from '../../Redux/dataAction'
import { add_data_reset } from '../../Redux/Constants'
import Lodor from '../Lodor/Lodor'
import { useAlert } from 'react-alert'

const AddData = () => {

    const [data, setData] = useState({ name: "", month_year: "2022-06", PVSYST_GHI: "", PVSYST_GTI: "", PVSYST_Energy: "", Contractual_Energy: "", Actual_GTI: "", Actual_GHI: "", PVSyst_GTI_Actual_GTI: "", PVSyst_GHI_Actual_GHI: "", PVSyst_Energy_Contractual_Energy: "", T_Cell_Avg: "", Actual_Inverter_Energy: "", Actual_Export_Energy: "", Actual_Import_Energy: "", AC_loss: "", Net_Energy: "", Normalised_Energy: "" })

    const alert = useAlert()
    const dispatch = useDispatch();
    const { error, loading, sucess } = useSelector(state => state.data)

    const onchangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onsubmitHandler = (e) => {
        e.preventDefault();
        dispatch(adddata(data))
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (sucess) {
            alert.success("data added sucessfully")
            dispatch(getall_data())
            dispatch({ type: add_data_reset })
        }

    }, [sucess, dispatch, error, alert])


    return (
        <>
            {loading ? <Lodor /> :

                <div >
                    <form className='shadow' onSubmit={onsubmitHandler}>
                        <div className="row">
                            <div className="col-lg-8 mb-2">
                                <label htmlFor="name">Enter Your Name</label>
                                <input type="text" name='name' className="form-control" id='name' onChange={onchangeHandler} required />
                            </div>
                            <div className="col-lg-4 mb-2">
                                <label htmlFor="month_year">Enter Date</label>
                                <input type="month" name='month_year' id='month_and_year' className="form-control" value={data.month_year} onChange={onchangeHandler} required />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="PVSYST_GHI"> PVSYST GHI</label>
                                <input name='PVSYST_GHI' type="number" className="form-control" id='PVSYST_GHI' onChange={onchangeHandler} required step="any" />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="PVSYST_GTI">PVSYST GTI</label>
                                <input type="number" name='PVSYST_GTI' className="form-control" id='PVSYST_GTI' onChange={onchangeHandler} required step="any" />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="PVSYST_Energy">PVSYST Energy</label>
                                <input type="number" name='PVSYST_Energy' className="form-control" id='PVSYST_Energy' onChange={onchangeHandler} required step="any" />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="Contractual_Energy">Contractual Energy</label>
                                <input type="number" name='Contractual_Energy' className="form-control" id='Contractual_Energy' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="Actual_GTI">Actual GTI</label>
                                <input type="number" name='Actual_GTI' className="form-control" id='Actual_GTI' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="Actual_GHI">Actual GHI</label>
                                <input type="number" name='Actual_GHI' className="form-control" id='Actual_GHI' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="PVSyst_GTI_Actual_GTI">PVSyst GTI vs Actual GTI</label>
                                <input type="number" name='PVSyst_GTI_Actual_GTI' className="form-control" id='PVSyst_GTI_Actual_GTI' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="PVSyst_GHI_Actual_GHI">PVSyst GHI vs Actual GHI</label>
                                <input type="number" name='PVSyst_GHI_Actual_GHI' className="form-control" id='PVSyst_GHI_Actual_GHI' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="PVSyst_Energy_Contractual_Energy">PVSyst Energy vs Contractual Energy</label>
                                <input type="number" name='PVSyst_Energy_Contractual_Energy' className="form-control" id='PVSyst_Energy_Contractual_Energy' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="T_Cell_Avg">T -Cell Avg(°C)</label>
                                <input type="number" name='T_Cell_Avg' className="form-control" id='T_Cell_Avg' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="Actual_Inverter_Energy">Actual Inverter Energy (KWh)</label>
                                <input type="number" name='Actual_Inverter_Energy' className="form-control" id='Actual_Inverter_Energy' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="Actual_Export_Energy">Actual Export Energy (KWh)</label>
                                <input type="number" name='Actual_Export_Energy' className="form-control" id='Actual_Export_Energy' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="Actual_Import_Energy">Actual Import Energy (KWh)</label>
                                <input type="number" name='Actual_Import_Energy' className="form-control" id='Actual_Import_Energy' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-2 col-md-6 mb-2">
                                <label htmlFor="AC_loss">AC loss (%)</label>
                                <input type="number" name='AC_loss'  className="form-control" id='AC_loss' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-2 col-md-6 mb-2">
                                <label htmlFor="Net_Energy">Net Energy</label>
                                <input type="number" name='Net_Energy' className="form-control" id='Net_Energy' onChange={onchangeHandler} required step="any" />
                            </div><div className="col-lg-4 col-md-6 mb-2">
                                <label htmlFor="Normalised_Energy">Normalised Energy (KWh)</label>
                                <input type="number" name='Normalised_Energy' className="form-control" id='Normalised_Energy'  onChange={onchangeHandler} required step="any" />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary mt-3'>Add Data</button>
                    </form>
                </div>
             } 
        </>
    )
}

export default AddData