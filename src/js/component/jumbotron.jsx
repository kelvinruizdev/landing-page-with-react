import React from 'react';
import PropTypes from "prop-types";

// como componente funcional
function Jumbotron(props){
    return (
    <div className="container bg-light border rounded py-5 my-3">
        <h1 className="display-5 fw-bold p-1">
            {props.title}
        </h1>
        <p className="col-md-8 fs-4 p-1"> {props.description} </p>
        <button className="btn btn-primary btn-lg p-1" type="button">
            {props.button}
        </button>
    </div>);
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string
}

export default Jumbotron;










