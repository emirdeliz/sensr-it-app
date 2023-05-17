import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 80px;
  background-color: #f2f2f2;
`;

export const Content = styled.div<{ close: boolean }>`
  text-align: center;
  padding: 15px;
  margin-left: ${({ close }) => close ? 15 : 215}px;
  flex: 1;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LayoutContent = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;
