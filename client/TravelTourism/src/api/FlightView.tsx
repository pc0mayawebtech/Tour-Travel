import axios from "axios";
const FlightView = async () => {
    try {
        const response = await axios.get('https://api.aviationstack.com/v1/flights?access_key=9589523bb86085322f2329ad4b7b0f37');
        console.log('apidata', response.data);
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
}

export default FlightView;  