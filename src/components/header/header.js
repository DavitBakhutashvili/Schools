import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolButton,HeaderStyles,Div,
         LinkStyle,Img,Span} from './header.styled';
import images from '../../assets/images/schoolIcon.png';



export default function Header(){
    return(
        <Div>
            
            <Link style={LinkStyle} to="/schoolPage">
                <SchoolButton >
                    <Img src={images} alt="schoolIcon" />
                    {/* <Span>schools</Span> */}
                </SchoolButton>
            </Link>

            <Link to="/schools/:id/"/>
 
        </Div>
    )
}