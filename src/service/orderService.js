const OrderDao = require("../dao/orderDao");
const { responseMessage } = require('../helper/response');

class OrderService {
  constructor() {
    this.orderDao = new OrderDao();
  }

  async getAll(limit,isDeleted) {
    return await this.orderDao.getAll(limit,isDeleted);
  }
  /*async getAll(isDeleted) {
    return await this.bottDao.findAll(isDeleted);
  }*/
  

  async create(Orderdata) {
    return await this.orderDao.create(Orderdata);
  }

  async update(id, updateData) {
    const OrderData = await this.orderDao.FindById(id);
    if (!OrderData) {
      throw new Error(responseMessage.notFound('order'));
    }
    return await this.orderDao.update(id, updateData);
  }
  async findById(id) {
    const OrderData= await this.orderDao.FindById(id);
    if (!OrderData) {
        throw new Error(responseMessage.notFound('order'))
    }
    return await this.orderDao.FindById(id);;
  }

  async delete(id) {
    const OrderData = await this.orderDao.FindById(id);
    if (!OrderData) {
        throw new Error(responseMessage.notFound('order'))
    }
    return await this.orderDao.delete(id);
  }
}
module.exports = OrderService;
