import Btn from "./Btn";

const People = (props) => {
    const { people, activeID, changePerson } = props;

    return (
        <ul className="people">
            {people.map((person) => {
                return (
                    <Btn
                        {...person}
                        key={person.id}
                        activeID={activeID}
                        changePerson={changePerson}
                    />
                );
            })}
        </ul>
    );
};

export default People;
