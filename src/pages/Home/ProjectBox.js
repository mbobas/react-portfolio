import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
`;
const Header = styled.p`
  align-self: center;
  font-size: 30px;
  color: #333;
`;

const Box = styled.div`
  height: 300px;
  width: 300px;
  background-color: #2A629F;
  box-shadow: 9px 10px 21px 2px rgba(42,98,159,1);
`;



class ProjectBox extends Component {
  render() {
    return (
          <Wrapper>
              <Header>Projects</Header>
              <Box>BOX</Box>
          </Wrapper>
    );
  }
}

export default ProjectBox;