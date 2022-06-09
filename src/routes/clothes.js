'use strict';
const express = require("express");
const {clothes} = require("../models/index");
const clothesRoute = express.Router();
const validator= require('../middleware/validator');

clothesRoute.get("/", home);
clothesRoute.get("/clothes", getClothes);
clothesRoute.get("/clothes/:id",validator, getOneClothes);
clothesRoute.post("/clothes", createClothes);
clothesRoute.put("/clothes/:id",validator, updateClothes);
clothesRoute.delete("/clothes/:id",validator, deleteClothes);

function home(req,res){
    res.send("Welcome to my api-server");
}

async function getClothes(req, res) {
    let cloth=await clothes.read();
    res.status(200).json(cloth);
}

async function getOneClothes(req, res) {
    const id=parseInt(req.params.id); 
    let cloth=await clothes.read(id);
    res.status(200).json(cloth);
}

async function createClothes(req, res) {
    let newCloth=req.body;
    let created=await clothes.create(newCloth);
    res.status(201).json(created);
}

async function updateClothes(req, res) {
    let id = parseInt(req.params.id);
    let updateClothes = req.body; 
    let foundClothes = await clothes.read(id);
    if (foundClothes) {
        let updatedClothes = await foundClothes.update(updateClothes);
        res.status(201).json(updatedClothes);
    } else {
        res.status(404);
    }
}
async function deleteClothes(req, res) {
    let id = parseInt(req.params.id);
    let deleteClothes = await clothes.delete(id);
    res.status(204).json(deleteClothes); 
}
module.exports = clothesRoute;