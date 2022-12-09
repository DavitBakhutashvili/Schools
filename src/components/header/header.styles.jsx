import styled from 'styled-components';

export const Div = styled.div`
background-color: #00283c;
width: 100%;
height: 100px;
`;
export const LinkStyle = {
  backgroundColor: 'transparent',
  display: 'inline-block',
  height: '60px',
  width: '60px',
  textAlign: 'center',
  borderRadius: '50px',
  boxSizing: 'border-box',
  lineHeight: '60px',
  transition: 'all 0.3s ease-out',
};

export const SchoolButton = styled.button`
  display: inline-block;
  height: 70px;
  width: 70px;
  float: left;
  margin: 0 15px;
  margin-top: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover  {
    width: 200px;
    height: 70px;
  }
  :nth-child(1) span{
    color: #4267b2;
  } 
`;

export const Img = styled.img`
font-size: 25px;
line-height: 60px;
transition: all 0.3s ease-out;
`;

export const Span = styled.span`
text-align: center;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 500;
line-height: 60px;
float: center;
margin-left: 30px;
margin-bottom: -30px;
transition: all 0.3s ease-out;
`;
