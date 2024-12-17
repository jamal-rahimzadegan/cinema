import React, { Fragment } from "react";
import { TicketTableData } from "types/models/ticket-confirm-form";
import { Text, Seperator, SpriteIcon } from "../../";
import "./DataTable.scss";

interface Props {
	type?: string;
	data?: TicketTableData;
	title?: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
}

export default function DataTable(props: Props) {
	const { data = [], title, type = "primary", children, className = "" } = props;

	return (
		<div
			className={
				(type === "accent" ? "account-data-table--accent" : "") +
				` account-data-table ${className}`
			}
		>
			{title ? (
				<Text isBold className="m-2">
					{title}
				</Text>
			) : null}
			{data.map((item, index) => (
				<Fragment key={index}>
					<div
						className={
							"account-data-table__row " + type === "accent" && index % 2 === 0
								? "account-data-table__row--colored"
								: ""
						}
					>
						<div className="flex place-items-center p-2">
							{item?.iconName ? (
								<SpriteIcon
									className="ml-2"
									align="none"
									name="sprite"
									iconName={item.iconName}
								/>
							) : null}

							<Text
								className="ml-2"
								isBold
								align={item?.iconName ? "none" : "right"}
								size="small"
								color={type === "accent" ? "dark" : "WHITE"}
							>
								{item.name}
							</Text>
							<Text
								numberOfLines={1}
								color={type === "accent" ? "black" : "WHITE"}
								size={"small"}
							>
								{item?.value || "-"}
							</Text>
						</div>
					</div>
					{type !== "accent" ? <Seperator /> : null}
				</Fragment>
			))}
			{children}
		</div>
	);
}
