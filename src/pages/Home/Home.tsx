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
  min-height: 100vh;
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
  @media only screen and (max-width: 700px) {
    height: 200px;
    width: 200px;
    background-image: url(${myAvatarPNGSMALL});
  }
`;
const WhoIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #7510F7;
  font-color: #FFF;
  align-items: center;
  `;

const WhoIHeaderText = styled.p`
  margin-top: 15vh;
  width: 99%;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 32px !important;;
  line-height: 1.125;
  word-break: break-word;
  text-align: center;
  color: #FFF;
  @media only screen and (max-width: 400px) {
    margin-top: 5vh;
    font-size: 22px;
    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    width: 95s%;
  }
`;

const WhoISubText = styled.p`
  width: 50%;
  font-family: 'Exo';
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #FFF;
  font-weight: 300;
  line-height: 1.5;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
    width:90%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    width:90%;
  }
`;

const KnowlageWrapper = styled.div`
  display: flex;
  height: 100vh;
  margin-left: 5vw;
  margin-right: 5vw;
  border: 1px solid #E6ECF8;
  margin-top: -18vh;
  background-color: #FFF;
  border-radius: 10px;
  flex: wrap;
`;

const KnowlageItemLeft = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid #E6ECF8;
  background-color: #FFF;
  border-radius: 10px 0px 0px 10px;
`;
const KnowlageItemCenter = styled.div`
  flex: 1;
  height: 100%;
  background-color: #FFF;
`;
const KnowlageItemRight = styled.div`
  flex: 1;
  height: 100%;
  border-left: 1px solid #E6ECF8;
  background-color: #FFF;
  border-radius: 0px 10px 10px 0px;
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
`;

const ProjectHeader = styled.p`
  align-self: center;
  font-size: 40px;
  color: #333;
`;

const name = '<CV> Michal Gulczynski </CV>';
const title = 'React Native and React, Mobile & Front-end Developer ';
const subtitle = 'I like creates dreams true, and I love this work.'
const whoititle ='Hi, I’m Michal. Nice to meet you.';
const whoisubtitle ='Since beginning my journey as a freelance designer nearly 8 years ago, I have done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I am quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.';

class Home extends Component {
  render() {
    return (
        <Wrapper>
          <Header>
            <HeaderText> {title} </HeaderText>
            <SubHeaderText> {subtitle} </SubHeaderText>
            <HeaderImage></HeaderImage>
          </Header>
          <WhoIWrapper>
            <WhoIHeaderText>{whoititle}</WhoIHeaderText>
            <WhoISubText>{whoisubtitle}</WhoISubText>
          </WhoIWrapper>
          <KnowlageWrapper>
              <KnowlageItemLeft></KnowlageItemLeft>
              <KnowlageItemCenter></KnowlageItemCenter>
              <KnowlageItemRight></KnowlageItemRight>
          </KnowlageWrapper>
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