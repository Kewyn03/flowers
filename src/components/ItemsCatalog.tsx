import React from 'react';
import styled from "styled-components";
import Accordion from "./Accordion";
import OneCard from "./main/OneCard";
import {IRoses} from "../models/IFlower";

const Wrapper = styled.div`
  margin: 20px 250px 0;
  
`

const Wrap = styled.div`
  display: flex;
`
const Headline = styled.div`
  display: flex;
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 48px;
  line-height: 18px;
  justify-content: center;
  margin-top: 100px;

`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  margin-left: 80px;
  margin-top: 30px;
`

interface ItemsCatalogProps {
    flowers: IRoses[]
}

const ItemsCatalog:React.FC <ItemsCatalogProps> = ({flowers}) => {

    return (
        <Wrapper>

            <Headline>Каталог товаров</Headline>

            <Wrap>
                <Accordion/>
                <Container>
                    {flowers.map(item =>
                        <OneCard key={item.id} item={item}/>
                    )}
                </Container>
            </Wrap>

        </Wrapper>
    );
};

export default ItemsCatalog;