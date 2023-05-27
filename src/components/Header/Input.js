import React, { useState } from "react";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Input = ({ isInputOpen, SetisInputOpen }) => {
  return (
    <div>
      <HeadMainBtn onClick={() => SetisInputOpen(!isInputOpen)}>
        HangHae99 검색
        <div styled={{ backGroundColor: "transparent" }}>
          <FaFilter className="filter" style={{ color: "white", cursor: "pointer" }} />
          <FaSearch styled={{ color: "white" }} />
        </div>
      </HeadMainBtn>
    </div>
  );
};

const HeadMainBtn = styled.div`
  margin-bottom: 10px;
  color: white;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 100px;
  width: 720px;
  height: 35px;
  border: none;
  background-color: #5d3d5e;
  border-radius: 7px;
  :hover {
    cursor: pointer;
    background-color: #6e4d6f;
  }
  .filter {
    width: 30px;
    :hover {
      background-color: #6e4d6f;
    }
  }
`;

export default Input;
