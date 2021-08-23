import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #99e9e9;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  :hover{
    transform: scale(1.05);
  }
`