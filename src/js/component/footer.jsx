import React from 'react';
import PropTypes from "prop-types";

// como componente funcional
function Footer(props){
    return (
        <footer className="bg-dark text-center text-lg-start mt-5">
            <div className="text-center p-3 text-white">
            {props.description}
            </div>
        </footer>
    );
    
}

Footer.propTypes = {
    description: PropTypes.string,
}

export default Footer;