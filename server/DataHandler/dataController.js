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



// router.get('/task/:id', isAuthenticated, async (req, res) => {
//     const { id } = req.params;

//     try {
//         const task = await Task.findById(id);
//         return res.status(200).json({ task: task, sucess: true });

//     } catch (error) {
//         return res.status(500).json({ message: error.message, sucess: true });

//     }
// })


// router.put('/task/:id', taskDataValidation, isAuthenticated, async (req, res) => {

//     try {
//         const { title, description, status } = req.body;
//         const { id } = req.params
//         if (!title || !description) {
//             return res.status(401).json({ message: "enter required fields", sucess: false })
//         }
//         const errors = validationResult(req)
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ message: errors.array()[0].msg, sucess: false })

//         }
//         await Task.findByIdAndUpdate(id, { title, description, status });
//         return res.status(200).json({ message: "Task updated successfully", sucess: true });

//     } catch (error) {
//         return res.status(500).json({ message: error.message, sucess: false });

//     }
// })


// router.delete('/task/:id', isAuthenticated, async (req, res) => {

//     try {
//         const { id } = req.params
//         const task = await Task.findById(id);
//         if (!task) {
//             return res.status(400).json({ message: "Task not found", sucess: true });

//         }
//         await Task.findByIdAndDelete(id);
//         return res.status(200).json({ message: "Task deleted successfully", sucess: true });

//     } catch (error) {
//         return res.status(500).json({ message: error.message, sucess: false });

//     }
// })






module.exports = router