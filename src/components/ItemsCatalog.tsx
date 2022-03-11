import React from 'react';
import styled from "styled-components";
import {useAppSelector} from "../hooks/hooks";
import ArrowRC from '../assets/images/accordion.png'

const Wrapper = styled.div`
  margin: 20px 250px 0;
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

const Accordion = styled.div `
  width: 250px;
  border: 1px solid red;
`

const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  
`

const Label = styled.div`
  position: relative;
  font-size: 20px;
  font-family: 'Museo Sans Cyrl',sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  color: #333333;
  ::after{
    position: absolute;
    right: 0;
    content: url(${ArrowRC});
    padding-right: 10px;
  }
`

const Content = styled.div`
  font-family: 'Museo Sans Cyrl',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 38px;
  color: #956D84;
  padding-left: 35px;
  
`

const ItemsCatalog = () => {

    let {flowers} = useAppSelector(state => state.flowersReducer)

    return (
        <Wrapper>
            <Headline>Каталог товаров</Headline>
            <Accordion>
                <Container>
                    <Label>Букеты</Label>
                    <Content>Букеты из роз</Content>
                    <Content>Букеты из хризантем</Content>
                    <Content>Букеты из альтромерии</Content>
                    <Content>Букеты из гербер</Content>
                    <Content>Букеты из ирисов</Content>
                    <Content>Букеты из пионов</Content>
                </Container>
                <Container>
                    <Label>Розы</Label>
                    <Content>Букеты из роз</Content>
                </Container>
                <Container>
                    <Label>Цветы в коробке</Label>
                    <Content>Какие-то цветы в коробке</Content>
                </Container>
                <Container>
                    <Label>Композиции</Label>
                    <Content>Какие-то композиции</Content>
                </Container>
                <Container>
                    <Label>Подарки</Label>
                    <Content>Какие-то подарки</Content>
                </Container>
                <Container>
                    <Label>Подарочные корзины</Label>
                    <Content>Какие-то подарочные корзины</Content>
                </Container>
            </Accordion>
            {flowers.map(item =>
                <>

                </>
            )}
        </Wrapper>
    );
};

export default ItemsCatalog;