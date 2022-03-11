import React from 'react';
import styled from "styled-components";

const Container = styled.div `
  display: flex;
  height: 600px;
  align-items: center;
  justify-content: center;
`

const Text = styled.div `
 
`

const EmptyCart = () => {
    return (
        <Container>
            <Text>Your cart is empty</Text>
        </Container>
    );
};

export default EmptyCart;