import React from 'react';
import styled, {css} from "styled-components";

import ShippingIcon from '../../assets/images/shipping.svg'
import ContactsIcon from '../../assets/images/contacts.svg'
import BookmarksIcon from '../../assets/images/like.svg'
import LoginIcon from '../../assets/images/user-logo.svg'
import LogoIcon from '../../assets/images/logo.png'
import ViberIcon from '../../assets/images/viber.svg'
import InstIcon from '../../assets/images/instagram.svg'
import TgIcon from '../../assets/images/telegram.svg'
import FbIcon from '../../assets/images/facebook.svg'
import SearchIconRC from '../../assets/images/search.svg'
import ShipcartIcon from '../../assets/images/shoppingcart.svg'


import {ReactComponent as ArrowDownRC} from "../../assets/images/arrowdown.svg";
import {ReactComponent as ArrowCategoryRC} from "../../assets/images/arrowdown.svg";
import {ReactComponent as DdarrowRC} from "../../assets/images/ddarrow.svg";

const fontNavStyles = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: 18px;
  letter-spacing: .3px;
  
`


const NavPanel = styled.header`
  
  flex-wrap: wrap;
`

const CategoryPanel = styled.div`

`

const TopHeader = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 1400px;
  @media (max-width: 1600px) {
    width: 1600px;
  }

  height: 50px;
  background: #333333;
`

const NavTopHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin: 0 250px;
  @media (max-width: 1500px) {
    width: 1480px;
    margin: 0 2%;
  }
  align-items: center;
  justify-content: flex-start;
`

const NavText = styled.li`
  ${fontNavStyles};
  margin-right: 6%;
  cursor: pointer;
  position: relative;
  color: #FFFFFF;
  &:nth-child(4) {
    //margin-right: 5%;
  }

  &:nth-child(5) {
    //margin-left: 2%;
    //margin-right: 5%;
  }

  &:nth-child(6) {
    margin-right: 14%;

    @media (max-width: 1500px) {
      margin-right: 18%;
    }
  }

  &:nth-child(7) {
    margin-right: 0;
    padding-right: 1%;
    border-right: 1px solid #956D84;

  }

  &:nth-child(8) {
    margin-right: 0;

    padding-left: 1%;
    margin-left: auto;

  }

  display: flex;
`

const NavImages = styled.img`
  margin-right: 10px;
`

const DropDownItem = styled.span`
  padding-left: 10%;
  padding-right: 5%;
  justify-content: space-between;
  color: #956D84;
`

const ArrowDown = styled(ArrowDownRC).attrs({
    alt: 'arrow'

})`
  position: absolute;
  right: -25px;
  align-self: center;
  fill: #FFFFFF;
`

const MainHeader = styled.div`
  display: flex;
  //flex-direction: row;
  height: 200px;
  margin: 0 250px;
  @media (max-width: 1650px) {
    margin-right: 3%;
  }
  @media (max-width: 1500px) {
    margin: 0 -5% 0 1%;
  }
  @media (${props => props.theme.largeDesktops}) {
    margin: 0 -8% 0 1%;
  }
  //align-items: center;
  //justify-content: flex-start;
`

const LogoImage = styled.img`
  align-self: center;
  max-width: 200px;
  width: 120px;
  height: 120px;
  cursor: pointer;

`


const SearchGroup = styled.div`

  width: 1200px;

`


const InputCategories = styled.input.attrs({
    type: 'input'
})`
  ${fontNavStyles};
  height: 18px;
  width: 250px;
  margin-right: 2%;
  padding: 2%;
 
  color: #828282;
  border: none;
  border-bottom: 1px solid #956D84;
  outline: none;

  ::placeholder {
    color: #828282;
  }
`

const InputSearch = styled.input.attrs({
    type: 'search'
})`

  height: 18px;
  width: 620px;
  padding: 2% 2% 2% 0;
  ${fontNavStyles};
  color: #828282;
  border: none;
  border-bottom: 1px solid #956D84;
  outline: none;

  @media (max-width: 1600px) {
    width: 540px;
  }


  ::placeholder {
    color: #828282;
  }
