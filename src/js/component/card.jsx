import React from 'react';
import PropTypes from "prop-types";

// como componente funcional
function Card(props){
    return (
        <div className="card ms-2 me-2">
            <img src={props.linkImg} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">
                    {props.title}
                </h5>
                <p className="card-text">{props.description}</p>
                <a href={props.linkButton} className="btn btn-primary">{props.button}</a>
            </div>
        </div>);
}

Card.propTypes = {
    linkImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    linkButton: PropTypes.string,
    button: PropTypes.string
}

export default Card;














