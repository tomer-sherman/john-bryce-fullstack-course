import { FlightModel } from "../../../models/flight-model";
import "./flight-row.css";

export type FlightProp = {
    flight: FlightModel;
}


export function FlightRow(props: FlightProp) {
    return (
        <tr className="FlightRow">
            <td>{props.flight.flightNumber}</td>
            <td>{props.flight.airlineName}</td>
            <td>{new Date(props.flight.departureTime).toLocaleTimeString()}</td>
            <td>{props.flight.destinationCountry}</td>
            <td>{props.flight.destinationCity}</td>
            <td>{props.flight.status}</td>
        </tr>
    );
}
