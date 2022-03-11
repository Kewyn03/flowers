import React from 'react';
import styled, {css} from "styled-components";
import Counter from "./Counter";
import {ReactComponent as TrashIconRC} from "../assets/images/deleteBasket.svg";
import {ReactComponent as LikeIconRC} from "../assets/images/like.svg";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {remove, selectCartItems} from "../store/reducers/flowersSlice";
import {ICartItem} from "../models/ICartItems";
import {Link} from "react-router-dom";
import EmptyCart from "./main/EmptyCart";

const TitleStyle = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
`
const Wrapper = styled.div`
  position: relative;
  margin: 50px 250px 0;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;

  &:nth-child(1) {
    margin-top: 150px;
  }

`

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;

  height: 156px;
  border: 1px solid #956D84;

  &:nth-child(1) {
    margin-top: 0;
  }
`

const TitleBox = styled.div`
  position: relative;
  top: 130px;
`

const TitleText = styled.span`
  position: absolute;

  ${TitleStyle}
  &:nth-child(n) {
    top: -15px;
  }

  &:nth-child(1) {
    left: 160px;
  }

  &:nth-child(2) {
    left: 460px;
  }

  &:nth-child(3) {
    left: 614px;
  }

  &:nth-child(4) {
    left: 760px;
  }
`

const FlowersImage = styled.img`
  height: 154px;
  width: 130px;
`
const FlowersBox = styled.div`
  width: 150px;
`

const ItemTitle = styled.div`
  ${TitleStyle};
  color: #333333;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 155px;
  width: 270px;
  margin-left: 10px;
`

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 155px;
  width: 180px;
`

const FinalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  width: 150px;
  margin-left: 20px;
`
const Icons = styled.div`
  display: flex;
  width: 120px;
  justify-content: center;
  align-items: center;
`
const TrashIcon = styled(TrashIconRC)`
  cursor: pointer;
  transition: .5s;

  &:hover {
    transform: scale(1.5);
  }
`
const Like = styled(LikeIconRC)`
  cursor: pointer;
  margin-left: 20px;
  transition: .5s;

  &:hover {
    transform: scale(1.5);
  }
`

const PriceContainer = styled.div`
  position: relative;
`

const OldPrice = styled.div`
  position: absolute;
  text-decoration-line: line-through;
  color: #BDBDBD;
  left: 58px;
  top: 40px;
`

const YourOrder = styled.div`

  border: 1px solid #956D84;
  width: 415px;
  height: 450px;
  margin-top: 150px;
  margin-left: 25px;


`

const Box = styled.div`
  display: flex;
`

const OrderText = styled.div`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 38px;
  line-height: 18px;
  color: #956D84;

`

const PriceText = styled.div`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;

  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #BDBDBD;
  display: flex;
  flex-direction: row;

  &:nth-child(2) {
    margin-top: 70px;
  }

  &:nth-child(3) {
    margin-top: 30px;
  }



`

const OrderBox = styled.div`
  width: 275px;
  margin-top: 60px;
  margin-left: 70px;
`

const TextRight = styled.div`
  margin-left: auto;
  color: #333333;
`

const Total = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Museo Sans Cyrl', sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 26px;
  line-height: 18px;
  color: #333333;

  margin-top: 50px;

`

const ButtonOrder = styled.button`
  position: relative;
  width: 220px;
  height: 63px;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  background-color: #956D84;
  left: 30px;
  top: -15px;
  transition: .5s;
  margin-top: 80px;
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: #FFFFFF;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`


const Cart: React.FC = () => {

    const dispatch = useAppDispatch()
    const items = useAppSelector(selectCartItems)
    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    let total = items?.reduce((sum, item: ICartItem) => {
        return sum + (item.cartItem.price - item.cartItem.price * item.cartItem.discount / 100) * item.quantity

    }, 0)

    let fullprice = items?.reduce((sum, item: ICartItem) => {
        return sum + item.cartItem.price * item.quantity

    }, 0)

    let discount = items?.reduce((sum, item: ICartItem) => {
        return sum + (item.cartItem.price * item.cartItem.discount / 100) * item.quantity

    }, 0)

    return (
        <Wrapper>
            {items.length > 0
                ? <>
                    <Text>Корзина</Text>
                    <TitleBox>
                        <TitleText>Название</TitleText>
                        <TitleText>Цена за шт.</TitleText>
                        <TitleText>Кол-во</TitleText>
                        <TitleText>Итог</TitleText>
                    </TitleBox>
                    <Box>
                        <Container>
                            {items.map(item => (
                                    <ItemBox key={item.cartItem.id}>
                                        <FlowersBox>
                                            <FlowersImage src={item.cartItem.image}/>
                                        </FlowersBox>
                                        <ItemTitle>{item.cartItem.name}</ItemTitle>
                                        {item.cartItem.discount
                                            ? <PriceContainer>
                                                <OldPrice>
                                                    {item.cartItem.price} грн.
                                                </OldPrice>
                                                <Price>
                                                    {Number(item.cartItem.price) - (Number(item.cartItem.price) * item.cartItem.discount / 100)} грн.
                                                </Price>
                                            </PriceContainer>
                                            : <Price>{item.cartItem.price} грн.</Price>}
                                        <Counter value={item.quantity} id={item.cartItem.id}/>
                                        <FinalPrice>{item.cartItem.discount
                                            ? (item.cartItem.price - item.cartItem.price * item.cartItem.discount / 100) * item.quantity
                                            : Number(item.cartItem.price) * item.quantity}
                                            грн.</FinalPrice>
                                        <Icons>
                                            <TrashIcon onClick={() => removeItem(item.cartItem.id)}/>
                                            <Like/>
                                        </Icons>
                                    </ItemBox>
                                )
                            )}
                        </Container>
                        <YourOrder>
                            <OrderBox>
                                <OrderText>Ваш заказ</OrderText>
                                <PriceText>Товары <TextRight>{fullprice} грн.</TextRight></PriceText>
                                <PriceText>Скидка <TextRight>{discount} грн.</TextRight></PriceText>
                                <Total>Всего <TextRight>{total} грн.</TextRight></Total>
                                <Link to={'/orders'}>
                                    <ButtonOrder>
                                        Оформить заказ
                                    </ButtonOrder>
                                </Link>
                            </OrderBox>
                        </YourOrder>
                    </Box>
                </>

                : <EmptyCart/>
            }
        </Wrapper>
    );
};

export default Cart;