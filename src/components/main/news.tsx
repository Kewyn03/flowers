import React from 'react';
import styled from "styled-components";

import Bigimg from '../../assets/images/Bigimg.png'
import Roses from '../../assets/images/roses.png'
import Gifts from '../../assets/images/gifts.png'
import Flowersbox from '../../assets/images/flowersbox.png'
import {ReactComponent as PhotoClientsRC} from '../../assets/images/likephoto.svg'
import {ReactComponent as VideoClientsRC} from '../../assets/images/videoclients.svg'
import {ReactComponent as PresentClientsRC} from '../../assets/images/giftclients.svg'
import {ReactComponent as GiftbucketRC} from '../../assets/images/giftbucket.svg'
import {ReactComponent as FlowersInBoxRC} from '../../assets/images/flowersInBox.svg';
import MatrixRC from '../../assets/images/matrix.svg'


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

const TextImgBox = styled.span`
  display: inline-block;
  word-wrap: normal;
  align-items: center;
  position: relative;
  z-index: 3;
  float: left;
  letter-spacing: -1px;
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 36px;
  line-height: 50px;
  color: #333333;
  margin: 20px;
`

const Text = styled.span `
  z-index: 2;
  color: #333333;
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 35px;
  float: right;
`

// const TextMini = styled.span `
//   font-family: Museo Sans Cyrl,sans-serif;
//   font-style: normal;
//   font-weight: 300;
//   font-size: 14px;
//   line-height: 18px;
//   width: 300px;
// `

const White = styled.span`
  word-wrap: normal;
  color: #FFFFFF;
`

const Box = styled.div`
  width: 330px;
  height: 320px;
  margin-left: 31px;
 

  &:nth-child(1) {
    background-image: url(${Roses});
    background-repeat: no-repeat;

  }

  &:nth-child(2) {
    background-image: url(${Gifts});
    background-repeat: no-repeat;
  }

  &:nth-child(3) {
    margin-top: 4%;
    background-color: #FFDB6B;
    
    background-repeat: no-repeat;

  }

  &:nth-child(4) {
    margin-top: 4%;
    background-image: url("${Flowersbox}");
    background-repeat: no-repeat;
  }
`


const ContainerReport = styled.div`
  display: flex;
  max-width: 1420px;
    margin: 0 250px;
  
`

const Rectangle = styled.div`
  
  flex-direction: row;
  position: relative;
  width: 459px;
  height: 219px;
  margin-right: 21px;
  margin-top: 40px;
  border: 1px solid #956D84;
  
  &:nth-child(1) > span{
    position: absolute;
    width: 200px;
    top: 58px;
    left: 20px;
  }
  
  &:nth-child(2) {
    background: #956D84;
  }
  
  &:nth-child(2) > span {
    position: absolute;
    bottom: 40px;
    left: 100px;
    color: #FFFFFF;
  }

  &:nth-child(3) {
    margin-right: 0;
  }
  
  &:nth-child(3) > span {
    position: absolute;
    text-align: right;
    width: 200px;
    top: 58px;
    right: 20px;
  }
  
  &:nth-child(3) div {
    left: 0;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  
`

const Matrix = styled.div `
  position: absolute;
  bottom: -1px;
  left: 10px;
  width: 448px;
  height: 219px;
  background-image: url(${MatrixRC});
  
  
  
`

const PhotoClients = styled(PhotoClientsRC) `
  position: absolute;
  right: 40px;
  top: 25px;
  width: 100px;
  height: 100px;
 
`

const VideoClients = styled(VideoClientsRC) `
  position: absolute;
  left: 167px;
  top: 25px;
  width: 100px;
  height: 100px;
 
`

const PresentClients = styled(PresentClientsRC) `
  position: absolute;
  right: 40px;
  top: 25px;
  width: 100px;
  height: 100px;
 
`

const GiftBucket = styled(GiftbucketRC) `
  position: absolute;
  left: 15px;
  top: -17px;
`

const FlowersBox = styled(FlowersInBoxRC) `
  position: absolute;
  left: 15px;
`


const News = () => {
    return (
        <>
            <Container>
                <BigBox>
                    <TextImg>Скидки<White> -6% </White>на все букеты<White> по предзаказу </White>на 8 марта</TextImg>
                </BigBox>
                <ContainerImg>
                    <Box>
                        <TextImgBox>Розы</TextImgBox>
                    </Box>
                    <Box>
                        <TextImgBox>Подарки</TextImgBox>
                    </Box>
                    <Box>
                        <TextImgBox>Подарочные корзины<GiftBucket/></TextImgBox>
                    </Box>
                    <Box>
                        <TextImgBox>Цветы в коробке<FlowersBox/></TextImgBox>
                    </Box>
                </ContainerImg>

            </Container>
            <ContainerReport>
                <Rectangle>
                    <Text>Фото доставок наших букетов</Text>
                    <Matrix>
                        <PhotoClients/>
                    </Matrix>
                </Rectangle>
                <Rectangle>
                    <Text>Видео отчеты клиентов</Text>
                    <VideoClients/>
                </Rectangle>
                <Rectangle>
                    <Text>Подарок<br/> каждому клиенту</Text>
                    {/*<TextMini>К каждому заказу мы прилогаем <br/> комплимент от компании <br/> в виде маленького презента</TextMini>*/}
                    <Matrix>
                        <PresentClients/>
                    </Matrix>
                </Rectangle>
            </ContainerReport>
        </>
    );
};

export default News;