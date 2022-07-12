import React from 'react'

import { useState } from 'react';
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import { useDispatch, useSelector } from 'react-redux';
import AssignCarstoSatate from "../src/features/carSlice/index"


 function Section(props) {


     const [BurgerStatus, setBurgerStatus] = useState(false);
     const cars = useSelector(state=>state.carSlice);
     const sides = useSelector(state=>state.sidebarSlice);
  


  return (
      <Wrap bgimage={props.bgimgUrl} >
        <NavPart>
              <Container>
                  <RightDiv>
                     <LeftImg src="/images/logo.svg"   />
                  </RightDiv>
                  <Menu>

                        { cars && cars.map((car,index)=>{
                              return <li key={index}><a href='#'>{car}</a></li>
                        })


                        }
                  </Menu>
                  <RightMenu>
                            <a href='#'>Shop</a>
                            <a href='#'>Account</a>
                              <CusomMenu onClick={()=> setBurgerStatus(true)} >
                                <i className='fa fa-bars'></i>
                              </CusomMenu>

                  </RightMenu>

              </Container>

              <BurgerNav  show={BurgerStatus} >
                       <i className="fa fa-close" onClick={()=> setBurgerStatus(false)} ></i> 

                       { sides &&

                              sides.map((element,index)=>{
                                    return  <li key={index}><a href='#'>{element}</a></li>


                              })


                       }  
                      
                  </BurgerNav>
                
                             
            
        </NavPart>    
       <Fade bottom> 
            <ItemText>
                  <h1>{props.title}</h1>
                  <p>{props.Description}</p>
            </ItemText>
        </Fade>
       <Buttons>
             <Fade bottom>
                  <ButtonGroup>
                        {props.LeftButton &&
                              <LeftButton>
                                {props.LeftButton}
                             </LeftButton>
                        }
                        {props.RightButton &&
                              <RightButton>
                                {props.RightButton}
                             </RightButton>
                        }
                        
                  </ButtonGroup>    
             </Fade>
            <Arrows src="/images/down-arrow.svg"/>
       </Buttons>
           
      </Wrap>
      
  )
}

export default Section




const Container = styled.div`

      display:flex;
      width:100%;
      top:0;
      bottom:0;
      right:0;
      left:0;
      padding:0px 20px;
      justify-content:space-between;
      min-height:60px;


     


`


const RightDiv = styled.div
`
      display:flex;
      align-items:center;

`
const NavPart = styled.div`
      left:0px;
      right:0px;
      top:0px;
      bottom:92%;
      position:fixed;
      display:flex;
      margine-bottom:20px;
      align-items:center;
      justify-content:space-between;
     
`

const LeftImg  = styled.img`

      width:100px;
      height:30px;
      align-items:center;
      cursor:pointer;

     


`
const Menu = styled.div`
      align-items:center;
      display:flex;
      justify-content:center;
      list-style:none;
      flex:1;
     
     
   li {
      list-style: none;
    }
    
     li a {
      position: relative;
      display: block;
      width: 91px;
      height: 30px;
      text-align: center;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      line-height: 30px;
     
      font-size: 15px;
      color: #666;
      -webkit-transition: .5s;
      -webkit-transition: .5s;
      transition: .5s;
    }
    
     li a:hover {
      color: black;
      background: #dbd5d545;
      border-radius: 112px;
      box-shadow: 0 0 5px white;
      text-shadow: 0 0 5px white;
    }

    @media(max-width:600px){

            display:none;

    }

`

const RightMenu = styled.div`

    display:flex;
    align-items:center;

      a{

            margin-right:20px;
            padding:10px;
      }

      a:hover {
      color: black;
      background: #dbd5d545;
      border-radius: 112px;
      box-shadow: 0 0 5px white;
      text-shadow: 0 0 5px white;
    }
    
    

     

`


const CusomMenu = styled.div`

    display:flex;
    align-self:center;
    cursor:pointer;
    font-size:25px;
    @media(max-width:400px){

      display:none;


}

`

const BurgerNav = styled.div`

      transform :${ props=> props.show ? " translateX(0)" :"translateX(100%)"};
      transition:transform 0.7s ease-in-out;
      position:fixed;
      top:0;
      bottom:0;
      right:0;
      width:300px;
      padding:20px;
      background-color:white;
      text-align:start;


      li{

            padding:17px;
            border-bottom:1px solid  #eee ;
      }

      li:hover{

      color: black;
      background: #dbd5d545;
      border-radius: 112px;
      box-shadow: 0 0 5px white;
      text-shadow: 0 0 5px white;

      }

      a{
            font-weight:bold;
      }

      i{
            position:relative;
            left:90%;
            cursor:pointer;
            font-size: 29px;
            }
`

const LinksTo = styled.div`

    display:flex;
    width:290px;

   
   
      ul{
            list-style: none;
            width:100%;
      }

    li{
      
            padding:10px;
          
          
      }

      li:hover{
           
            color: black;
            background: #dbd5d545;
            border-radius: 112px;
            width:100%;
            cursor:pointer;
      }

     



`



const Wrap = styled.div`
width:100vw;
height:100vh;
z-index:1;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:${props=>`url(${props.bgimage})`}; 
      h1{
            color:black;
      }

      p{
            color:black;
            font-size:20px;
      }

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

const ItemText = styled.div`

padding-top:20vh;
text-align:center;      

     

`

const ButtonGroup  = styled.div`

display:flex;     
justify-content:center;
@media(max-width:768px){

      flex-direction:column;

}


`
const LeftButton = styled.div`

background-color:rgba(23,26,32,0.8);
width:256px;
height:40px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
text-transform:uppercase;
font-size:14px;
margin:8px;
cursor:pointer;

`

const RightButton = styled(LeftButton)`

background-color:white;
color:black;
opacity:0.8;

`

const Buttons = styled.div`

`

const Arrows = styled.img`

height:40px;
animation:animateDown infinite 0.5s;
overflow:hidden;
`