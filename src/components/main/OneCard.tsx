import React from 'react';
import styled, {css} from "styled-components";
import {ReactComponent as LikeRC} from "../../assets/images/like.svg";
import {Link, useNavigate} from "react-router-dom";


const TitleStyle = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`

const CircleStyle = css`
  font-family: Euclid Circular B, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
`

const CardComponent = styled.div`
  background-color: #FFFFFF;
  width: 340px;
  height: 544px;
  position: relative;
  margin-top: 30px;
  margin-right: 20px;
  border: 1px solid #956D84;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  transition: .5s;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:hover {
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.5);
  }


`
const Flower = styled.img`
  position: absolute;
  width: 300px;
  left: 22px;
  ${CircleStyle};
`

const Circle = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px dashed #E72222;
  left: 15px;
  top: 10px;
`

const CircleText = styled.span`
  position: absolute;
  left: 8px;
  top: 17px;
`

const TopContainer = styled.div`
  width: 100%;
  height: 340px;
  background-color: #FBF9FA;
  box-sizing: content-box;
`

const Like = styled(LikeRC)`
  transition: .5s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }

  position: absolute;
  width: 33px;
  height: 29px;
  right: 21px;
  top: 25px;
`

const CircleTop = styled.span`
  position: absolute;
  width: 56px;
  height: 56px;
  right: 10px;
  bottom: 220px;
  border-radius: 50%;
  background-color: rgba(157, 117, 140, 0.39);
`

const TopCircleText = styled.span`
  position: absolute;
  ${CircleStyle};
  color: #956D84;
  top: 20px;
  left: 12px;
`

const BottomContainer = styled.div`

`

const ButtonOrder = styled.div`
  position: relative;
  width: 220px;
  height: 63px;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  background-color: #956D84;
  left: 60px;
  top: 20px;
  transition: .5s;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`

const ButtonFastOrder = styled.span`
  position: absolute;
  bottom: 5px;
  left: 120px;
  text-decoration-line: underline;
  color: #828282;
  ${CircleStyle};
  cursor: pointer;

`

const ButtonText = styled.span`
  position: absolute;
  color: #FFFFFF;
  ${TitleStyle};
  left: 75px;
  top: 23px;


`

const TitleContainer = styled.div`
  display: flex;
  margin-top: 30px;
  height: 50px;

`

const BottomName = styled.span`
  ${TitleStyle};
  color: #333333;
  margin-left: 20px;
  width: 150px;

`

const PriceContainer = styled.div`
  display: flex;
`

const Price = styled.span`
  ${TitleStyle};
  margin-left: auto;
  margin-right: 20px;
  color: #956D84;
`

const OldPrice = styled.span`
  ${TitleStyle};
  text-decoration-line: line-through;
  color: #BDBDBD;
  margin-left: 80px;
  margin-right: 5px;
`


const OneCard = ({item}: any) => {

    let navigate = useNavigate()

    return (
        <CardComponent>
            <Link to={`flowers/` + item.id}>
                <TopContainer>
                    {item.discount > 0 ? (
                        <Circle>
                            <CircleText>-{item.discount}%</CircleText>
                        </Circle>
                    ) : ''}
                    <Flower src={item.image} alt='flowerImage'/>
                    <Like/>
                    <CircleTop>
                        <TopCircleText>TOP</TopCircleText>
                    </CircleTop>
                </TopContainer>
                <BottomContainer>
                    <TitleContainer>
                        <BottomName>
                            {item.name}
                        </BottomName>
                        {item.discount > 0
                            ? <PriceContainer>
                                <OldPrice>
                                    {item.price} грн
                                </OldPrice>
                                <Price>
                                    {Number(item.price) - (Number(item.price) * item.discount / 100)} грн
                                </Price>
                            </PriceContainer>
                            : <Price>
                                {item.price} грн
                            </Price>
                        }
                    </TitleContainer>
                    <ButtonOrder onClick={() => navigate("/orders")}><ButtonText>Заказать</ButtonText></ButtonOrder>
                    <ButtonFastOrder>Быстрый заказ</ButtonFastOrder>

                </BottomContainer>
            </Link>
        </CardComponent>

    );
};

export default OneCard;