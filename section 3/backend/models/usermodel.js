const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('users', mySchema);

// title : String
// price : Number
// description : String
// category : String
// image : String