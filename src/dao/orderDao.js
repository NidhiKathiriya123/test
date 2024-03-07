const model = require("../model");
const Order = model.order;
const User = model.user;
class OrderDao {
  async create(OrderData) {
    return await Order.create(OrderData);
  }

  async getAll(limit,isDeleted) {
   
    let whereCondition = {};
    if (isDeleted != null) {
        whereCondition.deleted = isDeleted;
    }
    const queryOptions = {
        where: whereCondition,
    };
    if (limit !== undefined && limit !== 0) {
        queryOptions.limit = limit;
    }
    
    return await Order.findAll({
      ...queryOptions,
      include: { model: User, as: "userData" },
      
    });
  }
  async delete(id) {
    return await Order.destroy({
      where: { id: id },
    });
  }

  async update(id, updateData) {
    return await Order.update(updateData, {
       where: { id } 
      });
  }

  async FindById(id) {
    return await Order.findOne({ 
      where: { id } 
    });
  }
}

module.exports = OrderDao;
