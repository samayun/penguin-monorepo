const { Schema, model } = require('mongoose');

const modelSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        animalType: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
);

modelSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};

module.exports = model('Pet', modelSchema);
