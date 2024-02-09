import { Router } from "express";
const router = Router();
import * as hospitalController from '../controller/hospitalsController.js'
import * as caretackerController from '../controller/caretekkerController.js'
import * as userController from '../controller/userController.js'

// ------------POST Router---------------
router.route('/hospitalsData').post(hospitalController.saveHospital)
router.route('/caretakersData').post(caretackerController.saveCareTakker)
router.route('/usersData').post(userController.saveUserData)



//-------------GET Router-------------------
router.route('/hospitals').get(hospitalController.getAllHospital)
router.route('/caretakers').get(caretackerController.getAllCaretakr)
router.route('/user').get(userController.loginUser)



router.route('/hospitals/filter').get(hospitalController.getHospital);
router.route('/caretackers/filter').get(caretackerController.getCaretakr)



//------------PUT Rouer--------------------





export default router;