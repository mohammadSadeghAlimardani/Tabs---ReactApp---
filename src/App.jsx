import "./App.css";
import { useEffect, useState } from "react";
import People from "./People";
import Person from "./PersonInfo";
import Loading from "./Loading";
import Error from "./Error";

const url = "https://api.npoint.io/bd8fe71e6220137944f3";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [people, setPeople] = useState([]);
    const [currentPerson, setCurrentPerson] = useState({});
    const [activeID, setActiveID] = useState(null);

    const fetchPeople = async () => {
        try {
            let resposne = await fetch(url);
            let data = await resposne.json();
            setPeople(data);
            setActiveID(data[0].id);
            setCurrentPerson(data[0]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setIsError(error);
        }
    };
    useEffect(() => {
        fetchPeople();
    }, []);

    const changePerson = (id) => {
        const newPerson = people.find((person) => person.id === id);
        setCurrentPerson(newPerson);
        setActiveID(id);
    };

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <div className="app">
            <section className="app-container">
                <People
                    people={people}
                    activeID={activeID}
                    changePerson={changePerson}
                />
                <Person currentPerson={currentPerson} />
            </section>
        </div>
    );
};
export default App;
