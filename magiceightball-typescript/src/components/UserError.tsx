import React from "react";
import { StyledUserError } from "./styles/UserError.styled";
const UserError = () => (
  <StyledUserError>
    You didn't ask a question. You have to use "?" (question mark) in the input.
  </StyledUserError>
);

export default UserError;
