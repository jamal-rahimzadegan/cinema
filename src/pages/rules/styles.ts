import styled from "styled-components";

const RulesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 1000001 !important;
	top: 0;
	left: 0;
	background: ${({ theme }) => theme.colors.MODAL_BG};
	height: 100vh;
	width: 100%;

	div {
		background: ${({ theme }) => theme.colors.PAGE_BG};
		height: 80%;
		padding: 15px 10px;
		border-radius: 10px;
		width: 80%;
		overflow-y: scroll;
	}
`;

const CloseBtn = styled.button`
	color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
`;

export { RulesContainer, CloseBtn };
