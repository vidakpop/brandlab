import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutContainer>
        <h2>About Me</h2>
        <p>Hi, I'm Imelda, a brand strategist and designer. I help brands grow and transform their identities. I have over 10 years of experience in brand strategy, design, and digital marketing. I have worked with brands from various industries, including tech, fashion, and finance. I am passionate about helping brands reach their full potential and stand out in the market.</p>   
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export default About