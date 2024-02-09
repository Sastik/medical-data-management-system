import { Router } from "express";
import bcrypt from "bcrypt";
import receptionData from "../model/reception.model.js";

const router = Router();

export async function saveRceptionData(req, res) {
  try {
    //get form reception
    const { reception_place, email, password } = req.body;
    //validation
    if (!reception_place || !email || !password) {
      return res.status(400).send({
        message: "please fill all the field",
        success: false,
      });
    }
    //eexisting reception
    const existingRception = await receptionData.findOne({ email });
    if (existingRception) {
      return res.status(401).send({
        message: "Rception already Exist",
        success: false,
      });
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10);

    //save new Rception
    const Rception = new receptionData({
      reception_place,
      email,
      password: hashPassword,
    });
    await Rception.save();
    return res.status(201).send({
      message: "New Rception creaed",
      success: true,
      Rception,
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

export async function loginRception(req, res) {
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
    const Rception = await receptionData.findOne({ email });
    if (!Rception) {
      return res.status(402).send({
        message: "Email not register",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, Rception.password);
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
      Rception,
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
