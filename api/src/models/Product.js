const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


// Creation date: November, 29
// Name in DB: products
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    idproduct: {                     //Id del producto
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nameproduct: {                   //Nombre del producto
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    normalprice: {                   //Precio Normal
      type: DataTypes.REAL,
    },
    discountprice: {                 //Precio con descuento
      type: DataTypes.REAL,
    },
    promotionprice: {                //Precio de promoción
      type: DataTypes.REAL,
    },
    productstock: {                  //Cantidad de piezas existentes 
      type: DataTypes.INTEGER,
    },
    productpresentation: {           //Presentación ejemplo: 300 gms, 500 gms, 1 kg
      type: DataTypes.STRING(15),
    },
    productimage: {                   //URL de la imagen
      type: DataTypes.STRING(255),
    },
    productdescription: {             //Descripción del producto
      type: DataTypes.TEXT,
    },
    created: {
      type: DataTypes.STRING, // Probar boolean
      defaultValue: "true",
    },
  },
  {
    timestamps: false,
  });
};
