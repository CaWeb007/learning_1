import mongoose from "mongoose"

const CommentsSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.models.Comments || mongoose.model("Comments", CommentsSchema)