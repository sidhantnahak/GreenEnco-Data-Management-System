import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools}from 'redux-devtools-extension'
import { allData, data } from "./Redux/dataReducer";



const reducer=combineReducers({
    data:data,
    alldata:allData

})
const middleware=[thunk]

// const store=createStore(reducer);


const initialState={}
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;