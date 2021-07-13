const express = require('express');
const router = express.Router()
const CURDcontroller = require('.././Controllers/CURDcontroller')

router.route('/')
.get(CURDcontroller.getAllInfo)
.post(CURDcontroller.AddInfo);

router.route('/:id')
.get(CURDcontroller.getSingleInfo)
.patch(CURDcontroller.changeInfo)
.delete(CURDcontroller.deleteInfo)

module.exports = router