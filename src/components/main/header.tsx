import React from 'react';
import styled,{css} from "styled-components";

const Header = () => {

    const fontNavStyles = css `
      font-family: Museo Sans Cyrl,sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 18px;
      letter-spacing: 0;
      //text-align: right;
    `

    const Header = styled.header `
        
    `

    const TopHeader = styled.div `
      width: 1920px;
      height: 50px;
    
      background:#333333;
    `
    const NavText = styled.li `
      ${fontNavStyles}
    `



    return (
        <Header>
            <TopHeader>
                <ul>
                    <NavText>Валюта
                        <span>Грн</span>
                        <img src={'/images/arrow-down.png'} alt='arrow-down'/>
                    </NavText>
                    <NavText>Язык
                        <span>RU</span>
                        <img src={'/images/arrow-down.png'} alt='arrow-down'/>
                    </NavText>
                    <NavText>Город
                        <span>Киев</span>
                        <img src={'/images/arrow-down.png'} alt='arrow-down'/>
                    </NavText>
                    <NavText>
                        <img src={'/images/like.svg'} alt='like'/>
                        Закладки
                    </NavText>
                    <NavText>
                        <img src={'/images/shipping.svg'} alt='shipping'/>
                        Доставка и оплата
                    </NavText>
                    <NavText>Контакты</NavText>

                </ul>
                <ul>
                    <img src={'/images/user-logo.svg'} alt='user-logo'/>
                    <NavText>Вход</NavText>
                    <NavText>Регистрация</NavText>
                </ul>
            </TopHeader>
            <img src={'/images/logo.png'} alt='logo'/>
        </Header>
    );
};

export default Header;