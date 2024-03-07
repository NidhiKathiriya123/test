const sequelize = require('sequelize');
module.exports = function (Sequelize, DataTypes) {
    const User = Sequelize.define('user', {
     id: {
       allowNull: false,
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true
     },
    fName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lName: {
      allowNull: false,
      type: DataTypes.STRING
    }
    
   },
   {
    sequelize,
    tableName: 'user',
  },
   );

   User.associate = function (models) {
  
    User.hasMany(models.order, { foreignKey: "userid", as: "orderData" });
 
   
  };
   return User;
   };