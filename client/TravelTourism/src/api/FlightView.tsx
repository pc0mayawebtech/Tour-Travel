import axios from "axios";

type UserData = {
    flyingform: string;
    flyingto: string;
    traveldate: string;
}
const FlightView = async ({ flyingform, flyingto, traveldate }: UserData) => {
    const formattedDate = traveldate.slice(1, 11);
    console.log({ flyingform, flyingto, formattedDate }, "api called main")

    try {
        const response = await axios.post(
            'https://apitest.tripjack.com/fms/v1/air-search-all',
            {
                searchQuery: {
                    cabinClass: 'ECONOMY',
                    paxInfo: {
                        ADULT: '1',
                        CHILD: '0',
                        INFANT: '0',
                    },
                    routeInfos: [
                        {
                            fromCityOrAirport: {
                                code: flyingform,
                            },
                            toCityOrAirport: {
                                code: flyingto,
                            },
                            travelDate: formattedDate,
                        },
                    ],
                    searchModifiers: {
                        isDirectFlight: true,
                        isConnectingFlight: false,
                    },
                },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    apikey: '212487506f845e-8aad-4f5a-a533-fedd68f19b44',
                },
            }
        );
        return response;
    } catch (error: any) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

export default FlightView;  