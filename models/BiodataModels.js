import mongoose from "mongoose"

const BiodataSchema = new mongoose.Schema(
    {
        name : String,
        hobby : String,
        age : Number,
        game : String
    }
)

const Biodata = mongoose.model('Biodata', BiodataSchema)

export default Biodata