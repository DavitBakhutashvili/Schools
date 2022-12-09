import styled from 'styled-components';

export const tableStyles = {
    width: '93%',
    height: 'auto',
    background: 'transparent',
}
export const theadStyles = {
    display: 'static',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #212529 ',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    color: '#212529',
}
export const tbodyStyles = {
    position: 'static',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    color: '#212529',
    border: '1px solid #e5e5e5',
    // width: '91.9%',

}
export const Input = styled.input`
    width: 300px; 
    height: 38px;
    padding: 7px 13px 7px 13px;
    border: 2px solid #CED4DA;
    borderRadius: 10px;
    fontFamily: Roboto;
    fontStyle: normal;
    color: #495057;
    fontSize: 14px;
    margin: 10px;
`
export const FormStyle = {
    width: '100%',
    height: '100%',
    background: 'transparent',
    color: 'green',
    border: '5px solid lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}
export const labelStyle = {
    width: '207px',
    height: '24px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#233142',
    flex: 'none',
    flexGrow: 0,
    order: 0,
    justifyContent: 'center',
    
}
export const InputStyle = {
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7px 13px',
    width: 'auto',
    height: '38px',
    border: 'none',
    background: 'transparent',
}

export const Button = styled.button`
background: #55BCC9;
align-items: center;
justify-content: center;
text-align: center;
margin-left: 15px;
margin-top: 20px;
border-color: #3FEEE6;
border-radius: 10px;
cursor: pointer;
font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 16px;
color: black;
width: 100px;
height: 30px;
`
