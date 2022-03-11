import React from 'react';
import styled from "styled-components";
import {decrement, increment} from "../store/reducers/flowersSlice";
import {useAppDispatch} from "../hooks/hooks";
import Arrow from "../assets/images/arrowItem.png"


const CounterBox = styled.div`
  display: flex;
  position: relative;
  border: 1px solid #956D84;
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



const Value = styled.div `
  width: 25px;
  position: absolute;
  text-align: center;
  left: 39px;
  top: 22px;
  font-size: 24px;
  line-height: 18px;
`

interface CounterProps {
    value: number;
    id: number | undefined ;
}

const Counter: React.FC<CounterProps> = ({value, id}) => {

    const dispatch = useAppDispatch()

    const incrementItem = () => {
        dispatch(increment({id}))
    }

    const decrementItem = () => {
        dispatch(decrement({id}))
    }


    return (
            <CounterBox>
                {value > 1 ? <ArrowButton onClick={decrementItem}/> : '' }
                <Value>{value}</Value>
                <ArrowButton onClick={incrementItem}/>
            </CounterBox>
    )
};

export default Counter;