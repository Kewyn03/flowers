import React from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import {Collapse} from "antd";

// const AccordionContainer = styled.div`
//   width: 250px;
//   border: 1px solid red;
// `
//

// const Label = styled.div`
//   position: relative;
//   font-size: 20px;
//   font-family: 'Museo Sans Cyrl', sans-serif;
//   font-style: normal;
//   font-weight: 300;
//   line-height: 18px;
//   color: #333333;
//
//   ::after {
//     position: absolute;
//     right: 0;
//     content: url(${ArrowRC});
//     padding-right: 10px;
//   }
// `
//
const Content = styled.div`
  font-family: 'Museo Sans Cyrl', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 38px;
  color: #956D84;
  padding-left: 35px;

`

const Wrapper = styled.div`
  margin-top: 50px;
  width: 260px;
  border: none;
  background-color: #ffffff;
`

const Accordion: React.FC = () => {


    const {Panel} = Collapse;


    return (
        <>
            <Wrapper>
                <Collapse className={"menu"} defaultActiveKey={['1']}>
                        <Panel className={"line"} header="Букеты" key="1">
                            <Content className={"content"}>Букеты из роз</Content>
                            <Content>Букеты из хризантем</Content>
                            <Content>Букеты из альтромерии</Content>
                            <Content>Букеты из гербер</Content>
                            <Content>Букеты из ирисов</Content>
                            <Content>Букеты из пионов</Content>
                        </Panel>
                    <Panel className={"line"} header="Розы" key="2">
                        <Content className={"content"}>Букеты из роз</Content>
                    </Panel>
                    <Panel className={"line"} header="Цветы в коробке" key="3">
                        <Content className={"content"}>Какие-то цветы в коробке</Content>
                    </Panel>
                    <Panel className={"line"} header="Композиции" key="4">
                        <Content className={"content"}>Какие-то композиции</Content>
                    </Panel>
                    <Panel className={"line"} header="Подарки" key="5">
                        <Content className={"content"}>Какие-то подарки</Content>
                    </Panel>
                    <Panel className={"line"} header="Подарочные корзины" key="6">
                        <Content className={"content"}>Какие-то подарочные корзины</Content>
                    </Panel>
                </Collapse>
            </Wrapper>
        </>


    );
};

export default Accordion;