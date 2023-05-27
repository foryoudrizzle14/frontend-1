import React from "react";
import styled from "styled-components";
import { io } from "socket.io-client";

const ChannelBox = ({ SetChannels, channel, SetChannel, Channel }) => {
  const socket = io("http://43.200.178.84", {
    transports: ["websocket"],
  });
  console.log(channel);
  const onClickHandler = () => {
    SetChannel(channel.room);
    socket.emit("new_room", channel.room);
    localStorage.setItem("channel", channel.room);
    window.location.reload();
  };
  return <ChannelTxt onClick={() => onClickHandler()}>{channel.room}</ChannelTxt>;
};

const ChannelTxt = styled.div`
  padding: 4px 20px 4px 20px;
  :hover {
    background-color: #350d36;
    cursor: pointer;
    color: white;
  }
`;

export default ChannelBox;
