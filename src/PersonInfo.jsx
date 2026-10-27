import { LuChevronsRight } from "react-icons/lu";

const PersonInfo = (props) => {
    const { currentPerson } = props;
    return (
        <article className="person-info">
            <h2 className="person-job">{currentPerson.job}</h2>
            <h3 className="person-name">{currentPerson.fullName}</h3>
            <h3 className="person-work-experience">
                {currentPerson.workExperience}
            </h3>
            <section>
                <div>
                    <LuChevronsRight />
                </div>
                <p>{currentPerson.description}</p>
            </section>
        </article>
    );
};

export default PersonInfo;
