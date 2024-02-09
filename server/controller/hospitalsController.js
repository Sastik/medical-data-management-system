import express from "express";
import { Router } from "express";
const router = Router();
import Hospital from '../model/hospital.model.js'
import fs from 'fs';

// save hospital data
export async function saveHospital(req, res) {
  try {
    const rawData = fs.readFileSync('./staticData/hospitalData.json');
    const hospitalData = JSON.parse(rawData);

    for (const hospital of hospitalData) {
      const existingHospital = await Hospital.findOne({ name: hospital.name });
      if (!existingHospital) {
        await Hospital.create(hospital);
      }
    }
    res.json({ message: 'Hospital data saved successfully.' });
  } catch (error) {
    console.error('Error saving hospitals:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// get all hospitals data 
export async function getAllHospital(req, res) {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
//get filter hospital

export async function getHospital(req, res) {
  try {
    const { state, city } = req.query;
    let filter = {};

    if (state) {
      filter.state = state;
    }

    if (city) {
      filter.city = city;
    }

    const hospitals = await Hospital.find(filter);
    res.json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ error: 'Server error' });
  }
}








