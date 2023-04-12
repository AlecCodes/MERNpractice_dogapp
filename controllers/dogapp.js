const express = require("express");
const Dog = require("../models/dog")

const router = express.Router();


router.get("/", async (req,res) => {
    try{
        res.send("GET ROUTE!")
    } catch (error){
        res.status(400).json(error)
    }
})

router.get("/:id", async(req,res) => {
    try{
        res.json(`id show route ${req.params.id}`)
        //res.json(await Dog.findById(req.params.id))
    } catch (error){
        res.status(400).json(error)
    }
})

//create
router.post("/", async(req,res) => {
    try{
        res.json(`post route!~`)
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