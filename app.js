const express = require("express");
const app = express();
const mongoose = require("mongoose");
const stdSchema = require("./stdSchema");
const url = "mongodb+srv://tmpUser0:aBcD.1234@cluster0.sxmwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./stdSchema');

mongoose.connect(url).then(()=>console.log("Connected to Database"));

app.use(express.json())
app.post("/add-new", async(req,res) => {
    const name = req.body.stdName;
    const regno = req.body.stdRegno;
    const marks = req.body.stdMarks;

    try{
        const newStd = new stdSchema({
            StudentName: name,
            RegistrationNumber: regno,
            Marks: marks
        })
        const savedStd = await newStd.save()
        res.json({
            "message":"Std is saved",
            "data": savedStd
        })
    }
    catch(err){
        res.json(err)
    }
})

app.listen(4200, ()=>console.log("Server started"));