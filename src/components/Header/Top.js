import React from "react";
import Input from "./Input";
import styled from "styled-components";

function Top() {
  return (
    <div className="top_area">
      <div className="menus">
        <ul>
          <div>
            <Input />
          </div>
          <StDiv style={{ color: "white" }}>
            <StLoginButton>로그인</StLoginButton>
          </StDiv>
          <div style={{ color: "white" }}>회원가입</div>
        </ul>
      </div>
    </div>
  );
}

export default Top;

const StLoginButton = styled.button`
  /* 공통 스타일 */
  display: flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #e67e22;
  &:hover {
    background: #f39c12;
  }
  &:active {
    background: #d35400;
  }

  /* 기타 */
  & + & {
    // &와 &가 같이 있을 경우, 오른쪽 클래스에 특정 스타일을 적용한다
    margin-left: 1rem;
  }
`;

const StDiv = styled.div`
  justify-content: center;
  align-items: center;
`;
