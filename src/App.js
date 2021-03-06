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
  const [data, updateData] = useState(initialData);
  const [report, updateReport] = useState(null); 
  const [recharge, updateRecharge] = useState(false)


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

  useEffect(() => {
    updateRecharge(true);
  }, [report])

  


  return (
    <AppContainer>
      <SectionCantainer>
        <Header title="Cotizador de seguros vehiculares" />
        <Container>
          <MainForm updateDataApp={updateData}/>
        </Container>
      </SectionCantainer>
      {
        report && (
          <SectionCantainer>
            <Header title="Informe de la cotización" />
            <Container>
              <Report report={report} recharge={recharge} updateRecharge={updateRecharge} />
            </Container>
          </SectionCantainer>
        )
      }
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1050px;
  margin: auto;
  margin-top: 70px;

  @media screen and (max-width:375px) {
    display: block;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const SectionCantainer = styled.div`
  display: block;
  max-width: 600px;
`;

const Container = styled.div`
  background-color: lavender;
  padding: 40px;
  border-radius: 0 0 20px 20px;
  transition: all 1s ease;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    margin-left: 2%;
    margin-right: 2%;
    padding: 30px;
  }
`;

export default App;
