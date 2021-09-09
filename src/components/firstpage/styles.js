import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;  
  height: 100vh;
  width:100vw;  
`
export const Container = styled.div`
  display: flex;
  flex:1;
  background-color: #dcdcdc;
  justify-content: center;
  align-items: center;   
   
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  & button{
    font-size: 16px;
    margin-bottom: 10px;    
  }

`
