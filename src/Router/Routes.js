const Route=require("express").Router()
const cors=require("cors");
const morgan=require("morgan")
const multer=require("multer");
const { postOperacion, getOperaciones, getOperacion, updateOperacion, deleteOperacion } = require("../controllers/controllers.js");



Route.use(cors());
Route.use(morgan('dev'))
Route.use(multer().any())


Route.get('/',(req,res)=>{res.send("Hello world")})



Route.post('/operacion',postOperacion)
Route.get('/operaciones',getOperaciones)
Route.get('/operacion/:id',getOperacion)
Route.put('/operacion',updateOperacion)
Route.delete('/operacion/:id',deleteOperacion)




module.exports=Route;


