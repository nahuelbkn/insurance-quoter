import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Spinner from './../../components/Spinner/Spinner';


const Report = ({ report, recharge, updateRecharge }) => {

    const { quotation, queryData } = report;
    const { origin, year, coverage } = queryData;

    setTimeout(()=>{ updateRecharge(false) }, 2300);

    
    return (
        recharge ? <Spinner /> : (
            <List>
                <ListItem>
                    <Label>Origen:</Label>
                    {origin}
                </ListItem>
                <ListItem>
                    <Label>Año:</Label>
                    
                    {year}
                </ListItem>
                <ListItem>
                    <Label>Cobertura:</Label>
                    {coverage}
                </ListItem>
                <ListItemResult>
                    <Label>Cotización:</Label>
                    <Result>${quotation}</Result>
                </ListItemResult>
            </List>
        )
    );
}

const List = styled.ul`
    list-style: none;
    padding: 0;
    padding-left: 35px;
    margin: none;
    font-size: 1.2rem;

    @media screen and (max-width: 600px) {
        padding: 0;
        margin: 0;
        margin-left: 14px;
    }
`;

const ListItem = styled.li`
    padding: .3rem;
    padding-left: 1.2rem;
    text-align: left;
    max-width: 212px;

    @media screen and (max-width: 600px) {
        padding-left: 1.4rem;
    }
`;

const ListItemResult = styled.li`
    margin: 0;
    max-width: 212px;
    margin-top: 1rem;
    font-size: 1.4rem;
    padding: .3rem;
    padding-left: .6rem;
    border: 1px solid green;
    border-radius: 7px;
    background-color: #bef0be;
`;

const Label = styled.label`
    font-weight: bolder;
    color: #384961;
    padding-right: 15px;
`;

const Result = styled.span`
    font-size: 1.6rem;
    font-weight: bold;
    color: rgb(38, 104, 52);
`;


Report.propTypes = {
    report: PropTypes.object.isRequired
}
 
export default Report;