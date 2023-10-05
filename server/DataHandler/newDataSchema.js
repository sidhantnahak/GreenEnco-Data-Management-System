const mongoose=require('mongoose')

const dataSchema=new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    PVSYST_GHI:{
        type:Number,
        required:true
    },
    PVSYST_GTI:{
        type:Number,
        required:true
    },
    PVSYST_Energy:{
        type:Number,
        required:true
    },
    Contractual_Energy:{
        type:Number,
        required:true
    },
    Actual_GTI:{
        type:Number,
        required:true
    },
    Actual_GHI:{
        type:Number,
        required:true
    },
    PVSyst_GTI_Actual_GTI:{
        type:Number,
        required:true
    },
    PVSyst_GHI_Actual_GHI:{
        type:Number,
        required:true
    },
    PVSyst_Energy_Contractual_Energy:{
        type:Number,
        required:true
    },
    T_Cell_Avg:{
        type:Number,
        required:true
    },
    Actual_Inverter_Energy:{
        type:Number,
        required:true
    },
    Actual_Export_Energy:{
        type:Number,
        required:true
    },
    Actual_Import_Energy:{
        type:Number,
        required:true
    },
    AC_loss:{
        type:Number,
        required:true
    },
    Net_Energy:{
        type:Number,
        required:true
    },
    Normalised_Energy:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("Data",dataSchema);