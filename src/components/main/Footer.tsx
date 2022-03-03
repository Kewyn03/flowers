import React from 'react';
import styled, {css} from "styled-components";

import MapPNG from '../../assets/images/map.png'
import LogoPNG from '../../assets/images/logo.png'

import {ReactComponent as MapPointRC} from '../../assets/images/mappoint.svg'
import {ReactComponent as ContactsRC} from '../../assets/images/contacts.svg';
import {ReactComponent as SkypeRC} from '../../assets/images/skype.svg';
import {ReactComponent as MailRC} from '../../assets/images/mail.svg';
import {ReactComponent as InstRC} from '../../assets/images/instagram.svg';
import {ReactComponent as FBRC} from '../../assets/images/facebook.svg';
import LogoRC from '../../assets/images/logotext.png';
import Bank from '../../assets/images/payments/bank.png'
import Liqpay from '../../assets/images/payments/liqpay.png'
import MasterCard from '../../assets/images/payments/mastercard.png'
import Maestro from '../../assets/images/payments/maestrocard.png'
import VisaElectron from '../../assets/images/payments/visaelectron.png'
import Visa from '../../assets/images/payments/visa.png'


const TextMenuStyle = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #FFFFFF;


`

const IconStyle = css`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #956D84;
  padding: 4px;
  margin-right: 21px;
  cursor: pointer;
`


const BottomContainer = styled.div`

`

const MapContainer = styled.div`
  margin: 80px 250px;
  height: 510px;
  position: relative;
  background-image: url(${MapPNG});
  background-repeat: no-repeat;
`

const MapPoint = styled(MapPointRC)`
  position: absolute;
  left: 587px;
  bottom: 220px;
`


const SocialRectangle = styled.div`
  display: flex;
  position: absolute;
  right: 230px;
  width: 380px;
  height: 510px;
  background-color: #FFFFFF;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.15), 4px 0 10px rgba(0, 0, 0, 0.15);

`

const Logo = styled.img`
  width: 105px;
  height: 105px;
  position: absolute;
  left: 145px;
  top: 30px;
`

const LogoFooter = styled.img`

  width: 170px;
  height: 170px;
`

const LogoText = styled.img`
  position: absolute;
  width: 173px;
  left: -3px;
  bottom: 0;
`

const LogoContainer = styled.div`

  position: relative;
  margin-right: 190px;
  width: 170px;
  height: 170px;

`

const SocialContainer = styled.div`


`

const SocialTitle = styled.span`
  line-height: 30px;

`

const ContactIcon = styled(ContactsRC)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`

const SkypeIcon = styled(SkypeRC)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`
const MailIcon = styled(MailRC)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`

const Text = styled.span`
  vertical-align: 2px;
  font-family: Euclid Circular B, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #828282;

`

const TextContacts = styled.span`

  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #333333;

`

const Phone = styled.div`
  position: absolute;
  left: 70px;
  top: 180px;
`
const Skype = styled.div`
  position: absolute;
  left: 70px;
  top: 280px;
`
const Mail = styled.div`
  position: absolute;
  left: 70px;
  top: 350px;
`

const IconsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 70px;

`

const InstSVG = styled(InstRC)`
  ${IconStyle}
`

const FBSVG = styled(FBRC)`
  ${IconStyle};
  margin-right: 0;
`

const SkypeSVG = styled(SkypeRC)`
  ${IconStyle};
  fill: #FFFFFF;

`
const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1920px;
  height: 350px;
  background-color: #333333;

`

const FooterInside = styled.div`
  display: flex;
  width: 1420px;
  height: 240px;
  margin-left: 250px;
  margin-top: 32px;
  border-bottom: 1px solid #956D84;

`

const TextMenu = styled.div`
  display: flex;
  flex-direction: row;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  //width: 220px;
  margin-right: 60px;

  &:nth-child(4) {
    margin-right: 0;
  }

`
const TextHeader = styled.span`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #FFFFFF;
`

const TextMain = styled.span`
  ${TextMenuStyle};
  padding-left: 5px;
  margin-top: 20px;

  &:nth-child(n) {
    cursor: pointer;
  }

  &:nth-child(2) {
    margin-top: 38px;
  }
`

