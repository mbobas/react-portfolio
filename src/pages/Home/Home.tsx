import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox';
import autor from '../../assets/autor.png';
import singlescreen from '../../assets/singlescreen.png';
import myAvatarPNGSMALL from '../../assets/myAvatarPNGSMALL.png';
import myAvatarPNG300 from '../../assets/myAvatarPNG300.png';
import Background from '../../assets/background.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;

  `;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background-color: #FFF;
`;
//background-image: url(${Background});
  ///background-color: #333;
const HeaderText = styled.div`
  margin-top: 15vh;
  width: 99%;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #141c3a;
  @media only screen and (max-width: 400px) {
    margin-top: 5vh;
    font-size: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const SubHeaderText = styled.div`
  width: 99%;
  font-family: 'Exo';
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #141c3a;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 25px;
  }
`;


// /text-align: center;
const HeaderImage = styled.img`
  margin-top: 15vh;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-image: url(${myAvatarPNG300});
  box-shadow: 5px 5px 15px 5px #00000071;
  align-self: center;
  @media only screen and (max-width: 400px) {
    margin-top: 7vh;
  }
  @media only screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
    background-image: url(${myAvatarPNGSMALL});
  }
`;

const ProjectWrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  border
`;

const ProjectHeader = styled.p`
  align-self: center;
  font-size: 40px;
  color: #333;
`;




const name = '<CV> Michal Gulczynski </CV>';
const title = 'React Native and React, Mobile & Front-end Developer ';
const subtitle = 'I like creates dreams true, and I love this work.'
const 
class Home extends Component {
  render() {
    return (
        <Wrapper>
          <Header>
            <HeaderText> {title} </HeaderText>
            <SubHeaderText> {subtitle} </SubHeaderText>
            <HeaderImage></HeaderImage>
          </Header>
          <ProjectHeader>About</ProjectHeader>
          <AboutWrapper>
            <ProjectBox
            projectname="Nextflix"
            projecttext="test"
            image={singlescreen}
            />
          </AboutWrapper>
          <ProjectHeader>Projects</ProjectHeader>
          <ProjectWrapper>
              <ProjectBox
                projectname="Nextflix"
                projecttext="test"
                image={singlescreen}
              />
              <ProjectBox
                projectname="Nextflix"
                projecttext="test"
                image={singlescreen}
              />
              <ProjectBox
                projectname="Nextflix"
                projecttext="test"
                image={singlescreen}
              />
          </ProjectWrapper>
          
        </Wrapper>
    );
  }
}

export default Home;