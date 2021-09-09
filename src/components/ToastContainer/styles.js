import styled, {css} from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0px;
  right:0;
  padding: 30px;
  overflow: hidden;
  z-index:2;
  
  
`
const toastTypeVariations = {
  info: css`
  background:#F8F8F9;
  color:#1E75BA;
  `,
  error: css`
  background: #fddede;
  color:#c53030;
  `,
  success: css`
  background: #e6fffa;
  color:#007F5F;
  `
} 

export const Toast = styled.div`
  border-radius: 10px;
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div{
    margin-top: 8px;
  }
  
  ${props => toastTypeVariations[props.type || 'info'] }

  > svg{
    margin: 4px 12px 0 0;    
  }
  div{
    flex:1;
  }
  p{
    margin-top: 4px;
    font-size: 14px;
    opacity: 0.8;
    line-height: 20px;
  }
  button{
    position: absolute;
    right: 16px;
    top:15px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;

  }

  ${props => !props.hasDescription && css`
    align-items: center;
    svg{
      margin-top: 0;
    }
  `}

`