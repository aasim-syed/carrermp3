import React  from 'react';

import styled from 'styled-components';
import { useState } from 'react';

const About = () => {
  var n;
  const [new1 , setNew1] = useState("")
   function Nam(e){
    console.log("Eew")
    window.alert("New one")
    var n = "ewewe"+"new"
  
  }
  return  (
  <>
  <New>
  <h2 className='car'>SHHH!!SILENCE !😶</h2>
  <img className='imgs' style={{width:'20vh',marginLeft:'12vh',marginTop:'8vh'}} src="https://c.tenor.com/lsQnDndJ9KkAAAAC/among-us-who-asked.gif"></img>
    <Firstblock >
    
      <p>NOTHING HERE!JUST AWESOME CSS🙂</p>
      {/* <input type="text" onChange={(e)=>{setNew1(e.target.value)}}/>
    <button style={{fontFamily:'Poppins',color:'red'}} onClick={Nam}>{new1}</button> */}
    </Firstblock>
    <Secondblk>
    <p>ABOUT U$ </p>
    </Secondblk>
    <Thirdblk>
    <p>ATLEA$T for NOW 😵‍💫 </p>
    </Thirdblk>
  </New>
  
  </>
  )
};

export default About;

const New = styled.div`

position: relative;
right:0px;
height: 710px;
background: url("https://giffiles.alphacoders.com/723/7232.gif");
// background: url("https://cdn.dribbble.com/users/1445486/screenshots/3856847/media/7e998380929df7a8a3663a6e324fdeaa.gif");
background-blend-mode: darken;
bottom: 0px;
left: 0px;
top: 0vh;
z-index:0;
// background-repeat:no-repeat;
// background-size:cover;

@media(max-width:600px){
  height:2200px;
}
border-radius: 0px 0px 0px 0px;
.imgs{
  @media(max-width:600px){
  position: absolute;
  top:84px;
  left:40px;
  
  }
 }
h1{
    position: absolute;
width: 731px;
height: 40px;
left: 194px;
top: 10px;
color:white;
font-family: Poppins;
font-style: italic;
font-weight: 600;
font-size: 90px;
line-height: 135px;


}
.car{
  position: absolute;
width: 661px;
height: 20px;
left: 254px;
top: 0px;
color:#36FC25;
font-family: 'Press Start 2P', cursive;
font-style: italic;
font-weight: 600;
font-size: 40px;
line-height: 135px;

mix-blend-mode: hard-light;

@media(max-width:1000px){

  position: absolute;
  width: 20px;
  height: 10px;
  left: 104px;
  top: 14px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 35px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
}
@media(max-width:700px){

  position: absolute;
  width: 0px;
  height: 10px;
  left: 104px;
  top: 14px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 25px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
}
@media(max-width:600px){

  position: absolute;
  width: 0px;
  height: 5px;
  left: 15px;
  top:14px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 22px;
  line-height: 55px;
  
  mix-blend-mode: hard-light;
}
:hover{
  color:white;
  }
}
.adv{
  position: absolute;
  width: 820px;
  height: 10px;
  left: 194px;
  top: 134px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 30px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
  @media(max-width:1000px){
    position: absolute;
    width: 760px;
    height: 10px;
    left: 104px;
    top: 164px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    
    mix-blend-mode: hard-light;
  }
  @media(max-width:600px){

    position: absolute;
    width: 20px;
    height: 10px;
    left: 44px;
    top: 144px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 25px;
    line-height: 55px;
    
    mix-blend-mode: hard-light;
  }
}
.stay{
  position: absolute;
  width: 900px;
  height: 10px;
  left: 194px;
  top: 224px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 70px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
  @media(max-width:1000px){
    position: absolute;
    width: 530px;
    height: 10px;
    left: 104px;
    top: 364px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 45px;
    line-height: 65px;
    
    mix-blend-mode: hard-light;
  }
  @media(max-width:700px){
    position: absolute;
    width: 700px;
    height: 10px;
    left: 14px;
    top: 364px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 45px;
    line-height: 135px;
    
    mix-blend-mode: hard-light;
  }
  @media(max-width:600px){

    position: absolute;
    width: 110px;
    height: 10px;
    left: 44px;
    top: 404px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 25px;
    line-height: 55px;
    
    mix-blend-mode: hard-light;
  }


`;
const Firstblock = styled.div`
position: absolute;
width: 406px;
height: 401px;
left: 24px;
top: 30vh;

background: url(giphy.png);
background-blend-mode: darken;
mix-blend-mode: normal;

border-radius: 0px 44px;
@media(max-width:600px){
left:0px;
width:auto;
top:40vh;
}
:hover{
border: 99px solid #000000;
box-sizing: border-box;
filter: drop-shadow(5px 4px 33px #E31313);
transition-duration:0.7s ;
}
p{
  margin-left:30px;
  color:IndianRed;
  font-family:Bangers;
  font-size:35px;
  :hover{
 
  
  color:white;
  font-family:Bangers;
  }
}

`;
const Secondblk = styled.div`
position: absolute;
width: 406px;
height: 401px;
left: 454px;
top: 150px;

background: url(giphy.png);
background-blend-mode: darken;
mix-blend-mode: normal;

border-radius: 0px 44px;
:hover{
  transition-duration:0.7s;
mix-blend-mode: normal;
border: 99px solid black;
box-sizing: border-box;
filter: drop-shadow(5px 4px 33px #13FC46);
border-radius: 0px 44px;
}
@media(max-width:600px){

left:0px;
width:370px;
top:115vh;



}
p{
  margin-left:50px;
  background: -webkit-linear-gradient(green, lightgreen);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family:Bangers;
  font-size:40px;
  :hover{
 
  
  color:white;
  font-family:Bangers;
  }
}

`;
const Thirdblk = styled.div`
position: absolute;
width: 406px;
height: 401px;
left: 1054px;
top: 220px;

 background-blend-mode: darken;
mix-blend-mode: normal;
// border-image: url("https://idronline.org/wp-content/uploads/2020/12/giphy-74.gif");
border-radius: 0px 44px;
:hover{
  transition-duration:0.7s;
mix-blend-mode: normal;
border: 99px solid black;
box-sizing: border-box;
filter: drop-shadow(5px 4px 33px #EF12E6);
border-radius: 0px 44px;
}
@media(max-width:600px){

left:0px;
width:370px;
top:185vh;



}
p{
  margin-left:30px;
  background: -webkit-linear-gradient(white, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family:Bangers;
  font-size:40px;
  :hover{
 
  
  color:white;
  font-family:Bangers;
  }
}

`;

