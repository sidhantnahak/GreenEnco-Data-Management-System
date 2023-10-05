import { add_data_fail, add_data_request, add_data_sucess, clear_errors, delete_data_fail, delete_data_request, delete_data_sucess, get_data_fail, get_data_request, get_data_sucess, getall_data_fail, getall_data_request, getall_data_sucess, update_data_fail, update_data_request, update_data_sucess } from "./Constants";

import axios from 'axios'


axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
})


export const adddata = (data) => async (dispatch) => {

    const { name, month_year, PVSYST_GHI, PVSYST_GTI, PVSYST_Energy, Contractual_Energy, Actual_GTI, Actual_GHI, PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy, T_Cell_Avg, Actual_Inverter_Energy, Actual_Export_Energy, Actual_Import_Energy, AC_loss, Net_Energy, Normalised_Energy } = data
    try {
        dispatch({ type: add_data_request });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`/api/v1/add-data`,
        {name, month_year, PVSYST_GHI, PVSYST_GTI, PVSYST_Energy, Contractual_Energy, Actual_GTI, Actual_GHI, PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy, T_Cell_Avg, Actual_Inverter_Energy, Actual_Export_Energy, Actual_Import_Energy, AC_loss, Net_Energy, Normalised_Energy},config
        )

        dispatch({ type: add_data_sucess, payload: data.sucess });

    } catch (error) {

        dispatch({ type: add_data_fail, payload: error.response.data.message });

    }
}


export const getall_data = () => async (dispatch) => {
    try {
        dispatch({ type: getall_data_request });

        const { data } = await axios.get('/api/v1/getalldata')
        dispatch({ type: getall_data_sucess, payload: data.alldata });

    } catch (error) {

        dispatch({ type: getall_data_fail, payload: error.response.data.message });

    }
}


export const get_data_details = (id) => async (dispatch) => {
    try {
        dispatch({ type: get_data_request });

        const { data } = await axios.get(`/api/v1/data/${id}`)
        dispatch({ type: get_data_sucess, payload: data.data });

    } catch (error) {
        dispatch({ type: get_data_fail, payload: error.response.data.message });

    }
}



export const update_data = (data, id) => async (dispatch) => {
    const { name, month_year, PVSYST_GHI, PVSYST_GTI, PVSYST_Energy, Contractual_Energy, Actual_GTI, Actual_GHI, PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy, T_Cell_Avg, Actual_Inverter_Energy, Actual_Export_Energy, Actual_Import_Energy, AC_loss, Net_Energy, Normalised_Energy } = data
    try {
        dispatch({ type: update_data_request });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.put(`/api/v1/data/${id}`,
            {name, month_year, PVSYST_GHI, PVSYST_GTI, PVSYST_Energy, Contractual_Energy, Actual_GTI, Actual_GHI, PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy, T_Cell_Avg, Actual_Inverter_Energy, Actual_Export_Energy, Actual_Import_Energy, AC_loss, Net_Energy, Normalised_Energy }, config
        )
        dispatch({ type: update_data_sucess, payload: data.sucess });

    } catch (error) {
        dispatch({ type: update_data_fail, payload: error.response.data.message });

    }
}



export const delete_data = (id) => async (dispatch) => {
    try {
        dispatch({ type: delete_data_request });

        const { data } = await axios.delete(`/api/v1/data/${id}`)
        dispatch({ type: delete_data_sucess, payload: data.sucess });

    } catch (error) {
        dispatch({ type: delete_data_fail, payload: error.response.data.message });

    }
}




export const clearErrors = () => async (dispatch) => {
    dispatch({ type: clear_errors });
};