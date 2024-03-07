const UserDao = require("../dao/userDao");
const { responseMessage } = require('../helper/response');

class UserService {
  constructor() {
    this.userDao = new UserDao();
  }

  async getAll(limit,isDeleted) {
    return await this.userDao.getAll(limit,isDeleted);
  }
  /*async getAll(isDeleted) {
    return await this.bottDao.findAll(isDeleted);
  }*/
  

  async create(UserData) {
    return await this.userDao.create(UserData);
  }

  async update(id, updateData) {
    const UserData = await this.userDao.FindById(id);
    if (!UserData) {
      throw new Error(responseMessage.notFound('user'));
    }
    return await this.userDao.update(id, updateData);
  }
  async findById(id) {
    const UserData= await this.userDao.FindById(id);
    if (!UserData) {
        throw new Error(responseMessage.notFound('user'))
    }
    return await this.userDao.FindById(id);;
  }

  async delete(id) {
    const UserData = await this.userDao.FindById(id);
    if (!UserData) {
        throw new Error(responseMessage.notFound('user'))
    }
    return await this.userDao.delete(id);
  }
}
module.exports = UserService;