`

const InputContainer = styled.span`

  position: relative;

  &:first-child img {

    top: 7px;
    left: 3px;
    padding: 0;

  }

  &:nth-child(2) img {
    position: absolute;
    top: 10px;
    right: 15px;
  }
`

const SocialGroupIcons = styled.div`


`

const SocialIcon = styled.img`

  width: 30px;
  height: 30px;
  padding: 2px;
  background: #956D84;
  border-radius: 50%;
  float: left;
  margin: 2.5%;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 1200px;
  min-width: 800px;

  @media (max-width: 1600px) {
    width: 1600px;

  }
  margin-top: 3%;
  margin-left: 8%;

`
const NavMainHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 3.5%;

`

const Ul = styled.ul`

  height: 335px;
  width: 240px;
  color: #000000;
  padding: 0;
  border: 1px solid #956D84;
  display: none;
  visibility: hidden;

  //&:hover Li Ul   {
  //  display: none;
  //  visibility: visible;
  //  opacity: 0;
  //}

`

const Li = styled.li`
  list-style: none;
  padding: 5%;

  &:hover {
    color: #FFFFFF;
    background: #956D84;
    cursor: pointer;

  }
`

const NavMainText = styled.div`
  ${fontNavStyles};
  font-weight: 700;
  color: #333333;
  cursor: pointer;
  margin-right: 77px;
  margin-top: 12px;

  &:first-child {
    position: relative;


    &:hover Ul {
      display: block;
      visibility: visible;
      background-color: #FFFFFF;

    }


    &:hover > svg {
      transform: rotate(180deg);
      transition: all .5s ease-in-out;
      // animation: rotate .5s;

    }

    &:hover Ul Li Ul {
      display: none;
      visibility: hidden;
    }

    Ul Li:hover Ul {
      display: block;
      position: absolute;
      transform: translateX(220px) translateY(-25px);
      height: 252px;
      margin: 1% 0;
      visibility: visible;
      border: 1px solid #956D84;
    }

    Ul Li:hover svg {
      stroke: #FFFFFF;
      transform: rotate(180deg);
    }
    
    Ul Li:hover {
      padding-left: 30px;
      transition: 1.5s;
    }

    width: 160px;
    color: #956D84;
  }


  &:nth-child(6) {
    position: relative;
    z-index: 4;

    &:hover Ul {
      
      height: 169px;
      display: block;
      visibility: visible;
      background-color: #FFFFFF;
    }


    &:hover > svg {
      transform: rotate(180deg);
      transition: .5s ease;
    }

    width: 120px;
  }

`

const SocialContainer = styled.div`
  width: 100%;
  margin-top: 1.5%;
  max-width: 150px;

  @media (max-width: 1500px) {
    margin-right: 2%;
  }
`

const NumberText = styled.span`

  ${fontNavStyles};
  letter-spacing: 0;
  color: #333333;
  cursor: pointer;
`

const CartInfoIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 35%;
`

const CartInfoImg = styled.img`
  width: 42px;
  height: 40px;
  stroke-width: 10%;
  margin-right: 5%;
  cursor: pointer;

`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`

const MoneyValue = styled.span`

  flex-wrap: wrap;
  font-size: 17px;
  color: #828282;
`

const ArrowCategory = styled(ArrowCategoryRC)`
  position: absolute;
  transition: all .5s ease-in-out;
  flex-wrap: wrap;
  color: #000000;
  top: 6px;
`


const Ddarrow = styled(DdarrowRC)`
  display: inline;
  float: right;
  stroke: #000000;
  stroke-width: 1.2;
  transition: all .5s ease-in-out;
`

