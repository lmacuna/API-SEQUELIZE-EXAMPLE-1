const Operaciones = require('../model/model.js')

const postOperacion = async (req, res) => {
  try {

    var { concepto, monto, fecha, tipo } = req.body
    await Operaciones.sync()

    const CreateOperaciones = await Operaciones.create({
      concepto,
      monto,
      fecha,
      tipo

    })

    return (res.status(201), res.json({ "data": "Insertado correctamente" }))
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message })
  }

}



const getOperaciones = async (req, res) => {

  try {
    const data = await Operaciones.findAll()

    return res.json({ "data": data })
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message })
  }
}

const getOperacion = async (req, res) => {

  try {
    var id = req.params.id
    id = parseInt(id)
    var data = await Operaciones.findOne({
      where: {
        id,
      },
    })

    return res.json({ "data": data })
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message })
  }
}


const updateOperacion = async (req, res) => {
  try {

    var {id, concepto, monto, fecha, tipo } = req.body
    id=parseInt(id)
    monto=parseFloat(monto)

    var updateOp;

    monto? updateOp = await   Operaciones.update({
      monto:monto,
  
    }, {
      where: {
        id,
      },
    }):null

    concepto?  updateOp = await  Operaciones.update({
      concepto:concepto,
     
    }, {
      where: {
        id,
      },
    }):null

    fecha?  updateOp = await  Operaciones.update({
      fecha:fecha,
     
    }, {
      where: {
        id,
      },
    }):null
    tipo?  updateOp = await   Operaciones.update({
      tipo:tipo,
     
    }, {
      where: {
        id,
      },
    }):null

    

    return res.json({ "data":updateOp})
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message })
  }
}


const deleteOperacion=async(req,res)=>{

  try {
    
    var {id}=req.params

         id=parseInt(id)
         const delOp=Operaciones.destroy({
          where:{
            id:id
          }
         })

         return res.json({"data":"Item eliminado"})
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message })
  }

}

module.exports = { postOperacion, getOperaciones, getOperacion, updateOperacion,deleteOperacion }