import mongoose from "mongoose";

const userFlightCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    citycode: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    countrycode: {
        type: String,
        required: true,
        trim: true,
    }
});

const userflight = new mongoose.model("flightdatacode", userFlightCodeSchema);
export default userflight;