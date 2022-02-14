import React from 'react';
import styled, {css} from "styled-components";

import Bigimg from '../../assets/images/Bigimg.png'
import Roses from '../../assets/images/roses.png'
import Gifts from '../../assets/images/gifts.png'
import Giftbucket from '../../assets/images/giftbucket.png'
import Flowersbox from '../../assets/images/flowersbox.png'
import Rosesbox from '../../assets/images/rosesbox.png'


const Container = styled.div`
  display: flex;
  max-width: 1420px;
  margin: 0 250px;
`

const ContainerImg = styled.div`
  display: flex;
  height: 670px;
  flex-wrap: wrap;
`

const BigBox = styled.div`

  width: 100%;
  max-width: 697px;
  height: 669px;
  background-image: url(${Bigimg});
  background-color: #000000;
  background-repeat: no-repeat;

`

const TextImg = styled.span`

  display: inline-block;
  word-wrap: normal;
  width: 435px;
  align-items: center;
  float: right;
  letter-spacing: -1px;
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 36px;
  line-height: 50px;
  color: #333333;
  margin: 20px;
`

const White = styled.span`
  word-wrap: normal;
  color: #FFFFFF;
`

const Box = styled.div`
  width: 330px;
  height: 320px;
  margin-left: 4%;
  position: relative;
  &:nth-child(1) {
    background-image: url("${Roses}");
    background-repeat: no-repeat;

  }

  &:nth-child(2) {
    background-image: url("${Gifts}");
    background-repeat: no-repeat;
  }

  &:nth-child(3) {
    margin-top: 4%;
    background-color: #FFDB6B ;
    content: url("${Giftbucket}");
    background-repeat: no-repeat;
    
  }

  &:nth-child(4) {
    margin-top: 4%;
    background-image: url("${Flowersbox}");
    content: url("${Rosesbox}");
    background-repeat: no-repeat;
  }
`



const ContainerReport = styled.div `
  
`

const Rectangle = styled.img `
  &:nth-child(1) {
    background-image: url("/images/photoClients.png");
    background-repeat: no-repeat;
  }
  &:nth-child(2) {
    background-image: url("/images/videoClients.png");
    background-repeat: no-repeat;
  }
  &:nth-child(3) {
    background-image: url("/images/presentClients.png");
    background-repeat: no-repeat;
  }
`

const News = () => {
    return (
        <Container>
            <BigBox>
                <TextImg>Скидки<White> -6% </White>на все букеты<White> по предзаказу </White>на 8 марта</TextImg>
            </BigBox>
            <ContainerImg>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </ContainerImg>
            <ContainerReport>
                <Rectangle/>
                <Rectangle/>
                <Rectangle/>
            </ContainerReport>
        </Container>
    );
};

export default News;