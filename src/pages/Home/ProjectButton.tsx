import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Image2 = styled.img`
  height: 100%; 
  width: 100%; 
  border-radius: 10px;
  box-shadow: 9px 10px 21px 2px #00000041;
  :hover {
    opacity: 0.6;
  }
`;

const ButtonBox = styled.button`
  margin-bottom: 20px; 
  height: 250px;
  width:  300px ;
  background-color: transparent;
  border-color: transparent;
  border-radius: 10px;
  outline: none;
`;


interface ProjectBox2Props {
  projectname: string,
  projecttext: string,
  image: any;
}

class ProjectButton extends React.Component<ProjectBox2Props> {
  shoot() {
    alert("Great Shot!!");
  }

  render() {
    return (
          <Wrapper>
              <ButtonBox title="Button" onClick={this.shoot}>
                  <Image2 
                      src={this.props.image}/>
              </ButtonBox>
          </Wrapper>
    );
  }
}

const boximage = {
    width: 100,
    height: 100,
  };

export default ProjectButton;