import React from 'react';
import { Link } from 'react-router-dom';
import {
  SchoolButton,
  Div,
  LinkStyle,
  Img,
  Span,
  Container,
} from './header.styles';
import images from '../../assets/images/schoolIcon.png';

export default function Header() {
  return (
    <Div>
      <Link style={LinkStyle} to="/schoolPage">
        <SchoolButton>
          <Img src={images} alt="schoolIcon" />
          <Container>
            <Span>schools</Span>
          </Container>
        </SchoolButton>
      </Link>
      <Link to="/schools/:id/" />
    </Div>
  );
}
