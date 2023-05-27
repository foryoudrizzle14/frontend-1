import React, { useState } from "react";
import styled from "styled-components";
// import Right from "../Header/Right";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const PostBox = ({ chatArr }) => {
  const userinfo = useSelector(state => state.slack.userinfo);
  console.log(userinfo);

  //스크롤 처음에 아래에 위치하게하기
  const scrollRef = useRef();
  useEffect(() => {
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, []);

  return (
    <>
      <PostCtn ref={scrollRef}>
        {chatArr.map(chat => {
          if (chat.room == localStorage.getItem("channel"))
            return (
              <PostBoxDiv>
                <ProfileBox>
                  <ProfileImg src="https://ifh.cc/g/YOrnMQ.jpg" />
                  <ProfileNic>{chat.email} </ProfileNic>
                  <ProfileTime>{chat.updatedAt.slice(0, -5)}</ProfileTime>
                </ProfileBox>

                <TextBox>{chat.message}</TextBox>
              </PostBoxDiv>
            );
        })}
      </PostCtn>
    </>
  );
};

export default PostBox;

const PostCtn = styled.div`
  overflow-y: scroll;
  height: 844px;

  ::-webkit-scrollbar {
    width: 17px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #898989;
    //스크롤바에 마진준것처럼 보이게
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 15px;
  }
`;
const PostBoxDiv = styled.div`
  overflow-x: hidden;
  word-break: break-all;
  width: 100%;
  /* height: 250px; */
  border-bottom: 0.7px solid #dddddd;
`;

const ProfileImg = styled.img`
  background-color: #5d3d5e;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  right: 150px;
  :hover {
    cursor: pointer;
    background-color: #6e4d6f;
  }
`;

const TextBox = styled.div`
  padding-top: 10px;
  padding-left: 70px;
  padding-bottom: 20px;
  padding: 10px 40px 20px 70px;
`;
const ProfileNic = styled.div`
  margin-left: 15px;
  margin-top: 3px;
  font-size: 18px;
  font-weight: 700;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 35px 0 0 25px;
`;
const ProfileTime = styled.div`
  margin-top: 5px;
  margin-left: 10px;
`;
