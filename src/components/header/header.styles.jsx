import styled from 'styled-components';

export const Div = styled.div`
  background-color: #00283c;
  // background-color: transparent;
  width: 100%;
  height: 100px;
`;

export const LinkStyle = {
  backgroundColor: 'transparent',
  display: 'inline-block',
  height: '80px',
  width: '300px',
  textAlign: 'center',
  borderRadius: '50px',
  boxSizing: 'border-box',
  // lineHeight: '60px',
  transition: 'all 0.3s ease-out',
  marginTop: '10px',
};

export const SchoolButton = styled.button`
  display: inline-block;
  height: 75px;
  width: 75px;
  float: left;
  margin-top: 2px;
  margin-left: 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    width: 230px;
    height: 75px;
  }
  :nth-child(1) span {
    color: #19b3ff;
  }
`;

export const Img = styled.img`
  font-size: 25px;
  line-height: 60px;
  transition: all 0.3s ease-out;
`;

export const Container = styled.div`
  background: transparent;
  margin-top: -55px;
  margin-left: 135px;
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
  color: #00283c;
`;
