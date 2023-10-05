import { add_data_fail, add_data_request, add_data_reset, add_data_sucess, clear_errors, delete_data_fail, delete_data_request, delete_data_reset, delete_data_sucess, get_data_fail, get_data_request, get_data_sucess, getall_data_fail, getall_data_request, getall_data_sucess, update_data_fail, update_data_request, update_data_reset, update_data_sucess } from './Constants'

export const data = (state = { data: {} }, action) => {

    switch (action.type) {
        case add_data_request:
            case get_data_request:
                case update_data_request:
                    case delete_data_request:
            return {
                loading: true,
            }
        case add_data_sucess:
            return {
                ...state,
                loading: false,
                sucess: action.payload,
            }

            case get_data_sucess:
                return {
                    ...state,
                    loading: false,
                    data: action.payload,
                }
            case update_data_sucess:
                    return {
                        ...state,
                        loading: false,
                        isUpdated: action.payload,
                    }
                    case delete_data_sucess:
                        return {
                            ...state,
                            loading: false,
                            isDeleted: action.payload,
                        }
        case add_data_fail:
            case get_data_fail:
                case update_data_fail:
                    case delete_data_fail:
            return {
                ...state,
                loading: false,
                data:null,
                error: action.payload
            }
        case add_data_reset:
            case update_data_reset:
                case delete_data_reset:
            return {

                ...state,
                loading:false,
                sucess: false,
                isUpdated:false,
                isDeleted:false
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




