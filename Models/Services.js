import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema({
    title: String,
    service: [
        {
            name: String,
            image_url: String
        }

    ]
});
const Services = mongoose.model('Services', ServicesSchema);
export default Services;