import mongoose from "mongoose";


const Tips = new mongoose.Schema({
    tips:{
        type: String,
        required: true
    },
});

const dbTips = mongoose.model("Tips", Tips)
export default dbTips // dbTips is the collection name