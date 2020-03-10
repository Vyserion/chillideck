import * as React from "react";
import styled from "styled-components";

/**
 * Colour scheme
 * https://coolors.co/ff715b-2f4858-648896-9ee493-ffffff
 */

const Background = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #5d8696;
	color: #fff;
	padding: 20px;
	font-family: Roboto;
	font-size: 20px;
`;

export const Dashboard: React.SFC = () => <Background>Hello World!</Background>;
