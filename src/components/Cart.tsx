import React from 'react';
import styled,{css} from "styled-components";
import Counter from "./Counter";


const TitleStyle = css `
  font-family: Museo Sans Cyrl,sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #BDBDBD;
`

const Text = styled.div`
  display: flex;
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 48px;
  line-height: 18px;
  justify-content: center;
  margin-top: 100px;

`

const Container = styled.div `
  display: flex;
  margin-top: 150px;
  margin-left: 250px;
  flex-direction: column;
`

const ItemBox = styled.div `
  display: flex;
  flex-direction: row;
  width: 980px;
  height: 156px;
  border: 1px solid #956D84;
  
`

const TitleBox = styled.div `
  position: relative;
`

const TitleText = styled.span `
  position: absolute;
  ${TitleStyle}
  
  &:nth-child(n) {
    top: -28px;
  }
  &:nth-child(1) {
    left: 160px;
  }
  &:nth-child(2) {
    left: 460px;
  }
  &:nth-child(3) {
    left: 620px;
  }
  &:nth-child(4) {
    left: 750px;
  }
`

const FlowersImage = styled.img `
  border: 1px solid red;
  height: 155px;
  width: 160px;
`
const ItemTitle = styled.div `
  ${TitleStyle};
  color: #333333;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid blue;
  height: 155px;
  width: 250px;
`

const Price = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 155px;
  width: 180px;
  border: 1px solid yellow;
`

const FinalPrice = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  border: 1px solid green;
`
const Icons = styled.div `
  
`
const TrashIcon = styled.img `
  
`

const Cart = () => {



    return (
        <>
            <Text>Корзина</Text>
            <Container>
                <TitleBox>
                    <TitleText>Название</TitleText>
                    <TitleText>Цена за шт.</TitleText>
                    <TitleText>Кол-во</TitleText>
                    <TitleText>Итог</TitleText>
                </TitleBox>
                <ItemBox>
                    <FlowersImage width={100} height={100}/>
                    <ItemTitle>чтотобудетчтотобудетчтотобудет</ItemTitle>
                    <Price>795</Price>
                    <Counter/>
                    <FinalPrice>2134</FinalPrice>
                    <Icons>
                        <TrashIcon/>
                    </Icons>
                </ItemBox>

            </Container>
        </>
    );
};

export default Cart;