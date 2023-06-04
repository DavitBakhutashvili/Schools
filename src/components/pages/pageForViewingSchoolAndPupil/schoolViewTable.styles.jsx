import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  border: 2px solid #f0f0f0;
  background-color: #f0f0f0;
  border-radius: 10px;

  .container-1 {
    margin-left: 50px;
  }

  .name {
    display: flex;
  }
  .address {
    display: flex;
  }
  .phone {
    display: flex;
  }
  .contactPerson {
    display: flex;
    margin-left: -50px;
  }
  .classAmount {
    display: flex;
    margin-top: 95px;
    margin-left: -515px;
  }

  .container-2 {
    display: flex;
    // background: green;
    margin-left: 700px;
    margin-top: -282px;
    height: auto;
  }
  .country {
    display: flex;
    // background: blue;
    margin-top: 188px;
    margin-left: -515px;
  }
  .city {
    display: flex;
    margin-top: -2px;
    margin-left: 90px;
  }
  .id {
    display: flex;
    margin-top: 95px;
    margin-left: -515px;
  }

  .btn {
    background: transparent;
    display: flex;
    width: 200px;
    height: 90px;
    margin-top: 385px;
    margin-left: -1910px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px;
  width: 98.5vw;
  height: 340px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 10px 10px;
  border-radius: 10px;
`;

export const H1 = styled.h1`
  font-size: 16px;
  margin: 0 60px;
  font-weight: bold;
`;

export const Label = styled.label`
  width: 100px;
  height: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  flex: none;
  flex-grow: 0;
  order: 0;
  margin: 25px 10px;
  background: transparent;
`;

export const Input = styled.input`
  background-color: #e4e4e6;
  margin-top: 60px;
  margin-left: -110px;
  width: 500px;
  height: 30px;
  border: 1px solid #ced4d9;
  border-radius: 5px;
  color: #495056;
`;

export const Button = styled.button`
  display: flex;
  background: #4caf4f;
  align-items: center;
  justify-content: center;
  text-align: center;
  float: right;
  margin-left: 10px;
  margin-top: 20px;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: black;
  width: 160px;
  height: 50px;
  border: none;
  // border-radius: 10px;
`;

export const Img = styled.img`
  background: transparent;
  width: 30px;
  height: 30px;
  float: left;
`;

export const Span = styled.span`
  align-items: center;
  padding: 10px;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  width: 100%;
  background: transparent;
  color: #ffffff;
`;

export const Table = styled.table`
  display: flex;
  width: 99%;
  height: 50px;
  border-radius: 10px;
  text-decoration: none;
  border-collapse: collapse;
  background: transparent;
  margin-top: 470px;
  margin-left: -1900px;
`;
export const Thead = styled.thead`
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  width: 100%;
`;
export const TR = styled.tr`
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Th = styled.th`
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  background: #004b70;
  color: white;
  text-decoration: none;
  margin-top: 10px;
  width: 240px;
  height: 50px;
`;

export const Tbody = styled.tbody`
  font-style: normal;
  font-weight: normal;
  width: 100%;
  margin-top: 55px;
  margin-left: -1895px;
`;

export const Tr = styled.tr`
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  width: 100%;
  :nth-child(even) {
    background-color: #dee2e6;
  }
`;

export const TH = styled.th`
  font-size: 14px;
  font-weight: normal;
  font-family: Roboto;
  justify-content: center;
  align-items: center;
  background: 00283c;
  color: #505050;
  text-decoration: none;
  margin-top: 10px;
  width: 329px;
  height: 50px;
`;

export const DelButton = styled.button`
  width: 50px;
  border: 1px solid black;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: black;
  // :hover {
  //   background-color: red;
  //   color: white;
  // }
`;

export const EditButton = styled.button`
  width: 50px;
  margin-left: 2px;
  border: 1px solid black;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: black;
  // :hover {
  //   background-color: #ced4d9;
  //   color: #000000;
  // }
`;
