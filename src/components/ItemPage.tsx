import React, {useEffect} from 'react';
import styled, {css} from "styled-components";
import {useAppSelector} from "../hooks/hooks";
import {Link, useParams} from "react-router-dom";
import {ReactComponent as LikeRC} from "../assets/images/like.svg";
import Counter from "./Counter";

const TitleStyle = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`

const Container = styled.div`
  display: flex;
  margin: 30px 250px 0;
  width: 1420px;
  height: 650px;
`


const FlowerImage = styled.img`
  position: absolute;
  left: 25%;
  top: 25%;
  align-items: center;
  transform: scale(1.5);

`

const FlowerBox = styled.div`
  background-color: #FBF9FA;
  display: flex;
  position: relative;
  width: 580px;
  height: 580px;
`

const Circle = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px dashed #E72222;
  left: 24px;
  top: 24px;
`

const CircleText = styled.span`

  position: absolute;
  font-size: 24px;
  left: 22px;
  top: 33px;
`

const Like = styled(LikeRC)`
  transition: .5s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }

  position: absolute;
  width: 46px;
  height: 41px;
  right: 44px;
  top: 44px;
`
const Title = styled.div`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 18px;
  color: #333333;
  margin-top: 5px;
`

const StockMessage = styled.div`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #828282;
  margin-top: 40px;
`

const Price = styled.div`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 18px;
  color: #956D84;
  margin-top: 50px;
`

const DiscountPrice = styled.div`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #BDBDBD;
  margin-top: 54px;
  margin-left: 40px;

`

const InfoBox = styled.div`
  margin-left: 120px;

`

const PriceGroup = styled.div`
  display: flex;

`

const DescriptionTitle = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: #BDBDBD;

  margin-top: 25px;
`

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 730px;
`

const DescriptionInfo = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: #333333;

  margin-top: 25px;
`

const DescriptionBox = styled.div`
  flex-direction: column;
  margin-top: 30px;
  width: 250px;

  &:first-child {
    width: 140px;
  }

`

const ButtonText = styled.span`
  position: absolute;
  color: #FFFFFF;
  ${TitleStyle};
  left: 65px;
  top: 23px;
`
const ButtonOrder = styled.div`
  position: relative;
  width: 220px;
  height: 63px;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  background-color: #956D84;
  left: 30px;
  top: 20px;
  transition: .5s;
  margin-top: 30px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`



const CounterBox = styled.div `
  display: flex;
`

const ItemPage = () => {

    useEffect(() => window.scrollTo(0, 0), [])

    const arr = useAppSelector(state => state.flowersReducer.flowers)
    const {id} = useParams()

    const newItems = arr?.roses.map(item => item.group.find(el => el.id == id))
    const items = newItems?.find(el => el)

    const discount = Number(items.price) - (Number(items.price) * items.discount / 100)


    return (
        <Container>
            <FlowerBox>
                {items.discount > 0 ? (
                    <Circle>
                        <CircleText>-{items.discount}%</CircleText>
                    </Circle>
                ) : ''}
                <FlowerImage src={items.image}/>
                <Like/>
            </FlowerBox>
            <InfoBox>
                <Title>{items.name}</Title>
                {items.stock ? <StockMessage>В наличии</StockMessage> : <StockMessage>Нет в наличии</StockMessage>}
                {items.discount ?
                    <PriceGroup><Price>{discount} грн.</Price><DiscountPrice>{items.price} грн.</DiscountPrice></PriceGroup> :
                    <Price>{items.price}</Price>}
                <Box>
                    <DescriptionBox>
                        <DescriptionTitle>Цветы</DescriptionTitle>
                        <DescriptionTitle>Размер</DescriptionTitle>
                        <DescriptionTitle>Материалы</DescriptionTitle>
                        <DescriptionTitle>Дополнительно</DescriptionTitle>
                    </DescriptionBox>
                    <DescriptionBox>
                        <DescriptionInfo>{items.name}</DescriptionInfo>
                        <DescriptionInfo>хуета</DescriptionInfo>
                        <DescriptionInfo>хуетахуетахуетахуетахуетахуетахуетахуета</DescriptionInfo>
                        <DescriptionInfo>хуета</DescriptionInfo>
                    </DescriptionBox>
                </Box>
                <CounterBox>
                    <Counter />
                    <Link to={"/cart"}><ButtonOrder><ButtonText>В корзину</ButtonText></ButtonOrder></Link>
                </CounterBox>
            </InfoBox>
        </Container>
    );
};

export default ItemPage;