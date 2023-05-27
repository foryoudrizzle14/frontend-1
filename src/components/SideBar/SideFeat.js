import React from "react";
import styled from "styled-components";

const SideFeat = () => {
  return (
    <div>
      <BookCtn>
        <FeatBox>Bookmark</FeatBox>
      </BookCtn>
    </div>
  );
};

const BookCtn = styled.div`
  padding: 10px 0px 10px 0px;
  min-height: 60px;
  max-height: 300px;

  border-bottom: 1px solid #5d3d5e;
  border-top: 1px solid #5d3d5e;
`;

const FeatBox = styled.div`
  font-weight: 700;
  font-size: 14px;
  padding: 4px 4px 4px 20px;
  color: #b8a6b9;
  :hover {
    background-color: #350d36;
    cursor: pointer;
    color: white;
  }
  :active {
    color: white;
    background-color: #1164a3;
  }
`;
export default SideFeat;
