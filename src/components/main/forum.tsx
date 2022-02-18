import React from 'react';
import styled from "styled-components";

import {ReactComponent as Arrowforum} from '../../assets/images/arrowforum.svg';
import ImageOne from '../../assets/images/image1forum.png'
import ImageTwo from '../../assets/images/image2forum.png'
import ImageThree from '../../assets/images/image3forum.png'

const ForumContainer = styled.div`
  margin: 150px 250px 0;

`

const TextContainer = styled.div`

`

const TextMini = styled.span`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #956D84;
  float: right;

  &:hover {
    opacity: 0.85;
  }
  
  &:active {
    opacity: 0.6;
  };
`

const Text = styled.span`
  margin-right: 15px;
  cursor: pointer;
`
const TextHeader = styled.span`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 38px;
  line-height: 18px;
  margin-left: 640px;
`

const ArrowForum = styled(Arrowforum)`
  cursor: pointer;
  
  
  &:nth-child(1) {
    opacity: 0.6;
  }

  &:nth-child(2) {
    opacity: 0.85;
  }
`

const ImagesContainer = styled.div`
  margin-top: 70px;
  display: flex;
`

const Box = styled.div`
  width: 460px;
  height: 515px;
  margin-right: 20px;
  position: relative;
  box-sizing: border-box;
  &:nth-child(3) {
    margin-right: 0;
  }
`

const ImageForum = styled.img`
  position: absolute;
  left: 24px;
  z-index: 2;
`

const Rectangle = styled.div`
  width: 460px;
  height: 371px;
  background-color: #956D84;
  position: absolute;
  bottom: 0;
`

const RectangleText = styled.span `
  position: absolute;
  font-family: Museo Sans Cyrl,sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 25px;
  color: #FFFFFF;
  left: 23px;
  bottom: 90px;
`

const RectangleMiniText = styled.span `
  font-family: Museo Sans Cyrl,sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
  position: absolute;
  bottom: 20px;
  left: 23px;
`

const Forum: React.FC = () => {
    return (
        <ForumContainer>
            <TextContainer>
                <TextHeader>Форум</TextHeader>
                <TextMini>
                    <Text>Все новости</Text>
                    <ArrowForum/>
                    <ArrowForum/>
                    <ArrowForum/>
                </TextMini>
            </TextContainer>
            <ImagesContainer>
                <Box>
                    <ImageForum src={ImageOne} alt='img'/>
                    <Rectangle>
                        <RectangleText>Какие цветы под запретом: что <br/> нельзя дарить</RectangleText>
                        <RectangleMiniText>Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...</RectangleMiniText>
                    </Rectangle>
                </Box>
                <Box>
                    <ImageForum src={ImageTwo} alt='img'/>
                    <Rectangle>
                        <RectangleText>Как сохранить букет свежим: советы <br/> и рекомендации</RectangleText>
                        <RectangleMiniText>Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...</RectangleMiniText>
                    </Rectangle>
                </Box>
                <Box>
                    <ImageForum src={ImageThree} alt='img'/>
                    <Rectangle>
                        <RectangleText>Цветочный этикет - как правильно <br/> дарить цветы</RectangleText>
                        <RectangleMiniText>Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...</RectangleMiniText>
                    </Rectangle>
                </Box>
            </ImagesContainer>
        </ForumContainer>
    );
};

export default Forum;