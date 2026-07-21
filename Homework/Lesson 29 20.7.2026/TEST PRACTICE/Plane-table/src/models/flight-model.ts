// 1. The Messy API Type (Data Transfer Object)
export type FlightApiData = {
    result: {
        records: {
            _id: number;
            CHFLTN: string;
            CHOPERD: string;
            CHSTOL: string;
            CHPTOL: string;
            CHLOC1T: string;
            CHRMINE: string;
            CHOGETF: string;
        }[];
    };
};

// 2. The Clean App Type (Domain Model)
export type FlightModel = {
    id: number;
    flightNumber: string;
    airlineName: string;
    departureTime: string;
    destinationCountry: string;
    destinationCity: string;
    status: string;
};

// 3. The Adapter Function 
export const adaptFlights = (data: FlightApiData): FlightModel[] => {
    return data.result.records.map((raw) => ({
        id: raw._id,
        flightNumber: raw.CHFLTN,
        airlineName: raw.CHOPERD,
        departureTime: raw.CHPTOL || raw.CHSTOL,
        destinationCountry: raw.CHOGETF,
        destinationCity: raw.CHLOC1T,
        status: raw.CHRMINE
    }));
};