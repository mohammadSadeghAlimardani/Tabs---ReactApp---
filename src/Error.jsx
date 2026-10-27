const Error = (props) => {
    const { error } = props;
    return (
        <div className="alert alert-danger">
            <div className="alert-icon">&#10799;</div>
            <p>{error}</p>
        </div>
    );
};

export default Error;
