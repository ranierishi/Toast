import React from 'react';
import {Wrapper, Container, Content}from './styles'
import {useToast} from 'hooks/ToastContext'
// import { Container } from './styles';

function Firstpage() {
  const {addToast} = useToast()
  return (
    <Wrapper>
      <Container>
        <Content>
          <button onClick={()=>addToast({
            type: 'success',
            title: `You'v got a sucess`,
            description:'This is the success desctiption'
            })}>
              Success
          </button>
          <button onClick={()=>addToast({
            type: 'info',
            title: `You'v got an info`,
            description:'This is the info desctiption'
            })}>
              Warning
          </button>
          <button onClick={()=>addToast({
            type: 'error',
            title: `You'v got an error`,
            description:'This is the error desctiption'
            })}>
              Error</button>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Firstpage;