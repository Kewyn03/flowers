import React from 'react';
import styled, {css, keyframes} from "styled-components";


const fontNavStyles = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: 18px;
  letter-spacing: .3px;
  color: #FFFFFF;
`

// const rotate = keyframes `
//   from {
//     transform: rotate(0deg);
//   }
//   50% {
//     transform: rotate(180deg);
//   }
//   to {
//     transform: rotate(0deg);
//   }
// `

const Hheader = styled.header`
  flex-wrap: wrap;
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
  margin: 0 160px;
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

  &:nth-child(4) {
    //margin-right: 5%;
  }

  &:nth-child(5) {
    //margin-left: 2%;
    //margin-right: 5%;
  }

  &:nth-child(6) {
    margin-right: 18.9%;

    @media (max-width: 1500px) {
      margin-right: 16%;
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

const ArrowDown = styled.img`
  position: relative;
  align-self: center;
  width: 7px;
  height: 4px;
`

const MainHeader = styled.div`
  display: flex;
  //flex-direction: row;
  height: 200px;
  margin: 0 160px;
  @media (max-width: 1650px) {
    margin-right: 3%;
  }
  @media (max-width: 1500px) {
    margin: 0 -5% 0 1%;
  }
  @media (max-width: 1400px) {
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

`


const SearchGroup = styled.div`
  
  width: 1200px;

`


const InputCategories = styled.input.attrs({
    type: 'input'
})`
  
  height: 18px;
  width: 250px;
  margin-right: 2%;
  padding: 2%;
  font-family: Museo Sans Cyrl, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  font-weight: 300;
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
  font-family: Museo Sans Cyrl, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
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
  &:first-child img{
    position: absolute;
    top: 7px;
    padding: 0;
    
  }
  
  &:nth-child(2) img{
    position: absolute;
    top: 6px;
    right: 15px;
  }
`

const SocialGroupIcons = styled.div`


`

const SocialIcon = styled.img`
  margin-right: 5%;
  width: 30px;
  height: 30px;
  padding: 2px;
  background: #956D84;
  border-radius: 50%;
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
  font-family: Museo Sans Cyrl, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #333333;
  cursor: pointer;
  margin-right: 6.5%;

  &:first-child {

    &:hover Ul {
      display: block;
      visibility: visible;

    }


    &:hover > img {
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

    Ul Li:hover img {
      stroke: #FFFFFF;
      transform: rotate(180deg);
      transition: .5s ease;
    }


    Ul Li:hover {
      padding-left: 10%;
      transition: .5s;
    }

    width: 160px;
    color: #956D84;
  }

  &:nth-child(6) {

    &:hover Ul {
      display: block;
      visibility: visible;
    }


    &:hover > img {
      transform: rotate(180deg);
      transition: .5s ease-in-out;
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

  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
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

const ArrowCategory = styled.img`
  padding: 1% 2%;
  flex-wrap: wrap;
  color: #000000;

`


const Ddarrow = styled.img`
  display: inline;
  float: right;
  stroke: #000000;
  stroke-width: 1.2;
`

const Header = ({...props}) => {


    return (
        <Hheader>
            <TopHeader>
                <NavTopHeader>
                    <NavText>Валюта
                        <DropDownItem>Грн</DropDownItem>
                        <ArrowDown src={'/images/arrow-down.png'} alt='arrow-down'/>
                    </NavText>
                    <NavText>Язык
                        <DropDownItem>RU</DropDownItem>
                        <ArrowDown src={'/images/arrow-down.png'} alt='arrow-down'/>
                    </NavText>
                    <NavText>Город
                        <DropDownItem>Киев</DropDownItem>
                        <ArrowDown src={'/images/arrow-down.png'} alt='arrow-down'/>
                    </NavText>
                    <NavText>
                        <NavImages src={'/images/like.svg'} alt='like'/>
                        Закладки
                    </NavText>
                    <NavText>
                        <NavImages src={'/images/shipping.svg'} alt='shipping'/>
                        Доставка и оплата
                    </NavText>
                    <NavText>
                        <NavImages src={'/images/contacts.svg'} alt='contacts'/>
                        Контакты
                    </NavText>
                    <NavText>
                        <NavImages src={'/images/user-logo.svg'} alt='user-logo'/>
                        Вход
                    </NavText>
                    <NavText>Регистрация</NavText>
                </NavTopHeader>
            </TopHeader>
            <MainHeader>
                <LogoImage src={'/images/logo.png'} alt='logo'/>
                <NavContainer>
                    <SearchGroup>
                        <InputContainer>
                            <ArrowCategory src={'/images/arrowdown.svg'} alt='arrow'/>
                            <InputCategories type='input' placeholder='Поиск по категориям'/>
                        </InputContainer>
                        <InputContainer>
                            <InputSearch placeholder='Поиск по товарам'/>
                            <SearchIcon src={'/images/search.svg'} alt='search'/>
                        </InputContainer>

                    </SearchGroup>
                    <NavMainHeader>
                        <NavMainText>
                            Каталог товаров
                            <ArrowCategory src={'/images/arrowdown.svg'} alt='arrow'/>
                            <Ul>
                                <Li>Букеты<Ddarrow src={'/images/ddarrow.svg'} alt='arrow'/>
                                    <Ul>
                                        <Li>Букет из роз</Li>
                                        <Li>Букет из хризантем</Li>
                                        <Li>Букет из альтромерии</Li>
                                        <Li>Букет из гербер</Li>
                                        <Li>Букет из ирисов</Li>
                                        <Li>Букет из пионов</Li>
                                    </Ul>
                                </Li>
                                <Li>Розы<Ddarrow src={'/images/ddarrow.svg'} alt='arrow'/></Li>
                                <Li>Цветы в коробке<Ddarrow src={'/images/ddarrow.svg'} alt='arrow'/></Li>
                                <Li>Композиции<Ddarrow src={'/images/ddarrow.svg'} alt='arrow'/></Li>
                                <Li>Подарки<Ddarrow src={'/images/ddarrow.svg'} alt='arrow'/></Li>
                                <Li>Подарочные корзины<Ddarrow src={'/images/ddarrow.svg'} alt='arrow'/></Li>
                                <Li>Букеты невесты<Ddarrow src={'/images/ddarrow.svg'} alt='arrow'/></Li>
                                <Li>Вкусные букеты<Ddarrow src={'/images/ddarrow.svg'} alt='arrow'/></Li>
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
                            <ArrowCategory src={'/images/arrowdown.svg'} alt='arrow'/>
                            <Ul>
                                <Li>abcfsaff</Li>
                                <Li>abcasdasd</Li>
                                <Li>abcasdasd</Li>
                                <Li>abcasdasd</Li>
                            </Ul>
                        </NavMainText>
                    </NavMainHeader>
                </NavContainer>
                <SocialContainer>
                    <SocialGroupIcons>
                        <SocialIcon src={'/images/viber.svg'} alt='viber-logo'/>
                        <SocialIcon src={'/images/instagram.svg'} alt='inst-logo'/>
                        <SocialIcon src={'/images/telegram.svg'} alt='tg-logo'/>
                        <SocialIcon src={'/images/facebook.svg'} alt='fb-logo'/>
                    </SocialGroupIcons>
                    <NumberText>
                        +47 (047) 747 47 47
                    </NumberText>
                    <CartInfoIcons>
                        <CartInfoImg src={'/images/like.svg'} alt='like'/>
                        <CartInfoImg src={'/images/shoppingcart.svg'} alt='shipcart'/>
                        <MoneyValue>$ 1 234</MoneyValue>
                    </CartInfoIcons>
                </SocialContainer>
            </MainHeader>
        </Hheader>
    );
};

export default Header;