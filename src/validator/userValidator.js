const Joi = require('joi');

const createSchema = Joi.object({
    fName: Joi.string().required(),
    lName: Joi.string().required()
   
   
});

const updateSchema = Joi.object({
    fName: Joi.string().min(5).allow(''),
    lName: Joi.string().allow('')
  
   
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

