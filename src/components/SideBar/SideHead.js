import React, { useState } from "react";
import styled from "styled-components";
import HeaderContent from "./HeaderContent";
import { HiOutlinePencilSquare } from "react-icons/hi2";
const SideHead = () => {
  const [isOpen, SetisOpen] = useState(false);
  return (
    <div>
      <Header onClick={() => SetisOpen(!isOpen)}>
        HangHae99
        <PostBtn>
          <HiOutlinePencilSquare style={{ color: "#350d36" }} />
        </PostBtn>
      </Header>
      {isOpen && <HeaderContent />}
    </div>
  );
};

const Header = styled.div`
  position: relative;
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
  height: 40px;
  border-bottom: 1px solid #5d3d5e;
  border-top: 1px solid #5d3d5e;
  :hover {
    background-color: #350d36;
    cursor: pointer;
  }
`;

const PostBtn = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 20px;
  border-radius: 30px;
  width: 30px;
  height: 30px;

  :hover {
    background-color: #5d3d5e;
  }
`;

export default SideHead;
