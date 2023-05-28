import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ProfileContent from "./ProfileContent";
// import MyState from "./MyState";

const Right = ({ isOpen, SetisOpen, profile, setProfile }) => {
  return (
    <div>
      <ProfileBox onClick={() => SetisOpen(!isOpen)}>
        <img src="https://ifh.cc/g/YOrnMQ.jpg" />
      </ProfileBox>{" "}
      {isOpen && <ProfileContent profile={profile} setProfile={setProfile} isOpen={isOpen} SetisOpen={SetisOpen} />}
    </div>
  );
};

const ProfileBox = styled.div`
  background-color: #5d3d5e;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-top: 15px;
  position: absolute;
  right: 150px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  :hover {
    cursor: pointer;
    background-color: #6e4d6f;
  }
`;

export default Right;
