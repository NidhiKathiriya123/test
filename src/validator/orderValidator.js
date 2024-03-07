const Joi = require('joi');

const createSchema = Joi.object({
    category: Joi.string().required(),
    price: Joi.number().integer(),
    userid: Joi.number().integer().required()
   
});

const updateSchema = Joi.object({
    category: Joi.string(),
    price: Joi.number().integer(),
    userid: Joi.number().integer()
   
});
const deleteSchema = Joi.object({
    id: Joi.number().integer()
});


exports.validateCreate = (req, res, next) => {
    const { error } = createSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
    status: 400,
    success: false,
    message: error.details[0].message,
  });
    }
    next();
};

exports.validateUpdate = (req, res, next) => {
    const { error } = updateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
    status: 400,
    success: false,
    message: error.details[0].message,
  });
    }
    next();
};

exports.validateDelete = (req, res, next) => {
    const { error } = deleteSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};

