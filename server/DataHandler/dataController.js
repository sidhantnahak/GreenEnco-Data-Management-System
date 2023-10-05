const express = require('express');
const { validationResult } = require('express-validator')
const router = express.Router();
const Data = require('./newDataSchema');
const { addDataValidation } = require('./data.validation');

!
    router.post('/add-data', addDataValidation, async (req, res) => {

        try {
            const { name, month_year, PVSYST_GHI, PVSYST_GTI, PVSYST_Energy, Contractual_Energy, Actual_GTI, Actual_GHI, PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy, T_Cell_Avg, Actual_Inverter_Energy, Actual_Export_Energy, Actual_Import_Energy, AC_loss, Net_Energy, Normalised_Energy } = req.body;

            if (!name || !month_year || !PVSYST_GHI || !PVSYST_GTI || !PVSYST_Energy || !Contractual_Energy || !Actual_GTI || !Actual_GHI || !PVSyst_GTI_Actual_GTI || !PVSyst_GHI_Actual_GHI || !PVSyst_Energy_Contractual_Energy || !T_Cell_Avg || !Actual_Inverter_Energy || !Actual_Export_Energy || !Actual_Import_Energy || !AC_loss || !Net_Energy || !Normalised_Energy) {
                return res.status(401).json({ message: "enter required fields", sucess: false })
            }
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: errors.array()[0].msg, sucess: false })

            }
            await Data.create({
                name, date:month_year, PVSYST_GHI, PVSYST_GTI, PVSYST_Energy, Contractual_Energy, Actual_GTI, Actual_GHI, PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy, T_Cell_Avg, Actual_Inverter_Energy, Actual_Export_Energy, Actual_Import_Energy, AC_loss, Net_Energy, Normalised_Energy
            })

            return res.status(200).json({ message: "Data added successfully", sucess: true });

        } catch (error) {
            return res.status(500).json({ message: error.message, sucess: false });

        }
    })


router.get('/getalldata', async (req, res) => {

    try {
        const alldata = await Data.find();
        return res.status(200).json({ alldata, sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: true });

    }
})



router.get('/data/:id',  async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Data.findById(id);
        return res.status(200).json({data, sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: true });

    }
})


router.put('/data/:id',addDataValidation, async (req, res) => {

    try {
        const { name, month_year, PVSYST_GHI, PVSYST_GTI, PVSYST_Energy, Contractual_Energy, Actual_GTI, Actual_GHI, PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy, T_Cell_Avg, Actual_Inverter_Energy, Actual_Export_Energy, Actual_Import_Energy, AC_loss, Net_Energy, Normalised_Energy } = req.body;
        const {id}=req.params;

        if (!name || !month_year || !PVSYST_GHI || !PVSYST_GTI || !PVSYST_Energy || !Contractual_Energy || !Actual_GTI || !Actual_GHI || !PVSyst_GTI_Actual_GTI || !PVSyst_GHI_Actual_GHI || !PVSyst_Energy_Contractual_Energy || !T_Cell_Avg || !Actual_Inverter_Energy || !Actual_Export_Energy || !Actual_Import_Energy || !AC_loss || !Net_Energy || !Normalised_Energy) {
            return res.status(401).json({ message: "enter required fields", sucess: false })
        }
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg, sucess: false })

        }
        await Data.findByIdAndUpdate(id, { name, date: month_year, PVSYST_GHI, PVSYST_GTI, PVSYST_Energy, Contractual_Energy, Actual_GTI, Actual_GHI, PVSyst_GTI_Actual_GTI, PVSyst_GHI_Actual_GHI, PVSyst_Energy_Contractual_Energy, T_Cell_Avg, Actual_Inverter_Energy, Actual_Export_Energy, Actual_Import_Energy, AC_loss, Net_Energy, Normalised_Energy });

        return res.status(200).json({ message: "Data updated successfully", sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})


router.delete('/data/:id',  async (req, res) => {

    try {
        const { id } = req.params
        const data = await Data.findById(id);
        if (!data) {
            return res.status(400).json({ message: "Data not found", sucess: true });

        }
        await Data.findByIdAndDelete(id);
        return res.status(200).json({ message: "Data deleted successfully", sucess: true });

    } catch (error) {
        return res.status(500).json({ message: error.message, sucess: false });

    }
})






module.exports = router