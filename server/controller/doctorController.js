import { Router } from "express";
import bcrypt from "bcrypt";
import DoctorData from "../model/doctor.model.js";

const router = Router();

export async function saveDoctorData(req, res) {
  try {
    //get form doctor
    const { doctorname, email, password } = req.body;
    //validation
    if (!doctorname || !email || !password) {
      return res.status(400).send({
        message: "please fill all the field",
        success: false,
      });
    }
    //eexisting doctor
    const existingDoctor = await DoctorData.findOne({ email });
    if (existingDoctor) {
      return res.status(401).send({
        message: "Doctor already Exist",
        success: false,
      });
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10);

    //save new Doctor
    const doctor = new DoctorData({
      doctorname,
      email,
      password: hashPassword,
    });
    await doctor.save();
    return res.status(201).send({
      message: "New doctor creaed",
      success: true,
      doctor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "error in register",
      success: false,
      error,
    });
  }
}

export async function loginDoctor(req, res) {
  try {
    //req from body
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(401).send({
        message: "email or password not match",
        success: false,
      });
    }
    const doctor = await DoctorData.findOne({ email });
    if (!doctor) {
      return res.status(402).send({
        message: "Email not register",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      //console.log(error);
      return res.status(403).send({
        message: "Invlid email or password",
        success: false,
      });
    }
    //console.log(error);
    return res.status(201).send({
      message: "Login sucessfull",
      success: true,
      doctor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "error in login",
      success: false,
      error,
    });
  }
}

export async function getDoctor(req, res) {
  try {
    const { doctorname, email } = req.query;
    let filter = {};

    if (doctorname && email) {
      filter.doctorname = doctorname;
      filter.email = email;
    }

    const doctors = await DoctorData.find(filter);
    res.json(doctors);
  } catch (error) {
    console.error("Error fetching Doctors:", error);
    res.status(500).json({ error: "Server error" });
  }
}
