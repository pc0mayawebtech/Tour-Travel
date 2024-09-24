import axios from "axios";

type UserData = {
    flyingfromCode: string;
    flyingtoCode: string;
    traveldate: string;
}
const FlightView = async ({ flyingfromCode, flyingtoCode, traveldate }: UserData) => {
    const formattedDate = traveldate.slice(1, 11);
    console.log({ flyingfromCode, flyingtoCode, formattedDate }, "api called main")

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
                                code: flyingfromCode,
                            },
                            toCityOrAirport: {
                                code: flyingtoCode,
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
    } catch (error) {
        console.error('Error:', error);
    }
}

export default FlightView;  