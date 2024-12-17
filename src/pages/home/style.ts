//@ts-nocheck
import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	width: 100%;
`;

const ChooseCityBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 0 10px;
	margin-right: 2px;
	background: ${({ theme }) => theme.colors.INPUT_BG};
	color: ${({ theme }) => theme.colors.BLACK};
	height: 50px;
	box-shadow: ${({ theme }) => theme.colors.BOX_SHADOW}; ;
`;

const StyledMyTicketBtn = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	padding: 0 10px;
	margin: 10px 0;
	cursor: pointer;
	background: ${({ theme }) => theme.colors.BOX_BG};
	color: ${({ theme }) => theme.colors.BLACK};
`;

export { StyledHeader, ChooseCityBtn, StyledMyTicketBtn };
