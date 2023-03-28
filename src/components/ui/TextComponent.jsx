import React from 'react'
import styled from 'styled-components';

const TextStyled = styled.text`
	background-color: ${props => props.backgroundColor === 'coral' ? 'coral' : 'skyblue'};
	color: red;
	font-size: 10px;
	border: 0;
    padding: 10px;
`;

const TextComponent = ({ children, backgroundColor }) => {
	return <TextStyled backgroundColor={backgroundColor}>{children}</TextStyled>
}

export default TextComponent