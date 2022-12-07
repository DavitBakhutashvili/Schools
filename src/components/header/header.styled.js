import styled from 'styled-components'

export const Div =  styled.div`
  background-color: #00283c;
  width: 100%;
  height: 90px;
`

export const LinkStyle = {
  backgroundColor: 'transparent',
}

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
  }
  :nth-child(1) span {
    color: #4267b2;
  }
`

export const Img = styled.img`
font-size: 25px;
line-height: 60px;
transition: all 0.3s ease-out;
`

export const Span = styled.span`
font-size: 20px;
font-weight: 500;
line-height: 60px;
margin-left: 10px;
transition: all 0.3s ease-out;
`