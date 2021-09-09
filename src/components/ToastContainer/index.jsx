import React from 'react'
import { useTransition } from 'react-spring';

import { } from '@fortawesome/free-regular-svg-icons'
import Toast from './Toast'
import { Container } from './styles'

const ToastContainer = ({messages = [{id:'0',type: 'a'}]}) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message?.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 1 },
    },
  );

  return(
    <Container>
     
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  
  )
}

export default ToastContainer