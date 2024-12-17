//@ts-nocheck
import styled from "styled-components";

const handleBtnBgColor = (props): string => {
	const {
		theme: { colors },
		name,
	} = props;

	const colorSet = {
		retry: colors.BRAND,
		cancel: colors.SECONDARY_TEXT,
		accept: colors.GREEN,
	};

	return colorSet[name];
};

const StyledPopup = styled.div`
	display: flex;
`;

const StyledContent = styled.div`
	padding: 10px;
`;

const StyledBtn = styled.button`
	background: ${(props) => handleBtnBgColor(props)};
	color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
	padding: 8px 0;
	width: 100%;
`;

export { StyledPopup, StyledContent, StyledBtn };
