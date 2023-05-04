const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize('gestion_admin_2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

class Operacione extends Model {

}
Operacione.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    concepto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    monto: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    },
    fecha: {
        type: DataTypes.STRING
    },
    tipo:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    sequelize,
    modelName: 'Operacione'
})
/* async function testConection(){
try {
   await sequelize.authenticate()
   console.log("All Good!!")
} catch (error) {
    console.error("All bad",error)
}

}

testConection() */

module.exports=Operacione;