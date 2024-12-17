import styled from "styled-components";

const Container = styled.div`
	background: white;
	width: 100%;

	hr {
		border-top: 2px dashed lightgray;
		margin: -60px 0 20px 0;
	}
`;

const InfoContainer = styled.div`
	position: relative;
	top: -90px;
	display: flex;
	align-items: flex-end;
`;

const Banner = styled.img`
	height: 120px;
	object-fit: cover;
	width: 100%;
	filter: blur(3px);
	border-bottom: 1px solid black;
`;

const Cover = styled.img`
	height: 160px;
	margin-inline-end: 15px;
	object-fit: cover;
	width: 130px;
	border-radius: 8px;
	box-shadow: ${({ theme }) => theme.colors.BOX_SHADOW};
`;

const SeatNumberContainer = styled.div`
	background: #e1e1e1;
	border-radius: 5px;
	width: max-content;
	font-weight: bold;
	padding: 4px 10px;
	margin: 0 0 5px 5px;
`;

export { Container, InfoContainer, Banner, Cover, SeatNumberContainer };
