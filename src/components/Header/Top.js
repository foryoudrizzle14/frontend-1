import React from "react";
import Input from "./Input";
import styled from "styled-components";
import { Link } from "react-router-dom";



function Top() {
  return (
    <div className="top_area">
      <div className="menus">
        <ul>
          <li>
            <Input />
          </li>
          <li>
            <StDiv>
              <StLoginButton>
                <Link to="/Login">Login</Link>
              </StLoginButton>
            </StDiv>
          </li>
          <li>
            <StDiv>
              <StSignupButton>
                <Link to="/Signup">Sign up</Link>
              </StSignupButton>
            </StDiv>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Top;

const StLoginButton = styled.button`
  /* common style */
  display: flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;

  /* size */
  height: 2.25rem;
  font-size: 1rem;

  /* color */
  background: #e67e22;
  &:hover {
    background: #f39c12;
  }
  &:active {
    background: #d35400;
  }

  /* etc */
  & + & {
    margin-left: 1rem;
  }
`;

const StDiv = styled.div`
  justify-content: center;
  align-items: center;
`;

const StSignupButton = styled.button`
  /* common style */
  display: flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;

  /* size */
  height: 2.25rem;
  font-size: 1rem;

  /* color */
  background: whitesmoke;
  &:hover {
    background: #f39c12;
  }
  &:active {
    background: #d35400;
  }

  /* etc */
  & + & {
    margin-left: 1rem;
  }
`;