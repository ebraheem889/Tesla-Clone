import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Section from "../Section"

 function Home() {
  
  const data = useSelector(state=>state.homeslice);
  console.log(data);

  return (

        <Container >

            { data && data.map((element , index)=>{
                
                return  <Section title= {element.title} Description={element.Description} 
                          LeftButton={element.LeftButton}
                          RightButton={element.RightButton} 
                          bgimgUrl={element.bgimgUrl}/> 

            })


            }
         
         
       
       </Container >
    

    )
}
export default Home;                  

const Container = styled.div`

  height:100vh;


`