import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  min-width: 90vw;
  min-height: 80vh;
  flex-direction: column;
  border: 2px solid #f0f0f0;
  background-color: #f0f0f0;
  margin: 50px 20px 20px 20px;
  border-radius: 10px;
  overflow: hidden;
`;

export const H1 = styled.h1`
  background-color: transparent;
  margin-left: 20px;
  margin-top: 20px;
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: normal;
`;

export const Button = styled.button`
  display: flex;
  background: #4caf4f;
  align-items: center;
  justify-content: center;
  text-align: center;
  float: right;
  margin-top: 20px;
  margin-right: 45px;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: black;
  width: 160px;
  height: 50px;
  border-radius: 50px;
  border: none;
`;

export const Img = styled.img`
  background: transparent;
  width: 30px;
  height: 30px;
  float: left;
`;

export const Span = styled.span`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  width: 100%;
  background: transparent;
  color: #ffffff;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 500px;
  height: 40px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: #ffffff;
  border: 1px solid #ced4d9;
  border-radius: 5px;
`;

export const Form = styled.form`
  min-width: 90vw;
  min-height: 40rem;
  background: transparent;
  margin-top: 10px;
  margin-left: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  width: 97.5%;
  height: auto;
  float: left;
  margin-top: 10px;
  margin-left: 0px;
  text-decoration: none;
  background: red;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
`;

export const Tr = styled.tr`
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
`;

export const Th = styled.th`
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px;
`;

export const TH = styled.th`
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  background: #c961db;
  color: white;
  text-decoration: none;
  margin-top: 10px;
`;

export const Tbody = styled.tbody`
  background: transparent;
`;
