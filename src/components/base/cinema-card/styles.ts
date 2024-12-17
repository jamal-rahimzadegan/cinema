import styled from "styled-components";

const DateContainer = styled.div<any>`
	margin: 10px 0;
	height: 0;
	overflow: hidden;
	display: grid;
	align-items: center;
	grid-template-columns: repeat(auto-fit, 90px);
	grid-gap: 3px;
	animation: ${(props) => (props.isCinemaSelected ? "open" : "close")} 800ms forwards;

	@keyframes open {
		0% {
			height: 0;
		}
		50% {
			height: 50%;
		}
		100% {
			height: 100%;
		}
	}
	@keyframes close {
		0% {
			height: 100%;
		}
		50% {
			height: 50%;
		}
		100% {
			height: 0;
		}
	}
`;

const DateItem = styled.div<any>`
	display: flex;
	padding: 5px;
	border-radius: 5px;
	flex-direction: column;
	border-radius: ${({ theme }) => theme.radius.xxs};
	border: ${({ theme, isDayClicked }) => (isDayClicked ? `1px solid ${theme.colors.BRAND}` : "")};
	background: white;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export { DateContainer, DateItem };
