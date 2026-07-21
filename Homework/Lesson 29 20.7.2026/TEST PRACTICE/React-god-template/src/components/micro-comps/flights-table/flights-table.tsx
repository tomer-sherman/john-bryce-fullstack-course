
import "./flights-table.css";

import { FlightRow } from "../flight-row/flight-row";
import { FlightModel } from "../../../models/flight-model";

type FlightsTableProps = {
    flights: FlightModel[];
}

export function FlightsTable(props: FlightsTableProps) {


    return (
        <div className="FlightsTable">
            <table>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Airline</th>
                        <th>Departure Time</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.flights.map(f => <FlightRow key={f.id} flight={f} />)}
                </tbody>


            </table>


        </div>
    );
}
