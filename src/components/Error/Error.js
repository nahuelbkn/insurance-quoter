import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types"


const Error = ({ message }) => {
    return (
        <ErrorParagraph>
            {message}
        </ErrorParagraph>
    );
}

const ErrorParagraph = styled.p`
    text-align: center;
    position: relative;
    padding: .75rem 1.25rem;
    border-radius: .5rem;
    font-weight: 600;
    color: #721c24;
    background-color: #e6bbbe;
    border: 2px solid #d38f96;
    margin: 0;
`;

Error.propTypes = {
    message: PropTypes.string.isRequired
}
 
export default Error;