import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:String,
    techStack: [String],
    github: String,
    liveDemo: String,
    imageUrl: String,
},{
    timestamps:true,
})

export default mongoose.model("Project", projectSchema);