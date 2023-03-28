import React from 'react'
import styled, { css } from 'styled-components';

const desktopStartWidth = 996;
export const desktop = `@media (min-width: ${desktopStartWidth}px)`;
export const mobile = `@media (max-width: ${desktopStartWidth}px)`;



const TitleStyled = styled.h1`
  color: black;
	font-size: 20px;
	border: 0;
	${({ primary }) =>
    primary && css`
                background-color: indianred;
                border: 1px solid skyblue;
                font: 20px;
            `
  }
    &:hover {
        background-color: mediumseagreen;
    }
    ${mobile} {
      font-size: 15px;
	}
`;

const TitleComponent = ({ children, primary }) => {
  return <TitleStyled primary={primary}>{children}</TitleStyled>
}

export default TitleComponent