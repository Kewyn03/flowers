import React, {useEffect} from 'react';
import styled, {css} from "styled-components";
import {useFormik} from "formik";
import Arrow from "../assets/images/arrowdown.svg"
import Vector from "../assets/images/vector.svg"

const TitleStyle = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`

const Container = styled.div`
  display: flex;
  width: 1420px;
  margin: 100px 250px 0;

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

const FieldsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 976px;
  height: 1000px;
  margin-right: 30px;
`

const Box = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  &:nth-child(1) {
    width: 976px;
    height: 433px;
    border: 1px solid #956D84;
  }

  &:nth-child(2) {
    width: 480px;
    height: 574px;
    border: 1px solid #956D84;
    margin-right: 16px;
    margin-top: 17px;
  }

  &:nth-child(3) {
    width: 480px;
    height: 574px;
    border: 1px solid #956D84;
    margin-top: 17px;
  }

`

const OrderBox = styled.div`

`

const Checklist = styled.div`
  position: relative;
  
 
  width: 415px;
  height: 544px;
  border: 1px solid #956D84;
`

const CheckContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 40px;

  
`


const Coupons = styled.div`

`

const Button = styled.button.attrs( ({
    type: "submit"
}))`
  position: absolute;
  width: 220px;
  height: 63px;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  background-color: #956D84;
  border: none;
  transition: .5s;
  left: 95px;
  bottom: 40px;

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
  left: 35px;
  top: 23px;
`

const CustomInput = styled.input.attrs({
    autoComplete: "off"
})`
  width: 415px;
  height: 59px;
  border-color: #BDBDBD;
  padding-left: 35px;
  padding-right: 15px;
  font-size: 14px;

  &:-webkit-autofill {
    color: #FFFFFF !important;
  }

  &:focus {
    border: none;
  }
`

const Select = styled.select`
  -webkit-appearance: none;
  background: url(${Arrow}) no-repeat 380px 50%;
  width: 415px;
  height: 59px;
  border-color: #BDBDBD;
  padding-left: 35px;
  padding-right: 15px;
  font-size: 14px;
`


const PlaceContacts = styled.div`
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 45px;
  height: 75px;
  position: relative;

  &:nth-child(2) {
    margin-top: 120px;

    label {
      width: 65px;
    }
  }

  &:nth-child(3) {
    margin-top: -50px;

    label {
      width: 95px;
    }
  }

  &:nth-child(4) {
    margin-top: -50px;

    label {
      width: 70px;
    }
  }
`

const Place = styled.div`

  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 45px;
  margin-top: 115px;
  position: relative;

  &:nth-child(2) {
    margin-top: 115px;

    label {
      width: 140px;
    }
  }

  &:nth-child(3) {
    margin-top: 115px;

    label {
      width: 85px;
    }
  }

  &:nth-child(4) {
    margin-top: 45px;

    label {
      width: 180px;
    }
  }

  &:nth-child(5) {
    margin-top: 45px;

    label {
      width: 75px;
    }
  }

  &:nth-child(6) {
    margin-top: 45px;

    label {
      width: 125px;
    }
  }

  &:nth-child(7) {
    margin-top: 45px;

    label {
      width: 130px;
    }
  }


`

const LabelInput = styled.label`
  position: absolute;
  width: 140px;
  padding-left: 15px;
  top: -10px;
  left: 50px;
  background-color: #FFFFFF;
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 14px;
  line-height: 18px;
  color: #BDBDBD;

`

const Headline = styled.span`
  position: absolute;
  left: 50px;
  top: 50px;
  width: 100%;
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
`

const Checkbox = styled.input.attrs({
    type: 'checkbox'
})`

