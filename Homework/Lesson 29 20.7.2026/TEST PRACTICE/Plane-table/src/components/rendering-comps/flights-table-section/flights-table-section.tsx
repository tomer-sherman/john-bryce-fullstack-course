import { useEffect, useState } from "react";
import "./flights-table-section.css";
import { FlightModel } from "../../../models/flight-model";
import { flightService } from "../../../services/flight-service";
import { notify } from "../../../utils/notify";
import { FlightsTable } from "../../micro-comps/flights-table/flights-table";
// Adjust the relative path to your new shared-comps folder if needed
import { Pagination } from "../../shared-comps/pagination/pagination";

export function FlightsTableSection() {
    const [flights, setFlights] = useState<FlightModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const limit = 40; // 40 flights per page

    useEffect(() => {
        setLoading(true);
        // Fetching everything once!
        flightService.getAllFlights()
            .then(f => setFlights(f))
            .catch(err => notify.error(err.message))
            .finally(() => setLoading(false))
    }, []) // Empty dependency array: only runs once on mount

    const renderContent = () => {
        if (loading) { return <div className="loading-state">Loading flights...</div> }
        if (flights.length === 0) { return <div className="empty-state">No flights found, something went wrong</div>; }

        // --- THE MAGIC IS HERE ---
        // Calculate where to cut the array based on the current page
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        // Slice out just the 40 flights for this specific page
        const currentFlights = flights.slice(startIndex, endIndex);

        // Pass the sliced array down, not the whole thing!
        return <FlightsTable flights={currentFlights} />;
    };

    return (
        <div className="FlightsTableSection">
            <h2>Ben Gurion Departures</h2>

            {renderContent()}

            <Pagination
                page={page}
                onNext={() => setPage(prev => prev + 1)}
                // Don't let them go below page 1
                onPrev={() => setPage(prev => Math.max(1, prev - 1))}
                // Disable Next if we are on the last chunk of flights
                isNextDisabled={page * limit >= flights.length}
            />
        </div>
    );
}