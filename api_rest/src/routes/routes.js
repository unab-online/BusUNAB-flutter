const router = require('express').Router();
const driverController= require('../controller/Driver.ctrl')
//Driver
//get state
router.get('/test',driverController.test)
//login
router.post('/login',driverController.login)
//get state
router.get('/get-state',driverController.getState)
//create drivers
router.post('/create-driver',driverController.createDriver)
//StartWorking
router.post('/start-working',driverController.startWorking)




//Bus

module.exports = router;