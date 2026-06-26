import "./employees.css";

// Demo (server info); getting the animal list from our backend. (API);
const employees = [
    { id: 1, firstName: "Sarah", lastName: "Chen", jobTitle: "Software Engineer" },
    { id: 2, firstName: "Marcus", lastName: "Rodriguez", jobTitle: "UI/UX Designer" },
    { id: 3, firstName: "Elena", lastName: "Rostova", jobTitle: "Data Analyst" },
    { id: 4, firstName: "David", lastName: "Kim", jobTitle: "Product Manager" }
]



export function Employees() {
    return (
        <div className="Employees">

            <h1>Employees:</h1>
            <ul>
                {employees.map(person => <li key={person.id}><p>{person.firstName} {person.lastName} -- {person.jobTitle}</p>  </li>)}
            </ul>
        </div>
    );
}
