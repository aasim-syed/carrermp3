import React from 'react'

import styled from "styled-components"

const Second = () => {

    return ( 
        <>
        <Red>
            <h1>NOTHING HERE..JUST FUNNY CATS 😺</h1>
        </Red>





        </>
    )
}

export default Second

const Red = styled.div`
position: relative;
right:0px;
height: 610px;
z-index:1;
left: 0px;
top:0vh;
background:url("https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1");
bottom:0px;


border-radius: 0px 0px 0px 0px;
h1{
    @media(max-width:600px){
        left: 0px;
        width: auto;
        height: auto;
        font-size: 50px;
        line-height: 53px;
    }

    position: absolute;
width: 731px;
height: 500px;
left: 194px;
top: -10px;

font-family: 'Major Mono Display', monospace;
background: rgba(21, 96, 226, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(21, 96, 226, 0.3);

color:white;
font-weight: 600;
font-size: 90px;
line-height: 105px;

mix-blend-mode: hard-light;
:hover{
    transition-duration:0.7s ;
  mix-blend-mode: normal;
  
  box-sizing: border-box;
  filter: drop-shadow(5px 4px 33px #13FC46);
  border-radius: 0px 44px;
  }
  
}
`;