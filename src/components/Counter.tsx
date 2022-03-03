import React from 'react';
import styled from "styled-components";
import { increment, decrement } from "../store/reducers/counterSlice";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {RootState} from "../store/store";
import Arrow from "../assets/images/arrowItem.png"



const CounterBox = styled.div`
  display: flex;
  position: relative;
  
  border: 1px solid #956D84;
  margin-top: 50px;
  width: 105px;
  height: 63px;
`

const ArrowButton = styled.button`
  background: url(${Arrow});
  position: absolute;
  width: 8px;
  height: 15px;
  right: 10px;
  top: 25px;
  &:first-child {
    transform: scale(-1, 1);
    left: 10px
  }
  background-repeat: no-repeat;
`

const ArrowButtonDisabled = styled.button `
  background: url(${Arrow});
  transform: scale(-1, 1);
  position: absolute;
  left: 10px;
  top: 25px;
  width: 8px;
  height: 15px;
  opacity: .2;
  background-repeat: no-repeat;
 
  cursor:  default;
`


const Value = styled.div `
  width: 25px;
  position: absolute;
  text-align: center;
  left: 39px;
  top: 22px;
  font-size: 24px;
  line-height: 18px;
`

const Counter = () => {

    const { value } = useAppSelector((state: RootState) => state.counterReducer)
    const dispatch = useAppDispatch()

    return (
        <CounterBox>
            {value > 1
                ? <ArrowButton onClick={() => dispatch(decrement())}/>
                : <ArrowButtonDisabled onClick={() => dispatch(decrement())} disabled />
            }
            <Value>{value}</Value>
            <ArrowButton onClick={() => dispatch(increment())}/>

        </CounterBox>
    );
};

export default Counter;