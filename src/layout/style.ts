//@ts-nocheck
import styled from "styled-components";

const StyledLayout = styled.main`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	position: relative;
`;

const StyledFallback = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.PAGE_BG};
`;

export { StyledLayout, StyledFallback };
