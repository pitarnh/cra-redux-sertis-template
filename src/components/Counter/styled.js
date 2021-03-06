import styled from "styled-components"

export default styled.div`
	.row {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:not(:last-child) {
		margin-bottom: 16px;
	}

	.value {
		font-size: 78px;
		padding-left: 16px;
		padding-right: 16px;
		margin-top: 2px;
		font-family: "Courier New", Courier, monospace;
	}
	.textbox {
		font-size: 32px;
		padding: 2px;
		width: 30px;
		text-align: center;
		margin-right: 8px;
	}
`