const Header = ({...props}) => {


    return (
        <>
            <NavPanel>
                <TopHeader>
                    <NavTopHeader>
                        <NavText>Валюта
                            <DropDownItem>Грн</DropDownItem>
                            <ArrowDown/>
                        </NavText>
                        <NavText>Язык
                            <DropDownItem>RU</DropDownItem>
                            <ArrowDown/>
                        </NavText>
                        <NavText>Город
                            <DropDownItem>Киев</DropDownItem>
                            <ArrowDown/>
                        </NavText>
                        <NavText>
                            <NavImages src={BookmarksIcon} alt='bookmarks'/>
                            Закладки
                        </NavText>
                        <NavText>
                            <NavImages src={ShippingIcon} alt='shipping'/>
                            Доставка и оплата
                        </NavText>
                        <NavText>
                            <NavImages src={ContactsIcon} alt='contacts'/>
                            Контакты
                        </NavText>
                        <NavText>
                            <NavImages src={LoginIcon} alt='user-logo'/>
                            Вход
                        </NavText>
                        <NavText>Регистрация</NavText>
                    </NavTopHeader>
                </TopHeader>
            </NavPanel>
            <CategoryPanel>
                <MainHeader>
                    <LogoImage src={LogoIcon} alt='logo'/>
                    <NavContainer>
                        <SearchGroup>
                            <InputContainer>
                                <ArrowCategory/>
                                <InputCategories type='input' placeholder='Поиск по категориям'/>
                            </InputContainer>
                            <InputContainer>
                                <InputSearch placeholder='Поиск по товарам'/>
                                <SearchIcon src={SearchIconRC} alt='search'/>
                            </InputContainer>
                        </SearchGroup>
                        <NavMainHeader>
                            <NavMainText>
                                Каталог товаров
                                <ArrowCategory/>
                                <Ul>
                                    <Li>Букеты<Ddarrow/>
                                        <Ul>
                                            <Li>Букет из роз</Li>
                                            <Li>Букет из хризантем</Li>
                                            <Li>Букет из альтромерии</Li>
                                            <Li>Букет из гербер</Li>
                                            <Li>Букет из ирисов</Li>
                                            <Li>Букет из пионов</Li>
                                        </Ul>
                                    </Li>
                                    <Li>Розы<Ddarrow/></Li>
                                    <Li>Цветы в коробке<Ddarrow/></Li>
                                    <Li>Композиции<Ddarrow/></Li>
                                    <Li>Подарки<Ddarrow/></Li>
                                    <Li>Подарочные корзины<Ddarrow/></Li>
                                    <Li>Букеты невесты<Ddarrow/></Li>
                                    <Li>Вкусные букеты<Ddarrow/></Li>
                                </Ul>
                            </NavMainText>
                            <NavMainText>
                                Форум
                            </NavMainText>
                            <NavMainText>
                                Отзывы
                            </NavMainText>
                            <NavMainText>
                                Акции
                            </NavMainText>
                            <NavMainText>
                                Новости
                            </NavMainText>
                            <NavMainText>
                                Информация
                                <ArrowCategory/>
                                <Ul>
                                    <Li>О нас</Li>
                                    <Li>Оплата и доставка</Li>
                                    <Li>Доставка цветов в офис</Li>
                                    <Li>Контакты</Li>
                                </Ul>
                            </NavMainText>
                        </NavMainHeader>
                    </NavContainer>
                    <SocialContainer>
                        <SocialGroupIcons>
                            <SocialIcon src={ViberIcon} alt='viber-logo'/>
                            <SocialIcon src={InstIcon} alt='inst-logo'/>
                            <SocialIcon src={TgIcon} alt='tg-logo'/>
                            <SocialIcon src={FbIcon} alt='fb-logo'/>
                        </SocialGroupIcons>
                        <NumberText>
                            +47 (047) 747 47 47
                        </NumberText>
                        <CartInfoIcons>
                            <CartInfoImg src={BookmarksIcon} alt='like'/>
                            <CartInfoImg src={ShipcartIcon} alt='shipcart'/>
                            <MoneyValue>$ 1 234</MoneyValue>
                        </CartInfoIcons>
                    </SocialContainer>
                </MainHeader>
            </CategoryPanel>
        </>
    );
};

export default Header;