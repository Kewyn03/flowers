import React from 'react';
import {Link} from 'react-router-dom'

import styled, {css} from "styled-components";

const TitleStyle = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`

const Container = styled.div`
  width: 1440px;
  height: 650px;
  margin: 10px 250px 0;
  border: 1px solid #956D84;
`

const WhiteBox = styled.div`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Text = styled.span`
  font-size: 100px;
  font-family: sans-serif;
  &:nth-child(2) {
    margin-top: 20px;
    font-size: 40px;
  }

  &:nth-child(3) {
    font-size: 20px;
  }
`

const Button = styled.div`
  margin-top: 30px;
  position: relative;
  width: 220px;
  height: 63px;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  background-color: #956D84;
  

  transition: .5s;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`

const ButtonText = styled.span`
  position: absolute;
  color: #FFFFFF;
  ${TitleStyle};
  left: 50px;
  top: 22px;
`

const NotFound = () => {
    return (
        <Container>
            <WhiteBox>
                <Text>404</Text>
                <Text>Page not found</Text>
                <Text>Oops! The page you are looking for does not exist. It might have been moved or deleted</Text>
                <Link to="/"><Button><ButtonText>Back to home</ButtonText></Button></Link>
            </WhiteBox>
        </Container>
    );
};

export default NotFound;