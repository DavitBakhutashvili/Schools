import styled from 'styled-components';

//ModalStyle
export const ModalStyle = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '600px',
    height: '665px',
    background: 'white',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    flex: 'none',
    order: '0px',
    flexGrow: '0px',
    left: '600px',
    top: '100px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
};
//H1 style
export const h1Style = {
  width: '544px',
  height: '24px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  flexDirection: 'column',
  justifyContent: 'center',
  lineHeight: '120%',
  display: 'flex',
  alignItems: 'center',
  color: '#233142',
  flex: 'none',
  order: '0',
  alignSelf: 'stretch',
  flexGrow: '1',
  background: 'rgba(255, 255, 255, 1e-06)',
  margin: '10px 10px',
};
//close-button style
export const CloseButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 15px;
  background: rgba(255, 255, 255, 1e-6);
  opacity: 0.5;
  right: 10px;
  border: none;
`;
//close icon style
export const CloseIcon = {
  position: 'absolute',
  left: '0%',
  right: '-0.08%',
  top: '-0.08%',
  bottom: '0.08%',
  cursor: 'pointer',
};
//hr style
export const hrStyle = {
  width: '105%',
  position: 'static',
  height: '0px',
  left: 'calc(50% - 600px/2)',
  top: 'calc(50% - 0px/2)',
  border: '1px solid #f0f0f0',
  flex: ' none',
  order: ' 0',
  alignSelf: 'stretch',
  flexGrow: '0',
  margin: ' 0px 0px',
};
export const FormStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '16px 0px',
  width: '568px',
  height: '581px',
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0,
  margin: '0px 10px',
};

export const Container = styled.div`
  background: transparent;
  height: 100px;
  margin-top: 5px;
`;

export const Label = styled.label`
  width: 207px;
  height: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #233142;
  flex: none;
  flex-grow: 0
  order: 0
  margin: 5px 0px;
`;
export const spanStyle = {
  color: '#f95959',
};
export const ErrorStyle = {
  justifyContent: 'center',
  textAlign: 'center',
  fontStyle: 'normal',
  fontFamily: 'Roboto',
  fontSize: '14px',
  color: '#f95959',
  marginLeft: '-215px',
  marginTop: '2px',
  width: '100%',
};
export const FieldStyle = {
  background: ' #f0f0f0',
  boxSizing: 'border-box',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '7px 13px',
  width: '580px',
  height: '30px',
  border: '1px solid #f0f0f0',
  borderRadius: '10px',
};

export const customStyles = {
  control: (base, state) => ({
    ...base,
    border: '1px solid #233142',
    borderRadius: '10px',
    width: '550px',
    height: '15px',
  }),
};

export const ButtonContainer = styled.div`
  background: transparent;
  height: 60px;
  width: 250px;
  margin-top: 5px;
  float: left;
  margin-left: 310px;
  margin-top: -30px;
`;

export const AddButton = styled.button`
  background-color: #1c71e9;
  width: 100px;
  height: 40px;
  color: #ffffff;
  border: 1px solid #97caef;
  border-radius: 10px;
  margin-left: 45px;
  margin-top: 10px;
  :hover {
    background: #4cb543;
  }
`;

export const CnlButton = styled.button`
  background-color: transparent;
  width: 100px;
  height: 40px;
  color: gray;
  fontfamily: 'Roboto';
  border: 1px solid #97caef;
  border-radius: 10px;
  margin-left: 5px;
  :hover {
    background: red;
    color: #ffffff;
  }
`;
