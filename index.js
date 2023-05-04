const app=require('./src/app/app.js')
const Route=require('./src/Router/Routes.js')
require("dotenv").config()
app.set('port',process.env.PORT || 4000)

app.use("/api/sequelize/",Route)



app.listen(app.get('port'),(error)=>{
    error?console.log(error):console.log(`Server run on port ${app.get('port')}`)
})


