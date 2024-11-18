import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color: blue;
color: white;
border-radius: 3px;
border: 2px solid #BF4F74;
margin: 10px ;
padding: 10px 30px;
`
function StyledComponent() {

  return (
    <>
        <Button >Styled Component</Button>
    </>
  )
}

export default StyledComponent