`

const TextCheckbox = styled.label`

  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 14px;
  line-height: 18px;
  margin-top: 25px;

  span {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  span::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #956D84;
    border-radius: 2px;
    margin-right: 15px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  input:not(:disabled):not(:checked) + span:hover::before {
    border-color: #956D84;
  }

  input:not(:disabled):active + span::before {
    background-color: #956D84;
    border-color: #956D84;
  }

  input:focus:not(:checked) + span::before {
    border-color: #956D84;
  }

  input:checked + span::before {
    border-color: #956D84;

    background-color: #956D84;
    background-image: url(${Vector});
    background-size: contain;
    background-repeat: no-repeat;
  }

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 50px;
`

const PlaceDelivery = styled.div`
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 60px;

  position: relative;

  &:nth-child(7) {
    label {
      width: 160px;
    }
  }

  &:nth-child(8) {
    label {
      width: 130px;
    }
  }
`

const Title = styled.div`
  font-family: Museo Sans Cyrl, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 18px;
  color: #956D84;
`

const ItemsText = styled.div`
  font-family: Euclid Circular B, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #BDBDBD;
`

const ReportDelivery = styled.div`
 
  font-family: Euclid Circular B, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #333333;
`


const OrdersPage = () => {

    useEffect(() => window.scrollTo(0,300),[])

    const formik = useFormik({
        initialValues: {
            fullNameReceiver: '',
            region: '',
            phoneReceiver: '',
            address: '',
            date: '',
            time: '',
            fullName: '',
            phone: '',
            email: '',
            checked: [],
            reason: '',
            text: '',

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    });


    return (
        <>
            <Text>Оформление заказа</Text>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <Container>
                    <FieldsBox>
                        <Box>
                            <Headline>1. Контакты получателя</Headline>
                            <Place>
                                <LabelInput htmlFor="fullNameReceiver">Имя получателя *</LabelInput>
                                <CustomInput
                                    id="fullNameReceiver"
                                    name="fullNameReceiver"
                                    type="text"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.fullNameReceiver}
                                />
                            </Place>
                            <Place>
                                <LabelInput htmlFor="region">Регион *</LabelInput>
                                <CustomInput
                                    id="region"
                                    name="region"
                                    type="text"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.region}
                                />
                            </Place>
                            <Place>
                                <LabelInput htmlFor="phoneReceiver">Телефон получателя *</LabelInput>
                                <CustomInput
                                    id="phoneReceiver"
                                    name="phoneReceiver"
                                    type="text"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.phoneReceiver}
                                />
                            </Place>
                            <Place>
                                <LabelInput htmlFor="address">Адрес *</LabelInput>
                                <CustomInput
                                    id="address"
                                    name="address"
                                    type="text"
                                    required
                                    min="2021-02-27"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                />
                            </Place>
                            <Place>
                                <LabelInput htmlFor="date">Дата доставки</LabelInput>
                                <CustomInput
                                    id="date"
                                    name="date"
                                    type="date"
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                />
                            </Place>
                            <Place>
                                <LabelInput htmlFor="time">Время доставки</LabelInput>
                                <Select
                                    id="time"
                                    name="time"
                                    onChange={formik.handleChange}
                                    value={formik.values.time}
                                >
                                    <option value="" label="Выберите время"/>
                                    <option value="14:00 - 16:00" label="14:00 - 16:00"/>
                                    <option value="16:00 - 18:00" label="16:00 - 18:00"/>
                                    <option value="18:00 - 23:00" label="18:00 - 23:00"/>
                                </Select>
                            </Place>
                        </Box>
                        <Box>
                            <Headline>2. Контакты отправителя</Headline>
                            <PlaceContacts>
                                <LabelInput htmlFor="fullName">Имя *</LabelInput>
                                <CustomInput
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.fullName}
                                />
                            </PlaceContacts>
                            <PlaceContacts>
                                <LabelInput htmlFor="phone">Телефон *</LabelInput>
                                <CustomInput
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                />
                            </PlaceContacts>
                            <PlaceContacts>
                                <LabelInput htmlFor="email">Email *</LabelInput>
                                <CustomInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </PlaceContacts>
                        </Box>
                        <Box>
                            <Headline>3. Детали доставки</Headline>
                            <Boxes>
                                <TextCheckbox htmlFor="checked">
                                    <Checkbox
                                        id="checked"
                                        name="checked"
                                        onChange={formik.handleChange}
                                        value="surprise"/>
                                    <span>Доставка с сюрпризом</span>
                                </TextCheckbox>
                                <TextCheckbox htmlFor="checked2">
                                    <Checkbox
                                        id="checked2"
                                        name="checked"
                                        onChange={formik.handleChange}
                                        value="photoreport"/>
                                    <span>Фотоотчет (+15 грн)</span>
                                </TextCheckbox>
                                <TextCheckbox htmlFor="checked3">
                                    <Checkbox
                                        id="checked3"
                                        name="checked"
                                        onChange={formik.handleChange}
                                        value="addVase"/>
                                    <span>Добавить вазу (+249 грн)</span>
                                </TextCheckbox>
                                <TextCheckbox htmlFor="checked4">
                                    <Checkbox
                                        id="checked4"
                                        name="checked"
                                        onChange={formik.handleChange}
                                        value="event"/>
                                    <span>Напомнить о событии</span>
                                </TextCheckbox>
                                <TextCheckbox htmlFor="checked5">
                                    <Checkbox
                                        id="checked5"
                                        name="checked"
                                        onChange={formik.handleChange}
                                        value="postcard"/>
                                    <span>Визитка
                                    </span>
                                </TextCheckbox>
                                <TextCheckbox htmlFor="checked6">
                                    <Checkbox
                                        id="checked6"
                                        name="checked"
                                        onChange={formik.handleChange}
                                        value="postcardFully"/>
                                    <span>Полномасштабная открытка (+79 грн)
                                    </span>
                                </TextCheckbox>
                                <PlaceDelivery>
                                    <LabelInput htmlFor="reason">Повод для открытки</LabelInput>
                                    <CustomInput
                                        id="reason"
                                        name="reason"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.reason}
                                    />
                                </PlaceDelivery>
                                <PlaceDelivery>
                                    <LabelInput htmlFor="text">Текст открытки</LabelInput>
                                    <CustomInput
                                        id="text"
                                        name="text"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.text}
                                    />
                                </PlaceDelivery>
                            </Boxes>
                        </Box>
                    </FieldsBox>
                    <OrderBox>
                        <Checklist>
                            <CheckContainer>
                                <Title>Ваш заказ</Title>
                                <ItemsText>25 желтых тюльпанов</ItemsText>
                                <ReportDelivery>Сумма заказа</ReportDelivery>
                                <ReportDelivery>Доставка</ReportDelivery>
                                <ReportDelivery>Фотоотчет</ReportDelivery>
                                <Button><ButtonText>Оформить заказ</ButtonText></Button>
                            </CheckContainer>
                        </Checklist>
                        <Coupons>

                        </Coupons>
                    </OrderBox>
                </Container>
            </form>
        </>
    );
};

export default OrdersPage;