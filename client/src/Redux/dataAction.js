import { add_data_fail, add_data_request, add_data_sucess, clear_errors, getall_data_fail, getall_data_request, getall_data_sucess } from "./Constants";

import axios from 'axios'


axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
})


export const adddata_request = (data) => async (dispatch) => {

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


// export const get_laundry_details = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: get_laundry_request });

//         const { data } = await axios.get(`/api/v1/request/${id}`)
//         dispatch({ type: get_laundry_sucess, payload: data.laundry });

//     } catch (error) {
//         dispatch({ type: get_laundry_fail, payload: error.response.data.message });

//     }
// }



// export const update_laundry = (data, id) => async (dispatch) => {


//     const top_wear = data.top;
//     const bottom_wear = data.bottom;
//     const cloth_type = data.cloth_type;
//     const service_type = data.service_type;
//     const contact = data.contact;
//     const description = data.description;
//     const required_date = data.date
//     try {
//         dispatch({ type: laundry_update_request });
//         const config = { headers: { "Content-Type": "application/json" } };
//         const { data } = await axios.put(`/api/v1/updaterequest/${id}`,
//             { top_wear, bottom_wear, cloth_type, service_type, contact, description, required_date }, config
//         )
//         dispatch({ type: laundry_update_sucess, payload: data.sucess });

//     } catch (error) {
//         dispatch({ type: laundry_update_fail, payload: error.response.data.message });

//     }
// }



// export const delete_laundry_request = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: laundry_delete_request });

//         const { data } = await axios.delete(`/api/v1/deleterequest/${id}`)
//         dispatch({ type: laundry_delete_sucess, payload: data.sucess });

//     } catch (error) {
//         dispatch({ type: laundry_delete_fail, payload: error.response.data.message });

//     }
// }




export const clearErrors = () => async (dispatch) => {
    dispatch({ type: clear_errors });
};