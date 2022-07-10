import newItemSchema from "../schemas/schemaAdmin.js";

export default function validateAdmin(req, res, next){
    const validation = newItemSchema.validate(req.body);
    if (validation.error) {
        return res.status(422).send(validation.error);
    }

    next();
}