import React from "react";
import styled from "styled-components";


const StarwarTitle = styled.h1`
  color: gray;
`;
  const StarwarSubtitle = styled.h2`
  color: black;
  font-size: 40px;
`;

const StarwarPara = styled.p`
  color: orange;
  font-size: 20px;
`;

const CharContainer = styled.li`
  border: 1px solid grey;
`;




const StarwarCard = props => {
    return (
        <CharContainer key={props.id}>
        <StarwarSubtitle>Name: {props.name}</StarwarSubtitle>
        <StarwarPara>Birthyear: {props.birth_year}</StarwarPara>
        <StarwarPara>Eyecolor: {props.eye_color} </StarwarPara>
      </CharContainer>
    );
  };
  export default StarwarCard;