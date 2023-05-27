import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "../modal/modal";
import ChannelBox from "./ChannelBox";

const SideChannel = ({ Channels, PostChannel, SetChannels, Channel, SetChannel }) => {
  const [isOpen, SetisOpen] = useState();
  console.log(Channels);
  return (
    <div>
      <ChannelCtn>
        <ChannelHeader>
          채널
          <ChannelTxt style={{ cursor: "pointer" }} 
          onClick={() => SetisOpen(!isOpen)}>
            버튼
          </ChannelTxt>
        </ChannelHeader>
        {Channels?.map(channel => {
          return <ChannelBox 
          Channel={Channel} 
          SetChannel={SetChannel} 
          SetChannels={SetChannels} 
          channel={channel} />;
        })}
      </ChannelCtn>
      <Modal
        SetChannels={SetChannels}
        Channels={Channels}
        PostChannel={PostChannel}
        isOpen={isOpen}
        SetisOpen={SetisOpen}
      />
    </div>
  );
};

const ChannelCtn = styled.div`
  color: #b8a6b9;
  padding: 10px 0px 10px 0px;
  min-height: 60px;
  max-height: 300px;
  border-bottom: 1px solid #5d3d5e;
  border-top: 1px solid #5d3d5e;
  font-weight: 700;
`;

const ChannelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 4px 20px 4px 20px;
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
const ChannelTxt = styled.div`
  cursor: pointer;
  :hover {
    color: white;
  }
`;

export default SideChannel;
