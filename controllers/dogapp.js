const express = require("express");
const Dog = require("../models/dog")

const router = express.Router();


router.get("/", async (req,res) => {
    try{
        res.json(await Dog.find({}))
    } catch (error){
        res.status(400).json(error)
    }
})

router.get("/:id", async(req,res) => {
    try{
        res.json(await Dog.findById(req.params.id))
    } catch (error){
        res.status(400).json(error)
    }
})

//create
router.post("/", async(req,res) => {
    try{
        res.json(await Dog.create(req.body))
    } catch (error){
        res.status(400).json(error)
    }
})

router.put("/:id", async(req,res) => {
    try {
        res.json(`put route`)
    } catch (error){
        res.status(400).json(error)
    }
}) 

module.exports = router