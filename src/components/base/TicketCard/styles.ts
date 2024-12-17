import styled, { css } from "styled-components";
import { Text } from "../../index";

const TabContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 2px solid white;
	border-radius: 100px;
	height: 40px;
	padding: 4px;
	margin-bottom: 20px;
`;

const TabButton = styled.button<any>`
	transition: all 300ms;
	border-radius: 100px;
	width: 45%;
	height: 100%;
	background: ${({ theme, isActive }) => (isActive ? "white" : "transparent")};
	color: ${({ theme, isActive }) => (isActive ? "black" : "white")};
`;

const Container = styled.div<any>`
	height: 200px;
	overflow: hidden;
	padding: 10px;
	margin: 10px 0;
	position: relative;
	background-color: ${({ theme }) => theme.colors.WHITE};
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	align-items: start;

	img {
		width: 130px;
		height: 100%;
		border-radius: 8px;
		object-fit: cover;
	}

	> div {
		width: calc(100% - 130px);
	}

	${({ isActive }) =>
		!isActive &&
		css`
			pointer-events: none;
			filter: grayscale(1);
		`}
`;

const TicketCount = styled(Text)`
	background: #fad9d3;
	border-radius: 5px;
	width: 60px;
	height: 22px;
	text-align: center;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.BRAND};
`;

const RowText = styled(Text)`
	text-align: start;
	margin-inline-start: 10px;
	width: 90%;
	color: black;
	margin: 5px 0;
`;

const ReserveCode = styled.div`
	border-radius: 5px;
	background: #d7f0eb;
	color: #37b399;
	height: 40px;
	display: flex;
	font-weight: bold;
	padding: 5px;
`;

export { TabContainer, TabButton, Container, RowText, TicketCount, ReserveCode };
