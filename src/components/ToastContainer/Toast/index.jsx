import React, { useEffect } from 'react'
import {Container} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faExclamationCircle, faTimesCircle, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useToast } from 'hooks/ToastContext'

const icons ={
  info: <FontAwesomeIcon size="1x" icon={faInfoCircle}/>,
  error: <FontAwesomeIcon size="1x" icon={faExclamationCircle}/>,
  success: <FontAwesomeIcon size="1x" icon={faCheckCircle}/>
}

const Toast = ({message, style})=> {
  const { removeToast } = useToast()

  useEffect(()=>{
    const timer = setTimeout(()=>{
      removeToast(message.id)
    }, 3000)

    return ()=>{
      clearTimeout(timer)
    }
  }, [message, removeToast])
  

  return(
    <Container type={message.type} hasDescription={!!message.description} style={style}>
      {icons[message.type || 'info']}
        <div>
          <strong>{message.title}</strong>
          {message.description && <p>{message.description}</p>}
        </div>

        <button onClick={() => removeToast(message.id)} type="button">
          <FontAwesomeIcon size="1x" icon={faTimesCircle}/>
        </button>
    </Container>

  )
}

export default Toast