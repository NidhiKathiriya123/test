const UserService = require("../service/userService");
const { responseMessage } = require('../helper/response');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  update = async (req, res) => {
    const { id } = req.params;
    try {
      const User = await this.userService.update(id, req.body);
      res.status(200).json({
        status: 200,
        success: true,
        message: responseMessage.updateDataSuccess('user'),
        data: User,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: true,
        message: responseMessage.internalServerError,
         error: error.message
        
      });
    }
  };

  getAll = async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
      const User = await this.userService.getAll(limit);
      res.status(200).json({
        status: 200,
        success: true,
        message: responseMessage.getDataSuccess('user'),
        data: User,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: false,
        message:responseMessage.internalServerError, 
        error: error.message
      
      });
    }
  };
  getById = async (req, res) => {
    try {
        const { id } = req.params;
        const User = await this.userService.findById(id);
       res.status(200).json({ 
        status: 200,
        success: true,
        message: responseMessage.getDataSuccess('User'),
        data: User });
    }
    catch (error) {
        console.log('error',error);
        res.status(500).json({ 
          status: 500, 
          success: false, 
          message: responseMessage.internalServerError, 
          error: error.message });
    }
}

  create = async (req, res) => {
    try {
      let requestBody = req.body;
      if (!Array.isArray(requestBody)) {
        requestBody = [requestBody];
      }
      const User = await Promise.all(
        requestBody.map((a) => this.userService.create(a))
      );
      res.status(200).json({
        status: 200,
        success: true,
        message:  responseMessage.addDataSuccess('user'),
        data: User,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: false,
        message:responseMessage.internalServerError,
         error: error.message
        
      });
    }
  };

 delete = async (req, res) => {
  
    try {
      const { id } = req.params; 
      const User = await this.userService.delete(id, req.body);
      res.status(200).json({
        status: 200,
        success: true,
        message: responseMessage.deleteDataSuccess('user'),
        data: User,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: true,
        message:responseMessage.internalServerError,
         error: error.message
      
      });
    }
  };
 
}

module.exports = new UserController();
