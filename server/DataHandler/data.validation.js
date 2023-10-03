
const { body } = require('express-validator')



exports.addDataValidation = [

    body("name")
        .exists({ checkFalsy: true }).withMessage("Name is required")
        .isString().withMessage("Name should be string")
        .isLength({ min: 3, max: 30 }).withMessage("Name is too short"),


    body("month_year")
        .exists({ checkFalsy: true }).withMessage("Date is required")
        .isString().withMessage("Date should be string"),

    body("PVSYST_GHI")
        .exists({ checkFalsy: true }).withMessage("PVSYST_GHI is required")
        .isNumeric().withMessage("PVSYST_GHI should be number"),

    body("PVSYST_GTI")
        .exists({ checkFalsy: true }).withMessage("PVSYST_GTI is required")
        .isNumeric().withMessage("PVSYST_GTI should be number")
    ,

    body("PVSYST_Energy")
        .exists({ checkFalsy: true }).withMessage("PVSYST_Energy is required")
        .isNumeric().withMessage("PVSYST_Energy should be number"),

    body("Contractual_Energy")
        .exists({ checkFalsy: true }).withMessage("Contractual_Energy is required")
        .isNumeric().withMessage("Contractual_Energy should be number"),

    body("Actual_GTI")
        .exists({ checkFalsy: true }).withMessage("Actual_GTI is required")
        .isNumeric().withMessage("Actual_GTI should be number"),

    body("Actual_GHI")
        .exists({ checkFalsy: true }).withMessage("Actual_GHI is required")
        .isNumeric().withMessage("Actual_GHI should be number"),

    body("PVSyst_GTI_Actual_GTI")
        .exists({ checkFalsy: true }).withMessage("PVSyst_GTI_Actual_GTI is required")
        .isNumeric().withMessage("PVSyst_GTI_Actual_GTI should be number"),

    body("PVSyst_GHI_Actual_GHI")
        .exists({ checkFalsy: true }).withMessage("PVSyst_GHI_Actual_GHI is required")
        .isNumeric().withMessage("PVSyst_GHI_Actual_GHI should be number"),

    body("PVSyst_Energy_Contractual_Energy")
        .exists({ checkFalsy: true }).withMessage("PVSyst_Energy_Contractual_Energy is required")
        .isNumeric().withMessage("PVSyst_Energy_Contractual_Energy should be number"),

    body("T_Cell_Avg")
        .exists({ checkFalsy: true }).withMessage("T_Cell_Avg is required")
        .isNumeric().withMessage("T_Cell_Avg should be number"),

    body("Actual_Inverter_Energy")
        .exists({ checkFalsy: true }).withMessage("Actual_Inverter_Energy is required")
        .isNumeric().withMessage("Actual_Inverter_Energy should be number"),

    body("Actual_Export_Energy")
        .exists({ checkFalsy: true }).withMessage("Actual_Export_Energy is required")
        .isNumeric().withMessage("Actual_Export_Energy should be number"),

    body("Actual_Import_Energy")
        .exists({ checkFalsy: true }).withMessage("Actual_Import_Energy is required")
        .isNumeric().withMessage("Actual_Import_Energy should be number"),

    body("AC_loss")
        .exists({ checkFalsy: true }).withMessage("AC_loss is required")
        .isNumeric().withMessage("AC_loss should be number"),

    body("Net_Energy")
        .exists({ checkFalsy: true }).withMessage("Net_Energy is required")
        .isNumeric().withMessage("Net_Energy should be number"),

    body("Normalised_Energy")
        .exists({ checkFalsy: true }).withMessage("Normalised_Energy is required")
        .isNumeric().withMessage("Normalised_Energy should be number"),

]








