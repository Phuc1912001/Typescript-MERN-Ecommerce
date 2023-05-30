import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  background-color: rgb(26, 148, 255);
  padding: 10px 10%;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccout = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;

export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;
