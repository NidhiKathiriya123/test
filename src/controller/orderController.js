const OrderService = require("../service/orderService");
const { responseMessage } = require('../helper/response');

class OrderController {
  constructor() {
    this.orderService = new OrderService();
  }

  update = async (req, res) => {
    const { id } = req.params;
    try {
      const Order = await this.orderService.update(id, req.body);
      res.status(200).json({
        status: 200,
        success: true,
        message: responseMessage.updateDataSuccess('order'),
        data: Order,
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
      const Order = await this.orderService.getAll(limit);
      res.status(200).json({
        status: 200,
        success: true,
        message:  responseMessage.getDataSuccess('order'),
        data: Order,
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
        const Order = await this.orderService.findById(id);
       res.status(200).json({ 
        status: 200,
        success: true,
        message: responseMessage.getDataSuccess('order'),
        data: Order });
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
      const Order = await Promise.all(
        requestBody.map((a) => this.orderService.create(a))
      );
      res.status(200).json({
        status: 200,
        success: true,
        message:  responseMessage.addDataSuccess('order'),
        data: Order,
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
      const Order = await this.orderService.delete(id, req.body);
      res.status(200).json({
        status: 200,
        success: true,
        message: responseMessage.deleteDataSuccess('order'),
        data: Order,
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

module.exports = new OrderController();
