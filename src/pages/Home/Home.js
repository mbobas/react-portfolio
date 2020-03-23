import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  bacgroudnd-color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  height: 700px;
  background-color: #333;
`;

const HeaderText = styled.h1`
  
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  text-align: center;
  color: #fff;
`;

const ProjectWrapper = styled.div`
`;
const ProjectHeader = styled.p`
  align-self: center;
  font-size: 40px;
  color: #333;
`;

class Home extends Component {
  render() {
    return (
        <Wrapper>
          <Header>
            <HeaderText>Home</HeaderText>
          </Header>
          <ProjectHeader>Projects</ProjectHeader>
          <ProjectWrapper>
              <ProjectBox
                projectname="Nextflix"
                projecttext="test"
              />
          </ProjectWrapper>
          
        </Wrapper>
    );
  }
}

export default Home;