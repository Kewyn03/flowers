import React, {useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {useNavigate} from "react-router-dom";
import SearchIconRC from "../../assets/images/search.svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {useInput} from "../../hooks/useInput";

const SearchedCard = () => {

    const navigate = useNavigate()
    const ref = useRef(null)


    const [isShown, setIsShown] = useState(false)

    const input = useInput('')
    const filtered = input.filtered


    const handleClickOutside = () => {
        setIsShown(false)
    }

    const handleClickInside = () => {
        setIsShown(true)
    }
    useOnClickOutside(ref, handleClickOutside)


    return (
        <InputContainer ref={ref}>
            <InputSearch value={input.value} onChange={input.onChange} onClick={handleClickInside}
                         placeholder='Поиск по товарам'/>
            <SearchIcon src={SearchIconRC} alt='search'/>
            {isShown
                ? <InputItems onClick={handleClickOutside}>
                    {filtered?.slice(0, 5).map(item =>
                        <Container key={item.id} onClick={() => navigate(`/catalog/flowers/${item.id}`)}>
                            <FlowerImage src={item.image} alt='image'>{}</FlowerImage>
                            <FlowerName>{item.name}</FlowerName>
                            <FlowerPrice>{item.price}</FlowerPrice>
                        </Container>
                    )}
                </InputItems>
                : console.log( 'vbvj')
            }
        </InputContainer>

    );
};

export default SearchedCard;


//styles


const fontNavStyles = css`
  font-family: Museo Sans Cyrl, sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: 18px;
  letter-spacing: .3px;

`

const InputContainer = styled.span`
  position: relative;

  &:first-child img {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 0;

  }

`

const InputItems = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
`

const Container = styled.div`
  display: flex;
  width: 620px;
  height: 50px;
  border: 1px solid #956D84;
  background: #ffffff;
  align-items: center;
  transition: .5s;

  :hover {
    transform: scale(1.1);
    background: #956D84;
  }
`

const FlowerImage = styled.img`
  width: 40px;
`

const FlowerName = styled.div`
  margin-left: 10px;
  margin-right: auto;
`
const FlowerPrice = styled.div`
  margin-right: 10px;
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

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`