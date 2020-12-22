import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";



const Header = ({ title }) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    background-color: #519fe9;
    padding: 10px;
    font-weight: bold;
    color: white;
    border-radius: 20px 20px 0 0;
    
    @media screen and (max-width: 600px) {
        margin-left: 2%;
        margin-right: 2%;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
`;

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;