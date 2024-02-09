import express from "express";
import { Router } from "express";
const router = Router();
import Caretaker from '../model/caretakker.model.js'
import fs from 'fs';

// save caretaker data
export async function saveCareTakker(req, res) {
  try {
    const rawData = fs.readFileSync('./staticData/caretakerData.json');
    const caretakerData = JSON.parse(rawData);

    for (const caretaker of caretakerData) {
      const existingcaretaker = await Caretaker.findOne({ name: caretaker.name });
      if (!existingcaretaker) {
        await Caretaker.create(caretaker);
      }
    }
    res.json({ message: 'Caretaker data saved successfully.' });
  } catch (error) {
    console.error('Error saving Caretaker:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// get all caretaker data 
export async function getAllCaretakr(req, res) {
  try {
    const caretaker = await Caretaker.find();
    res.json(caretaker);
  } catch (error) {
    console.error('Error fetching caretaker:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// get filtered caretacker
export async function getCaretakr(req, res) {
  try {
    const { state, city } = req.query;
    let filter = {};

    if (state) {
      filter.state = state;
    }

    if (city) {
      filter.city = city;
    }

    const caretaker = await Caretaker.find(filter);
    res.json(caretaker);
  } catch (error) {
    console.error('Error fetching Caretakr:', error);
    res.status(500).json({ error: 'Server error' });
  }
}






