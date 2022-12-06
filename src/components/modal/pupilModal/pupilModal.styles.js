import styled from 'styled-components';

//ModalStyle
export const ModalStyle = {
content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '600px',
    height: '763px',
    background: '#e3e3e3',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    flex: 'none',
    order: '0px',
    flexGrow: '0px',
    left: '600px',
    top: '10px',
 } 
}
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
    margin: '10px 10px' 
}
//close-button style
export const CloseButton = styled.button`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    padding: 0px;
    position: absolute;
    width: 32px;
    height: 32px;
    top: 15px;
    background: rgba(255, 255, 255, 1e-06);
    opacity: 0.5;
    right: 10px;
    border: none;
    `
    //close icon style
export const CloseIcon = {
    position: 'absolute',
    left: '0%',
    right: '-0.08%',
    top: '-0.08%',
    bottom: '0.08%',
    cursor: 'pointer',
}
//hr style
export const hrStyle = {
    width: '105%',
    position: 'static',
    height: '0px',
    left: 'calc(50% - 600px/2)',
    top: 'calc(50% - 0px/2)',
    border: '1px solid #233142',
    flex:' none',
    order:' 0',
    alignSelf: 'stretch',
    flexGrow: '0',
    margin:' 0px 0px',
}
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
}
export const labelStyle = {
    width: '207px',
    height: '24px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#233142',
    flex: 'none',
    flexGrow: 0,
    order: 0,
    margin: '5px 0px',
}
export const spanStyle = {
    color: '#f95959',
}
export const ErrorStyle = {
    justifyContent: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    fontSize: '14px',
    color: '#f95959',
    margin: '5px 200px'
}
export const FieldStyle = {
    background: '#f4f4f4',
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '7px 13px',
    width: '550px',
    height: '38px',
    border: '1px solid #233142',
    borderRadius: '10px'
}

export const customStyles = {
    control: (base, state) => ({
      ...base,
      border: '1px solid #233142',
      borderRadius: '10px',
      width: '550px',
      height: '15px',
    })
  };

  export const AddButton = styled.button`
   backgroundColor: #455d7a;
   width: 80px;
   height: 40px;
   color: #233142;
   border: 1px solid #233142;
   borderRadius: 10px;
  `

  export const CnlButton = styled.button`
    backgroundColor: #455d7a;
    width: 100px;
    height: 40px;
    color: #233142;
    fontFamily: 'Roboto';
    border: 1px solid #233142;
    borderRadius: 10px;
  `