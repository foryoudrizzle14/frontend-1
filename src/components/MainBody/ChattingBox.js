import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiSendPlane2Fill } from "react-icons/ri";
import axios from "axios";
import { io } from "socket.io-client";

const ChattingBox = ({ setChatArr, chatArr }) => {
  const socket = io ("http://43.200.178.84", {
    transports: ["websocket"],
  });

  const [Message, setMessage] = useState("");

  const handleMessageSubmit = async () => {
    try {
      // Make an API call to send the message
      const response = await axios.post("/api/send-message", {
        message: Message,
        room: localStorage.getItem("channel"),
        email: localStorage.getItem("nic"),
        data: Date.now(),
      });

      // Update the chatArr state with the new message
      setChatArr([...chatArr, response.data.socket]);

      // Clear the message input
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = e => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    // Fetch initial chat messages
    const fetchChats = async () => {
      try {
        const response = await axios.get("/api/chats");
        setChatArr(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChats();
  }, []);

  return (
    <InputCtn>
      <InputTopBox></InputTopBox>
      <InputMidBox value={Message} 
      onChange={handleInputChange} 
      placeholder="메시지 보내기" />
      <InputBottomBox>
        <SendIcon onClick={handleMessageSubmit}>
          <RiSendPlane2Fill />
        </SendIcon>
      </InputBottomBox>
    </InputCtn>
  );
};

export default ChattingBox;

const InputCtn = styled.div`
  position: fixed;
  bottom: 0;
  left: 20%;
  width: 75%;
  background-color: #f8f8f8;
  padding: 30px;
  box-sizing: border-box;
`;

const InputTopBox = styled.div`
  height: 40px;
  background-color: #f8f8f8;
  padding: 5px 15px;
  align-items: center;
  display: flex;
`;

const InputMidBox = styled.input`
  font-size: 18px;
  width: 100%;
  height: 40px;
  padding: 10px;
  border: none;
  :focus {
    outline: none;
  }
`;

const InputBottomBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SendIcon = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;


