import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;

  label {
    margin: 1rem 0;
  }
  input {
    margin: 1rem 0;
    width: 50%;
  }
  button {
    margin: 1rem 0;
    padding: 0.3rem;
    width: 20%;
    color: white;
    background-color: blueviolet;
    border: none;
  }
`;
