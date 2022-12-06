import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolButton,HeaderStyles} from './header.styled';



export default function Header(){
    return(
        <div style={HeaderStyles}>
            
            <nav>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <Link to="/schoolPage">
                        <SchoolButton >
                            Schools
                        </SchoolButton>
                        </Link>
                    </li>
                </ul>
            </nav>

            <nav>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <Link to="/schools/:id/"/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}