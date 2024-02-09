import { Router } from "express";
import bcrypt from "bcrypt";
import UserData from '../model/user.model.js'

const router = Router();

export async function saveUserData(req, res) {
  try {
    //get form user
    const { username, email, password } = req.body;
    //validation
    if (!username || !email || !password) {
      return res.status(400).send({
        message: "please fill all the field",
        success: false,
      });
    }
    //eexisting user
    const existingUser = await UserData.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        message: "User already Exist",
        success: false,
      });
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10);

    //save new User
    const user = new UserData({ username, email, password: hashPassword });
    await user.save();
    return res.status(201).send({
      message: "New User creaed",
      success: true,
      user,
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

export async function loginUser(req, res) {
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
    const user = await UserData.findOne({ email });
    if (!user) {
      return res.status(402).send({
        message: "Email not register",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
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
      user,
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
