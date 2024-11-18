import React from 'react'
import styled from 'styled-components'
const Home = () => {
  return (
    <HomeContainer>
        <Hero>
        <VideoBackground
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./assets/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
            <h1>Welcome to Imelda's Brand Lab</h1>
            <p>Empowering Brands,Transforming Identities</p>
            <HeroButton>Learn More</HeroButton>
        </Hero>
        <Section>
            <h2>About The Merger Program</h2>
            <p>Join a community focused on brand growth and digital transformation</p>
            <SectionButton>
                Join Now
            </SectionButton>
        </Section>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  text-align: center;
`;

const Hero = styled.div`
  background-color: #f39c12;
  padding: 100px 0;
  color: #fff;
  overflow:hidden; //ensure content doesn't overflow
`;
const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1; // Send the video behind the content
  transform: translate(-50%, -50%);
  object-fit: cover; // Cover the entire container
`;
const HeroButton = styled.button`
  background-color: #f39c12;
  border: none;
  padding: 10px 20px;
  color: #fff;
  cursor:pointer;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #e67e22;
  }
`;
const Section = styled.div`
  padding: 1rem;
  margin: 2rem 0;
`;
const SectionButton = styled.button`
  background-color: #f39c12;
  border: none;
  padding: 10px 20px;
  color: #fff;
  cursor:pointer;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #e67e22;
  }
`;  