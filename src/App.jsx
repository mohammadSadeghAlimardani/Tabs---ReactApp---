import { LuChevronsRight } from "react-icons/lu";
import './App.css'
import { useEffect, useState } from "react";

const url = 'https://api.npoint.io/d30d080f2dcdeb3623ea';

const App = () => {
    const [people, setPeople] = useState([]);
    const [currentPerson, setCurrentPerson] = useState({});
    const [activeID, setActiveID] = useState(null);

    useEffect(()=>{
        const fetchPeople = async()=>{
            try {
                let resposne = await fetch(url);
                let data = await resposne.json();
                setPeople(data);
                setActiveID(data[0].id);
                setCurrentPerson(data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPeople();
    }, []);
    const changePerson = (id) => {
        const newPerson = people.find((person) => person.id === id);
        setCurrentPerson(newPerson);
        setActiveID(id);
    }
    return (
        <div className="app">
            <section className="app-container">
                <ul className="people">
                    {
                        people.map((person)=>{
                            const {fullName, id} = person;
                            return (
                                <li key={id}>
                                    <a 
                                        href="#" 
                                        className={id === activeID ? "active" : ""}
                                        onClick={(event)=>{
                                            event.preventDefault();
                                            changePerson(id);
                                        }}
                                    >
                                        {fullName}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <article className="person-info">
                    <h2 className="person-job">{currentPerson.job}</h2>
                    <h3 className="person-name">{currentPerson.fullName}</h3>
                    <h3 className="person-work-experience">{currentPerson.workExperience}</h3>
                    <section>
                        <div>
                            <LuChevronsRight />
                        </div>
                        <p>{currentPerson.description}</p>
                    </section>
                </article>
            </section>
        </div>
    )
}
export default App;
