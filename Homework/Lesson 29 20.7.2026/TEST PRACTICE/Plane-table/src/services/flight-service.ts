import axios from "axios";
import { adaptFlights, FlightApiData, FlightModel } from "../models/flight-model";
import { appConfig } from "../utils/app-config";

class FlightService {


    public async getAllFlights(limit: number = 40, offset: number = 0): Promise<FlightModel[]> {

        const response = await axios.get<FlightApiData>(appConfig.govDataUrl);
        const flights = adaptFlights(response.data);
        return flights;

    }



}

export const flightService = new FlightService();
