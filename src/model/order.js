const sequelize = require('sequelize');
module.exports = function (Sequelize, DataTypes) {
    const Order = Sequelize.define('order', {
     id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
     },
     category: {
      allowNull: false,
      type: DataTypes.STRING
      },
     price: {
      allowNull: false,
      type: DataTypes.INTEGER
     },
     userid:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    }
    },
    {
      sequelize,
      tableName: 'order',
    },
    
    );
 Order.associate = function (models) {
   
  Order.belongsTo(models.user, { foreignKey: "userid", as: "userData" });
};
    return Order;
}
  