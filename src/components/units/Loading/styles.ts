import styled from "styled-components";

const LoadingContainer = styled.div`
	animation: blinker 700ms linear infinite;
	height: 30px;
	width: 30px;
	border-radius: 50px;
	background: white;

	@keyframes blinker {
		50% {
			width: 15px;
			height: 15px;
			opacity: 0;
		}
	}
`;

export { LoadingContainer };
