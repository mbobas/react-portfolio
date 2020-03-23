import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  margin: 10px;
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
  border-radius: 10px;
`;

interface ProjectBoxProps {
  projectname: string,
  projecttext: string,
}

class ProjectBox extends React.Component<ProjectBoxProps> {
  render() {
    return (
          <Wrapper>
              <Header>{this.props.projectname}</Header>
              <Box>{this.props.projecttext}</Box>
          </Wrapper>
    );
  }
}

export default ProjectBox;