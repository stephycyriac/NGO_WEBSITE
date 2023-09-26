import express from "express";

const NGO = express();

NGO.get("/"  , (req,res)=> res.json({message: "Setup Success"}));

NGO.listen(4000,() => console.log("Server is running"))