const Btn = (props) => {
    const { id, activeID, changePerson, fullName } = props;
    return (
        <li key={id}>
            <a
                href="#"
                className={id === activeID ? "active" : ""}
                onClick={(event) => {
                    event.preventDefault();
                    changePerson(id);
                }}
            >
                {fullName}
            </a>
        </li>
    );
};

export default Btn;
