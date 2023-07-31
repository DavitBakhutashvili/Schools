import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: #c961db;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: flex-start;
  height: 72px;
  grid-row: 1;
  position: fixed;
  width: 100%;
  top: 10px;
  border-radius: 50px;
  z-index: 102030;
`;

export const HeaderButtonStyle = styled(Link)`
  display: inline-block;
  position: absolute;
  background: transparent;
  height: 60px;
  width: fit-content;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  margin-left: 20px;
`;
export const Span = styled.span`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  transition: all 0.3s ease-out;
  background-color: transparent;
  color: #faf3fb;
  cursor: pointer;
`;
