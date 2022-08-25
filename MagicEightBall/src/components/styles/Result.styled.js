import styled from "styled-components";

export const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.5);
    color: #277bc0;
    padding: 1rem;
    border-radius: 1rem;
    text-align: center;
  }
  p {
    margin: 0.5rem 0;
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    color: green;
    border-radius: 1rem;
    font-weight: bold;
    text-align: center;
  }
  div.imgContainer {
    margin-top: 0.2rem;
    width: 300px;
    height: 300px;
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);
    border-radius: 2rem;
  }

  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
