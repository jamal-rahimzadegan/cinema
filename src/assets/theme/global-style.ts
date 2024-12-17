//@ts-nocheck

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body, html {
		text-align: unset;
		line-height: normal;
		overscroll-behavior: none;
		scroll-behavior: smooth;
		transition: background 300ms;
		background-color: ${({ theme }) => theme.colors.PAGE_BG};
	}

	a {
		text-decoration: none !important;
	}

	//-----removing chrome auto fill bg
	input:focus,
	textarea:focus,
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		outline: none;
		-webkit-box-shadow: 0 0 0 1000px transparent inset;
		transition: background-color 5000s ease-in-out 0s;
	}

	input {
		background: transparent;

	}

	//--------------------------------------------------
	.modal-content {
	}


	th, tr {
	}

	select {

	}

	//------------scrollbar-----------------------------------------------------
	::-webkit-scrollbar {
		width: 0;
	}

	::-webkit-scrollbar-track {
		border-radius: 0;
	}

	::-webkit-scrollbar-thumb {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

export { GlobalStyle };
