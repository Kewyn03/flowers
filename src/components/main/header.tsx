import React from 'react';
import styled, {css} from "styled-components";

const Header = () => {

    const fontNavStyles = css`
      font-family: Museo Sans Cyrl, sans-serif;
      font-size: 16px;
      font-style: normal;
      line-height: 18px;
      letter-spacing: .3px;
      color: #FFFFFF;
    `

    const Header = styled.header`
      flex-wrap: wrap;
    `

    const TopHeader = styled.div`
      width: 100%;
      max-width: 1920px;
      height: 50px;
      background: #333333;
    `

    const NavTopHeader = styled.div`
      display: flex;
      flex-direction: row;
      height: 50px;
      margin: 0 160px;
      @media (max-width: 1500px) {
        margin: 0 2%;
      }
      align-items: center;
      justify-content: flex-start;
    `

    const NavText = styled.li`
      ${fontNavStyles};
      margin-right: 6%;

      &:nth-child(4) {
        //margin-right: 5%;
      }

      &:nth-child(5) {
        //margin-left: 2%;
        //margin-right: 5%;
      }

      &:nth-child(6) {
        margin-right: 15%;
      }

      &:nth-child(7) {
        margin-right: 0;
        padding-right: 1%;
        border-right: 1px solid #956D84;
      }

      &:nth-child(8) {
        margin-right: 0;
        
        padding-left: 1%;
        //margin-left: auto;
        
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
      @media (max-width: 1500px) {
        margin: 0 2%;
      }
      //align-items: center;
      //justify-content: flex-start;
    `

    const LogoImage = styled.img`
      align-self: center;
      margin-right: 8%;
      width: 120px;
      height: 120px;

    `

    const NavMainHeader = styled.div`

    `

    const SearchGroup = styled.div`
      width: 100%;
      margin-top: 4%;
      justify-content: flex-start;
    `



    const CartInfoIcons = styled.div`

    `

    const InputCategories = styled.input`

      height: 18px;
      width: 220px;
      
      font-family: Museo Sans Cyrl, sans-serif;
      font-size: 14px;
      font-style: normal;
      line-height: 18px;
      font-weight: 300;
      color: #828282;
      border: none;
      border-bottom: 1px solid #956D84;
      
      
      
      ::placeholder {
        color: #828282;
      }
    `

    const InputSearch = styled.input`

      height: 18px;
      width: 580px;
      
      font-family: Museo Sans Cyrl, sans-serif;
      font-size: 14px;
      font-style: normal;
      line-height: 18px;
      color: #828282;
      border: none;
      border-bottom: 1px solid #956D84;
    
      margin-right: 1%; 
        
      ::placeholder {
        color: #828282;
      }
    `
    const SocialGroupIcons = styled.div`
      width: 100%;  
    `

    const SocialIcon = styled.img `
      
      width: 30px;
      height: 30px;
      background: #956D84;
      border-radius: 50%;
    `

    return (
        <Header>
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
                <SearchGroup>
                    <InputCategories type='input' placeholder='Поиск по категориям'/>
                    <InputSearch type='input' placeholder='Поиск по товарам'/>
                </SearchGroup>
                <NavMainHeader>

                </NavMainHeader>

                <SocialGroupIcons>
                    <SocialIcon src={'/images/viber.svg'} alt='viber-logo'/>
                    <SocialIcon src={'/images/instagram.svg'} alt='inst-logo'/>
                    <SocialIcon src={'/images/telegram.svg'} alt='tg-logo'/>
                    <SocialIcon src={'/images/facebook.svg'} alt='fb-logo'/>
                </SocialGroupIcons>

                <CartInfoIcons>

                </CartInfoIcons>
            </MainHeader>
        </Header>
    );
};

export default Header;