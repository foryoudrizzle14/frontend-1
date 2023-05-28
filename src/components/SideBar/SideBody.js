import React from "react";
import styled from "styled-components";
import SideChannel from "./SideChannel";
import SideDirect from "./SideDirect";
import SideFeat from "./SideFeat";

const SideBody = ({ PostChannel, SetChannels, Channels, User, Channel, SetChannel }) => {
  return (
    <>
      <SideFeat />
      <SideChannel
        SetChannels={SetChannels}
        Channels={Channels}
        PostChannel={PostChannel}
        Channel={Channel}
        SetChannel={SetChannel}
      />
      <SideDirect User={User} />
    </>
  );
};

export default SideBody;
