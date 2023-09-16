import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
    const personName = {
        first: "Bruce",
        last: "Wayne",
    };

    const nameList = [
        {
            first: "Bruce",
            last: "Wayne",
        },
        {
            first: "Clark",
            last: "Kent",
        },
        {
            first: "Princess",
            last: "Diana",
        },
    ];

    return (
        <>
            <div className="App">
                <Greet name="denZ" messageCount={10} isLoggedIn={false} />
                <Person name={personName} />
                <PersonList names={nameList} />
                <Status status="loading" />
            </div>
        </>
    );
}

export default App;
