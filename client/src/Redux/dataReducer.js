import { add_data_fail, add_data_request, add_data_reset, add_data_sucess, clear_errors, getall_data_fail, getall_data_request, getall_data_sucess } from './Constants'

export const data = (state = { data: {} }, action) => {

    switch (action.type) {
        case add_data_request:
            return {
                loading: true,
            }
        case add_data_sucess:
            return {
                ...state,
                loading: false,
                sucess: action.payload,
            }


        case add_data_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case add_data_reset:
            return {

                ...state,
                loading:false,
                sucess: false
            }

        case clear_errors:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}





export const allData = (state = { alldata: {} }, action) => {

    switch (action.type) {
        case getall_data_request:
            return {
                loading: true,

            }
        case getall_data_sucess:

            return {
                ...state,
                loading:false,
                alldata: action.payload,
            }
        case getall_data_fail:
            return {
                ...state,
                loading: false,
                alldata: null,
                error: action.payload
            }
        case clear_errors:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }

}




