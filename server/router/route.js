import { Router } from "express";
const router = Router();
import * as hospitalController from "../controller/hospitalsController.js";
import * as caretackerController from "../controller/caretekkerController.js";
import * as userController from "../controller/userController.js";
import * as doctorController from "../controller/doctorController.js";
import * as receptionController from "../controller/receptionController.js";

// ------------POST Router---------------
router.route("/hospitalsData").post(hospitalController.saveHospital);
router.route("/caretakersData").post(caretackerController.saveCareTakker);
router.route("/usersData").post(userController.saveUserData);
router.route("/doctorData").post(doctorController.saveDoctorData);
router.route("/receptionData").post(receptionController.saveRceptionData);

//-------------GET Router-------------------
router.route("/hospitals").get(hospitalController.getAllHospital);
router.route("/caretakers").get(caretackerController.getAllCaretakr);
router.route("/user").get(userController.loginUser);
router.route("/doctor").get(doctorController.loginDoctor);
router.route("/reception").get(receptionController.loginRception);

router.route("/hospitals/filter").get(hospitalController.getHospital);
router.route("/caretackers/filter").get(caretackerController.getCaretakr);
router.route("/users/filter").get(userController.getUser);
router.route("/doctors/filter").get(doctorController.getDoctor);

//------------PUT Rouer--------------------

export default router;
