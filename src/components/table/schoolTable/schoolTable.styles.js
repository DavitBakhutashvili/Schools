import styled from 'styled-components';

export const Table = styled.table`
    width: 93%;
    height: 100%;
    border: 2px solid #56bcc9;
    background: transparent;
    margin-left: 40px; 
`
export const Thead = styled.thead`
    display: static;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #212529;
`
export const Tbody = styled.tbody`
    position: static;
    display: flex;
    flexDirection: column;
    alignItems: flex-start;
    justifyContent: center;
    fontFamily: Roboto;
    fontStyle: normal;
    fontWeight: 400;
    fontSize: 14px;
    color: #212529;
    border: 1px solid #e5e5e5;
`

export const ScenarioStyles = {
    position: 'static',
    width: '108px',
    height: '48px', 
    left: '0px', 
    top: '0px',
    display: 'flex', 
    alignItems: 'center',
    lineHeight: '150%',
    fontSize: '16px', 
    fontWeight: '700', 
    color: '#212529',
 }
 export const DescriptionStyles = {
    position: 'static', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '83px', 
    height: '48px',
    left: '0px', 
    top: '0px',
    display: 'flex', 
    lineHeight: '150%',
    fontSize: '16px', 
    fontWeight: '700', 
    order: '0',
    color: '#212529',
    margin: '0px -85px',
 }
 export const ElectrificationStyles = {
    position: 'static', 
    width: '105px',
    height: '48px', 
    left: '0px', 
    top: '0px',
    display: 'flex-start', 
    alignItems: 'center',
    lineHeight: '150%',
    flexGrow: 'none',
    fontSize: '16px', 
    fontWeight: '700', 
    color: '#212529'
 }
 export const EmissionStyles = {
    position: 'static', 
    width: '116px',
    height: '48px', 
    left: '0px', 
    top: '0px',
    display: 'flex-start', 
    alignItems: 'center',
    lineHeight: '150%',
    fontSize: '16px', 
    fontWeight: '700', 
    color: '#212529'
}
export const TcoStyles = {
    position: 'static', 
    width: '86px',
    height: '48px', 
    left: '0px', 
    top: '0px',
    display: 'flex-start', 
    alignItems: 'center',
    lineHeight: '150%',
    fontSize: '16px', 
    fontWeight: '700', 
    color: '#212529'
}
export const TransitionStyles = {
    position: 'static', 
    width: '104px',
    height: '48px', 
    left: '0px', 
    top: '0px',
    display: 'flex-start', 
    alignItems: 'center',
    lineHeight: '150%',
    fontSize: '16px', 
    fontWeight: '700', 
    color: '#212529'
}
export const ScenarioNameStyles = {
    position: 'static',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '142px',
    height: '24px',
    left:' 8px',
    top: '8px',
    padding: '0px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#212529',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: '0px 0px',
}
export const DescriptionNameStyles = {
    position: 'static',
    width: '234px',
    height: '24px',
    left:' 0px',
    top: '0px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#212529',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: '0px -25px', 
}
export const ElectrificationNameStyles = {
    position: 'static',
    width: '142px',
    height: '24px',
    left:' 0px',
    top: '0px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#212529',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: '0px 20px',
}
export const EmissionNameStyles = {
    position: 'static',
    width: '142px',
    height: '24px',
    left:' 0px',
    top: '0px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#212529',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: '0px 70px',
    

}
export const TcoNameStyles = {
    position: 'static',
    width: '142px',
    height: '24px',
    left:' 0px',
    top: '0px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#212529',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: '0px 0px',
}
export const TransitionNameStyles = {
    position: 'static',
    width: '142px',
    height: '24px',
    left:' 0px',
    top: '0px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#212529',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    marginRight: ' -40px',
}
export const InputStyles = {
    border: 'none',
    background: 'transparent',
}
export const Input = styled.input`
    width: 300px; 
    height: 38px;
    padding: 7px 13px 7px 13px;
    border: 2px solid #55BCC9;
    border-radius: 30px;
    font-family: Roboto;
    font-style: normal;
    color: #495057;
    font-size: 14px;
    margin: 10px;
    background-color: transparent;
`
export const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    width: '150px',
    border: '2px solid #e5e5e5',
    marginTop: '170px'
}
export const Tr = styled.tr`
    
    :nth-child(even) {
        backgroundColor: red;
    }

`
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

export const EditButton = styled.button`
    background: transparent;
    align-items: center;
    justify-content: center;
    text-align: left;
    border: none;
    cursor: pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #212529;
    width: 100%;
    height: 30px;
    margin-right: 0px;
    &:hover {
        background-color: #e5e5e5;
    }
    &:active {
        color: white;
        background-color: #19B3FF;
    }


`
export const DuplicateBtn = styled.button`
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #212529;
    width: 100%;
    height: 30px;
    &:hover {
        background-color: #e5e5e5;
    }
    &:active {
        color: white;
        background-color: #19B3FF;
    }
`
export const  Hr = styled.hr`
    position: static;
    border: 1px solid #dee2e6;
    width: 100%;
    `
export const DeleteBtn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: red;
    width: 100%;
    height: 30px;
    &:hover {
        background-color: #e5e5e5;
    }
    &:active {
        color: white;
        background-color: #19B3FF;
    }

`

export const UlStyles = {
    position: 'absolute',
    // top: anchorPoint.y,
    // left: anchorPoint.x,
    listStyle: 'none',
    padding: '0px',
    border: '1px solid #e9ecef',
    borderRadius: '5px',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '120px',
    margin: '5px -107px',
}
export const LiStyles = {
    position: 'static',
    width: '100%',
    height: '30px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '150%',
    color: '#212529',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: '0px 0px',
}
