import React,  { useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import styled from "@emotion/styled";
import MainForm from './components/MainForm/MainForm';
import calculateCoute from "./calculateCuote";
import Report from './components/Report/Report';
import {
  translateOrigin,
  translateCoverage
} from "./helpers";



function App() {

  /* STATES and necessary destructuings -------------------------------------------------- */

  const initialQuotation = 2000; // It starts with a base of $ 2000

  const initialData = {
    origin: "",
    year: "",
    coverage: ""
  }

  // States
  const [report, updateReport] = useState(null); 
  const [data, updateData] = useState(initialData);
  

  // Destructurings
  const { origin, year, coverage } = data;
  /* ------------------------------------------------------------------------------------ */

  useEffect(()=>{
    if (origin && year && coverage) {
      updateReport({
        quotation: calculateCoute(origin, year, coverage, initialQuotation),
        queryData: {
          origin: translateOrigin(origin), 
          year, 
          coverage: translateCoverage(coverage) 
        }
      })
    }
  }, [data]);

  


  return (
    <AppContainer>
      <Header title="Cotizador de seguros vehiculares" />
      <Container>
        <MainForm updateDataApp={updateData}/>
      </Container>
      {
        report && (
          <>
            <Header title="Informe de la cotización" />
            <Container>
             <Report report={report} />
            </Container>
          </>
        )
      }
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 70px;

  @media screen and (max-width:375px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Container = styled.div`
  background-color: lavender;
  padding: 40px;
  border-radius: 0 0 20px 20px;
  transition: all 1s ease;
  margin-bottom: 40px;

  @media screen and (max-width:375px) {
    margin-left: 20px;
    margin-right: 20px;
    padding: 30px;
  }
`;

export default App;
