import React, { useState } from "react";
import ModalUser from "../modal/modalUser";
import styled from "styled-components";

const SideDirect = ({ User, GetUsers }) => {
  const [isOpen, SetisOpen] = useState(false);
  const close = () => {
    SetisOpen(false);
  };

  console.log(User);

  const onClickHandler = aa => {
    localStorage.setItem("channel", aa);
    window.location.reload();
  };

  return (
    <div>
      <DirectCtn>
        <DirectBox>
          다이렉트 메시지
          <DirectHeader>
            <DirectTxt onClick={() => SetisOpen(!isOpen)}>버튼</DirectTxt>
          </DirectHeader>
        </DirectBox>

        {User?.map(item => (
          <DirectDiv onClick={() => onClickHandler(item.profileName)}>
            <DirectImg src="https://ifh.cc/g/YOrnMQ.jpg"></DirectImg>
            <div key={item.id}>{item.profileName}</div>
          </DirectDiv>
        ))}
      </DirectCtn>
      <ModalUser isOpen={isOpen} close={close} User={User} />
    </div>
  );
};

const DirectCtn = styled.div`
  color: #b8a6b9;
  font-size: 12px;
  padding: 10px 0px 10px 0px;
  font-weight: 500;
  font-size: 20px;
  min-height: 60px;
  max-height: 500px;
  border-bottom: 1px solid #5d3d5e;
  border-top: 1px solid #5d3d5e;
  font-weight: 700;
`;

const DirectBox = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  flex-direction: row;
  padding: 4px 4px 4px 20px;
  color: #b8a6b9;
  font-weight: 700;
  :hover {
    background-color: #350d36;
    cursor: pointer;
  }
  :active {
    color: white;
    background-color: #1164a3;
  }
`;

const DirectHeader = styled.div`
  padding-right: 16px;
`;

const DirectImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

const DirectDiv = styled.div`
  gap: 15px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  :hover {
    background-color: #350d36;
    cursor: pointer;
    color: white;
  }
`;

const DirectTxt = styled.div`
  cursor: pointer;
  :hover {
    color: white;
  }
`;
export default SideDirect;
