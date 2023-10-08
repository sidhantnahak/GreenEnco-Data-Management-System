import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Lodor from '../Lodor/Lodor';
import Data from './Data';
import './dashboard.css'
import { useAlert } from 'react-alert';
import { clearErrors, delete_data, getall_data, update_data } from '../../Redux/dataAction';
import { useNavigate } from 'react-router-dom';
import { delete_data_reset, update_data_reset } from '../../Redux/Constants';

const Dashboard = () => {

    const [credentials, setCredentials] = useState({ name: "", month_year: "2022-06", PVSYST_GHI: "", PVSYST_GTI: "", PVSYST_Energy: "", Contractual_Energy: "", Actual_GTI: "", Actual_GHI: "", PVSyst_GTI_Actual_GTI: "", PVSyst_GHI_Actual_GHI: "", PVSyst_Energy_Contractual_Energy: "", T_Cell_Avg: "", Actual_Inverter_Energy: "", Actual_Export_Energy: "", Actual_Import_Energy: "", AC_loss: "", Net_Energy: "", Normalised_Energy: "" })

    const { alldata, loading } = useSelector(state => state.alldata);
    const { data, error, isUpdated, isDeleted } = useSelector(state => state.data)
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onchangeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    const onsubmitHandler = (e) => {
        e.preventDefault();
        dispatch(update_data(credentials, data._id))

    }


    // onClick={()=>dispatch(update_data(credentials,data._id))}
    const convertDate = (date) => {
        if (date) {
            date = date.split('-');
            let num = date[1];
            let newdate = new Date();
            newdate.setMonth(num - 1)
            return newdate.toLocaleString('en-US', { month: 'long' }).substring(0, 3).toUpperCase() + " " + date[0];
        }
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors());
        }
        if (data) {
            setCredentials({ name: data.name, month_year: data.date, PVSYST_GHI: data.PVSYST_GHI, PVSYST_GTI: data.PVSYST_GTI, PVSYST_Energy: data.PVSYST_Energy, Contractual_Energy: data.Contractual_Energy, Actual_GTI: data.Actual_GTI, Actual_GHI: data.Actual_GHI, PVSyst_GTI_Actual_GTI: data.PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI: data.PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy: data.PVSyst_Energy_Contractual_Energy, T_Cell_Avg: data.T_Cell_Avg, Actual_Inverter_Energy: data.Actual_Inverter_Energy, Actual_Export_Energy: data.Actual_Export_Energy, Actual_Import_Energy: data.Actual_Import_Energy, AC_loss: data.AC_loss, Net_Energy: data.Net_Energy, Normalised_Energy: data.Normalised_Energy })
        }
        if (isUpdated) {
            alert.success("Data Updated Successfully!")
            dispatch({ type: update_data_reset })
            dispatch(getall_data())
        }
        if (isDeleted) {
            alert.success("Data Deleted Successfully!")
            dispatch({ type: delete_data_reset })
            dispatch(getall_data());
        }
    }, [data, error, navigate, dispatch, isUpdated, alert, isDeleted])
    return (

        <>
            {loading ? <Lodor /> :

                <div className='px-1'>
                    {alldata && alldata.length > 0 ?
                        <>
                            <h2 className='text-center'>All Data Sets</h2>
                            <div style={{ minWidth: "100%", overflowX: "scroll" }} className='p-3 border border-2'>

                                <table id='table'  >
                                    <thead>
                                        <tr >
                                            <th >#</th>
                                            <th scope="col">Month_And_Year</th>
                                            <th scope="col">PVSYST_GHI</th>
                                            <th scope="col">PVSYST_GTI</th>
                                            <th scope="col">PVSYST_Energy</th>
                                            <th scope="col">Contractual_Energy</th>
                                            <th scope="col">Actual_GTI</th>
                                            <th scope="col">Actual_GHI</th>
                                            <th scope="col">PVSyst_GTI_Actual_GTI</th>
                                            <th scope="col">PVSyst_GHI_Actual_GHI</th>
                                            <th scope="col">PVSyst_Energy_Contractual_Energy</th>
                                            <th scope="col">T_Cell_Avg</th>
                                            <th scope="col">Actual_Inverter_Energy</th>
                                            <th scope="col">Actual_Export_Energy</th>
                                            <th scope="col">Actual_Import_Energy</th>
                                            <th scope="col">AC_loss</th>
                                            <th scope="col">Net_Energy</th>
                                            <th scope="col">Normalised_Energy</th>
                                            <th scope="col">Action</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        {alldata.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).map((e, index) => {
                                            return <Data convertDate={convertDate} key={e._id} data={e} index={index} />
                                        })}

                                    </tbody>
                                </table>
                            </div>  </>:
                            <h3 className='text-center'>You Have No Data</h3>
                       

                    }

                    {/* View */}
                    <div className="modal fade " id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div style={{ maxWidth: "750px" }} className="modal-dialog " role="document">
                            {data && <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-center" id="exampleModalLongTitle">Data Details</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <div className='row mx-auto '>
                                        <p className='col-md-6'><strong>Added By :</strong>  {data.name} </p>
                                        <p className='col-md-6'><strong>  Date : </strong>{convertDate(data.date)}</p>
                                        <p className='col-md-6'><strong> PVSYST_GHI : </strong>{data.PVSYST_GHI}</p>
                                        <p className='col-md-6'><strong> PVSYST_GTI : </strong>{data.PVSYST_GTI}</p>
                                        <p className='col-md-6'><strong> PVSYST_Energy : </strong>{data.PVSYST_Energy}</p>
                                        <p className='col-md-6'><strong> Contractual_Energy : </strong>{data.Contractual_Energy}</p>
                                        <p className='col-md-6'><strong> Actual_GTI : </strong>{data.Actual_GTI}</p>
                                        <p className='col-md-6'><strong> Actual_GHI : </strong>{data.Actual_GHI}</p>
                                        <p className='col-md-6'><strong> PVSyst_GTI_Actual_GTI : </strong>{data.PVSyst_GTI_Actual_GTI}</p>
                                        <p className='col-md-6'><strong> PVSyst_GHI_Actual_GHI : </strong>{data.PVSyst_GHI_Actual_GHI}</p>
                                        <p className='col-md-6'><strong> PVSyst_Energy_Contractual_Energy : </strong>{data.PVSyst_Energy_Contractual_Energy}</p>
                                        <p className='col-md-6'><strong> T_Cell_Avg : </strong>{data.T_Cell_Avg}</p>
                                        <p className='col-md-6'><strong> Actual_Inverter_Energy : </strong>{data.Actual_Inverter_Energy}</p>
                                        <p className='col-md-6'><strong> Actual_Export_Energy : </strong>{data.Actual_Export_Energy}</p>
                                        <p className='col-md-6'><strong> Actual_Import_Energy : </strong>{data.Actual_Import_Energy}</p>
                                        <p className='col-md-6'><strong> AC_loss : </strong>{data.AC_loss}</p>
                                        <p className='col-md-6'><strong> Net_Energy : </strong>{data.Net_Energy}</p>
                                        <p className='col-md-6'><strong> Normalised_Energy : </strong>{data.Normalised_Energy}</p>


                                    </div>

                                </div>
                            </div>}
                        </div>
                    </div>


                    {/* Delete */}



                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Delete Data</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body text-center">
                                    <span style={{ fontWeight: "600" }} className='text-danger '>Are You Sure Want to Delete This Data</span>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Back</button>
                                    <button onClick={() => dispatch(delete_data(data._id))} type="button" className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Update */}

                    <div className="modal fade " id="exampleModalLong2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div style={{ maxWidth: "750px" }} className="modal-dialog " role="document">
                            {data && <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-center" id="exampleModalLongTitle">Update Your Data</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <div>

                                        <form className='shadow' onSubmit={onsubmitHandler} >
                                            <div className="row">
                                                <div className="col-md-6 mb-2">
                                                    <label htmlFor="name">Enter Your Name</label>
                                                    <input type="text" name='name' className="form-control" id='name' defaultValue={data.name} onChange={onchangeHandler} required />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label htmlFor="month_year">Enter Date</label>
                                                    <input type="month" name='month_year' id='month_and_year' className="form-control" defaultValue={data.date} onChange={onchangeHandler} required />
                                                </div>
                                                <div className=" col-md-6 mb-2">
                                                    <label htmlFor="PVSYST_GHI"> PVSYST GHI</label>
                                                    <input name='PVSYST_GHI' type="number" className="form-control" id='PVSYST_GHI' defaultValue={data.PVSYST_GHI} onChange={onchangeHandler} required step="any" />
                                                </div>
                                                <div className=" col-md-6 mb-2">
                                                    <label htmlFor="PVSYST_GTI">PVSYST GTI</label>
                                                    <input type="number" name='PVSYST_GTI' className="form-control" id='PVSYST_GTI' defaultValue={data.PVSYST_GTI} onChange={onchangeHandler} required step="any" />
                                                </div>
                                                <div className=" col-md-6 mb-2">
                                                    <label htmlFor="PVSYST_Energy">PVSYST Energy</label>
                                                    <input type="number" name='PVSYST_Energy' className="form-control" id='PVSYST_Energy' defaultValue={data.PVSYST_Energy} onChange={onchangeHandler} required step="any" />
                                                </div>
                                                <div className=" col-md-6 mb-2">
                                                    <label htmlFor="Contractual_Energy">Contractual Energy</label>
                                                    <input type="number" name='Contractual_Energy' className="form-control" id='Contractual_Energy' defaultValue={data.Contractual_Energy} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="Actual_GTI">Actual GTI</label>
                                                    <input type="number" name='Actual_GTI' className="form-control" id='Actual_GTI' defaultValue={data.Actual_GTI} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="Actual_GHI">Actual GHI</label>
                                                    <input type="number" name='Actual_GHI' className="form-control" id='Actual_GHI' defaultValue={data.Actual_GHI} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="PVSyst_GTI_Actual_GTI">PVSyst GTI vs Actual GTI</label>
                                                    <input type="number" name='PVSyst_GTI_Actual_GTI' className="form-control" id='PVSyst_GTI_Actual_GTI' defaultValue={data.PVSyst_GTI_Actual_GTI} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="PVSyst_GHI_Actual_GHI">PVSyst GHI vs Actual GHI</label>
                                                    <input type="number" name='PVSyst_GHI_Actual_GHI' className="form-control" id='PVSyst_GHI_Actual_GHI' defaultValue={data.PVSyst_GHI_Actual_GHI} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="PVSyst_Energy_Contractual_Energy">PVSyst Energy vs Contractual Energy</label>
                                                    <input type="number" name='PVSyst_Energy_Contractual_Energy' className="form-control" id='PVSyst_Energy_Contractual_Energy' defaultValue={data.PVSyst_Energy_Contractual_Energy} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="T_Cell_Avg">T -Cell Avg(°C)</label>
                                                    <input type="number" name='T_Cell_Avg' className="form-control" id='T_Cell_Avg' defaultValue={data.T_Cell_Avg} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="Actual_Inverter_Energy">Actual Inverter Energy (KWh)</label>
                                                    <input type="number" name='Actual_Inverter_Energy' className="form-control" id='Actual_Inverter_Energy' defaultValue={data.Actual_Inverter_Energy} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="Actual_Export_Energy">Actual Export Energy (KWh)</label>
                                                    <input type="number" name='Actual_Export_Energy' className="form-control" id='Actual_Export_Energy' defaultValue={data.Actual_Export_Energy} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="Actual_Import_Energy">Actual Import Energy (KWh)</label>
                                                    <input type="number" name='Actual_Import_Energy' className="form-control" id='Actual_Import_Energy' defaultValue={data.Actual_Import_Energy} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="AC_loss">AC loss (%)</label>
                                                    <input type="number" name='AC_loss' className="form-control" id='AC_loss' defaultValue={data.AC_loss} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="Net_Energy">Net Energy</label>
                                                    <input type="number" name='Net_Energy' className="form-control" id='Net_Energy' defaultValue={data.Net_Energy} onChange={onchangeHandler} required step="any" />
                                                </div><div className=" col-md-6 mb-2">
                                                    <label htmlFor="Normalised_Energy">Normalised Energy (KWh)</label>
                                                    <input type="number" name='Normalised_Energy' className="form-control" id='Normalised_Energy' defaultValue={data.Normalised_Energy} onChange={onchangeHandler} required step="any" />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary"  >Save changes</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>}
                        </div>
                    </div>

                </div>

            }



        </>
    )
}

export default Dashboard