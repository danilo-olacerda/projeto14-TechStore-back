import joi from 'joi';

const imgPattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg|).{0,20000}/ ;

const newItemSchema = joi.object({
    quantity: joi.number().greater(0).required(),
    value: joi.number().greater(0).required(),
    category: joi.string().min(1).max(30),
    name: joi.string().min(2).max(30).required(),
    image: joi.string().pattern(new RegExp(imgPattern)).required()
});

export default newItemSchema;