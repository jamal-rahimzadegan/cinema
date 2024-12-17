import styled from "styled-components";
import { Text } from "components";
import { SEAT_SIZE } from "./constants";

const SeatListContainer = styled.div<any>`
	width: max-content;
	margin: 20px 0;
`;

const SeatRow = styled.div<any>`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	width: 100%;
	height: 25px;
`;

const RowNumber = styled(Text)<any>`
	width: ${SEAT_SIZE}px;
	height: ${SEAT_SIZE}px;
	color: black;
	position: sticky;
	left: 0;
	background: white;
`;

const EmptySeatSpace = styled.div<any>`
	width: ${SEAT_SIZE}px;
`;

export { SeatListContainer, SeatRow, RowNumber, EmptySeatSpace };
