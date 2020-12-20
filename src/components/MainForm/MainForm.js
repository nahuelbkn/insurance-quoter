import React, { useEffect, useState } from 'react';
import  styled from "@emotion/styled";
import Error from '../Error/Error';
import PropTypes from "prop-types";


const MainForm = ({ updateDataApp }) => {

    const currentYear = new Date().getFullYear();
    const arrayYears = [];
    for( let i=currentYear; i > (currentYear-20); i-- ) { arrayYears.push(i) }

    /* STATES and necessary destructurings -------------------------------------------------- */
    const initialData = {
        origin: "",
        year: "",
        coverage: ""
    }

    // States
    const [data, updateDataMainForm] = useState(initialData);
    const [error, updateError] = useState(false);
    const [triedSubmit, updateTriedSubmit] = useState(false);

    // Destructurings
    const { origin, year, coverage } = data;
    /* ------------------------------------------------------------------------------------ */

    useEffect(()=>{
        if ( triedSubmit && ( !origin || !year || !coverage ) )
        {
            updateError(true);
        } else {
            updateError(false);
        }
    }, [data])


    const  getData = (event)=>{
        updateDataMainForm({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handlerSubmit = (event)=>{
        event.preventDefault();
        updateTriedSubmit(true);

        if ( !origin || !year || !coverage  )
        {
            updateError(true);
        } else {
            updateError(false);
            updateDataApp(data);
        }
    }



    return (

        <form onSubmit={handlerSubmit} >
            {
                error && (
                    <Field>
                        <Error message="Debe completar la información" />
                    </Field>
                )
            }
            <Field>
                <Label>Origen</Label>
                <Select
                    name="origin"
                    value={origin}
                    onChange={ getData }
                >
                    <option key={Math.random()} value="" >Seleccionar</option>
                    <option key={Math.random()} value="national" >Nacional</option>
                    <option key={Math.random()} value="imported" >Importado</option>
                </Select>
            </Field>

            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={ getData }
                    
                > 
                    <option key={Math.random()} value="" >Seleccionar</option> 
                    { arrayYears.map(year=><option key={Math.random()} value={year} >{year}</option>) }
                </Select>
            </Field>

            <Field>
                <Label>Cobertura</Label>
                <div>
                    <InputRadio
                        type="radio"
                        name="coverage"
                        value="basic"
                        checked={ coverage === "basic" }
                        onChange={ getData }
                    />Básica
                </div>
                <div>
                    <InputRadio
                        type="radio"
                        name="coverage"
                        value="complete"
                        checked={ coverage === "complete" }
                        onChange={ getData }
                    />Completa
                </div>
                
            </Field>

            <CalculateButton
                type="submit"
            >Calcular</CalculateButton>
        </form>
    );
}
 
const Field = styled.div`
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    font-weight: bolder;
    font-size: .95rem;
    color: #384961;
`;

const Select = styled.select`
    width: 100%;
    padding: .3rem;
    border: 1px solid #aaaaaa;
    margin-top: .2rem;
    margin-bottom: .7rem;

    -webkit-appearance: none;
    ::-webkit-scrollbar {
        background-color: silver;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 5px;
    }::-webkit-scrollbar-thumb:hover {
        background-color: rgb(94, 94, 94);
        border-radius: 5px;
    }
    :focus {
        outline: none;
    }
`;

const InputRadio = styled.input`
    margin-top: .5rem;
    margin-left: 1.5rem;
    margin-right: .3rem;
`;

const CalculateButton = styled.button`
    background-color: #06668F;
    font-size: 16px;
    width: 100%;
    padding: .7rem;
    color: white;
    font-weight: bold;
    border: none;
    margin-top: 23px;
    border-radius: 5px;
    transition: all .7s ease;

    :hover {
        transform: scale(1.035);
        background-color: #0779DF;
        cursor: pointer;
    }
    :focus {
        outline: none;
    }
`;

MainForm.propTypes = {
    updateDataApp: PropTypes.func.isRequired
}

export default MainForm;