const FooterCopyright = styled.div`
  display: flex;
  margin-left: 250px;
  margin-right: 250px;
  width: 1420px;
  height: 73px;
  flex-direction: row;
  
  
`

const Copyright = styled.span`
  display: flex;
  ${TextMenuStyle};
  text-transform: none;
  align-items: center;
 
`
const Payments = styled.span `
  display: flex;
  margin-left: auto;
  align-items: center;
`

const PaymentsText = styled.span`
  ${TextMenuStyle};
  margin-right: 20px;
  text-transform: none;
`

const PaymentsIcon = styled.img`
  
  margin-left: 10px;
  margin-right: 10px;
  
  &:last-child {
    margin-right: 0;
  }
 
`

const Footer = () => {
    return (
        <BottomContainer>
            <MapContainer>
                <MapPoint/>
                <SocialRectangle>
                    <Logo src={LogoPNG} alt='logo'/>
                    <SocialContainer>
                        <Phone>
                            <SocialTitle>
                                <ContactIcon/>
                                <Text>Телефон:</Text>
                                <br/><TextContacts>+47 (047) 474 47 47</TextContacts>
                                <br/><TextContacts>+49 (049) 494 49 49</TextContacts>
                            </SocialTitle>
                        </Phone>
                        <Skype>
                            <SocialTitle>
                                <SkypeIcon/>
                                <Text>Skype:</Text>
                                <br/><TextContacts>Flowers-Ukraine</TextContacts>
                            </SocialTitle>
                        </Skype>
                        <Mail>
                            <SocialTitle>
                                <MailIcon/>
                                <Text>Mail:</Text>
                                <br/><TextContacts>flowers.Ukraine1488@gmail.com</TextContacts>
                            </SocialTitle>
                        </Mail>
                        <IconsContainer>
                            <InstSVG/>
                            <SkypeSVG/>
                            <FBSVG/>
                        </IconsContainer>
                    </SocialContainer>
                </SocialRectangle>
            </MapContainer>
            <FooterContainer>
                <FooterInside>
                    <LogoContainer>
                        <LogoFooter src={LogoPNG} alt='logo'/>
                        <LogoText src={LogoRC} alt='logotext'/>
                    </LogoContainer>
                    <TextMenu>
                        <Menu>
                            <TextHeader>информация</TextHeader>
                            <TextMain>о нас</TextMain>
                            <TextMain>доставка и оплата</TextMain>
                            <TextMain>политика конфиденциальности</TextMain>
                        </Menu>
                        <Menu>
                            <TextHeader>служба поддержки</TextHeader>
                            <TextMain>карта сайта</TextMain>
                            <TextMain>возврат товара</TextMain>
                            <TextMain>связаться с нами</TextMain>
                            <TextMain>для сотрудничества</TextMain>
                        </Menu>
                        <Menu>
                            <TextHeader>личный кабинет</TextHeader>
                            <TextMain>личный кабинет</TextMain>
                            <TextMain>история заказа</TextMain>
                            <TextMain>закладки</TextMain>
                            <TextMain>список новостей</TextMain>
                        </Menu>
                        <Menu>
                            <TextHeader>дополнительно</TextHeader>
                            <TextMain>подарочные</TextMain>
                            <TextMain>сертификаты</TextMain>
                            <TextMain>акции</TextMain>
                            <TextMain>цветы в офис</TextMain>
                        </Menu>
                    </TextMenu>
                </FooterInside>
                <FooterCopyright>
                    <Copyright>Copyright © 2021. Все права защищены</Copyright>
                    <Payments>
                        <PaymentsText>Способы оплаты:</PaymentsText>
                        <PaymentsIcon src={Bank} alt='icon' width={34} height={35}/>
                        <PaymentsIcon src={Liqpay} alt='icon' width={78} height={16}/>
                        <PaymentsIcon src={MasterCard} alt='icon' width={59} height={35}/>
                        <PaymentsIcon src={Maestro} alt='icon' width={59} height={35}/>
                        <PaymentsIcon src={VisaElectron} alt='icon' width={59} height={35}/>
                        <PaymentsIcon src={Visa} alt='icon' width={52} height={35}/>
                    </Payments>
                </FooterCopyright>
            </FooterContainer>
        </BottomContainer>
    );
};

export default Footer;