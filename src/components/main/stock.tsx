import React from 'react';
import styled from "styled-components";

import {ReactComponent as SliderArrowRC} from '../../assets/images/arrowSlider.svg'
import Card from "./card";

const Headlines = styled.div`
  display: flex;
  justify-content: center;
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

const SliderGroup = styled.span `
  margin-left: auto;
  
 
`

const SliderArrow = styled(SliderArrowRC)`
  cursor: pointer;
  transition: .5s;
  &:hover {
    opacity: 0.7;
    
  }
  
  &:nth-child(1) {
    margin-right: 20px;
  }

  &:nth-child(2) {
    transform: scale(-1, 1);
  }

`

const Stock = () => {
    return (
        <>
            <Headlines>
                <Text>Акции</Text>
                <SliderGroup>
                    <SliderArrow/>
                    <SliderArrow/>
                </SliderGroup>
            </Headlines>
            <Card/>
        </>
    );
};

export default Stock;