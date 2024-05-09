const  mongoose = require ('mongoose');

const IncomeSchema = new mongoose.Schema({
    title : { type:String, require: true, maxLength: 20,trim: true },

    amount: {type:Number , required : true, maxLength: 20, trim:true },

    type: { type: String, default:"income"},

    date: {type:String, require: true ,trim : true},

    category : { type: String, require: true, maxLength: 35, trim:true},

    description : {type: String, require : true , maxLength: 35, trim : true}

}, {timestamps: true})

module.exports = mongoose.model('Income', IncomeSchema);
