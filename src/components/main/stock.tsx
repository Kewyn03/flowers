import React from 'react';
import styled from "styled-components";
import Card from "./card";


const Headlines = styled.div`
 
 
  margin: 150px 250px 0;
`

const Text = styled.span`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 38px;
  line-height: 18px;
  margin-left: 640px;

`




const Stock: React.FC = () => {



    return (
        <>

            <Headlines>
                <Text>Акции</Text>
            </Headlines>
            <Card/>


        </>
    );
};

export default Stock;