const model = require("../model");
const User = model.user;
const Order = model.order;
class UserDao {
  async create(UserData) {
    return await User.create(UserData);
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
    
    return await User.findAll({
      ...queryOptions,
      include: { model: Order, as: "orderData" },
      
    
    });
  }
  async delete(id) {
    return await User.destroy({
      where: { id: id },
    });
  }

  async update(id, updateData) {
    return await User.update(updateData, { where: { id } });
  }

  async FindById(id) {
    return await User.findOne({ where: { id } });
  }
}

module.exports = UserDao;
