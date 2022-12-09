import React from 'react';
import { Link } from 'react-router-dom';
import {
  SchoolButton, Div, LinkStyle, Img, Span,
} from './header.styles';
import images from '../../assets/images/schoolIcon.png';

export default function Header() {
  return (
    <Div>
      <SchoolButton>
        <Link style={LinkStyle} to="/schoolPage">
          <Img src={images} alt="schoolIcon" />
        </Link>
        <Span>schools</Span>
      </SchoolButton>
      <Link to="/schools/:id/" />
    </Div>
  );
}
