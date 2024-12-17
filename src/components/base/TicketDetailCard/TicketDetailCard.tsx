import { useCallAction } from "hooks";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "redux/reducers";
import { Ellipsis, Section, SpriteIcon, Text, WhiteSpace } from "../..";
import "./TicketDetailCard.scss";

interface Props {
	qrCode: string;
	row: unknown;
	number: unknown;
	seatNumber: unknown;
	image?: string;
}

export default function TicketDetailCard(props: Props) {
	const { qrCode, row = 0, seatNumber = 0, number = 0 } = props;
	const { platformName } = useSelector((state: RootStateType) => state.meta);
	const [qrImage, setQrImage] = useState("");
	const [loading, setLoading] = useState(false);
	const [imageData, setImageData] = useState("");
	const callAction = useCallAction();

	const onShareClickHandler = () => {
		const contentToShare = {
			shareImage: imageData,
			...(platformName === "ios" && {
				shareText: "aps://www.733.ir/?typ=4&acnm=app_ticket",
			}),
		};

		(window as any)?.appGlobal?.application?.shareContent(contentToShare);
	};

	const handleQrCode = async () => {
		callAction("HANDLE_QR_CODE", {
			setLoading,
			setImageData,
			setQrImage,
			qrCode,
		});
	};

	useEffect(() => {
		(() => handleQrCode())();
	}, [qrCode]);

	return (
		<div className="ticket-detail-card">
			<Section isInline={true}>
				<div className="ticket-detail-card__ticket-number">{`بلیت: ${number}`}</div>
			</Section>
			<WhiteSpace />
			<Section isInline={true}>
				<Text align={"right"} color={"black"} size={"large"} isBold={true}>
					ردیف &nbsp;
					{row}
				</Text>
				<WhiteSpace width={"15px"} />
				<div className="ticket-detail-card__separator" />
				<WhiteSpace width={"15px"} />
				<Text align={"right"} color={"black"} size={"large"} isBold={true}>
					صندلی شماره &nbsp;
					{seatNumber}
				</Text>
				<div className="ticket-detail-card__share" onClick={onShareClickHandler}>
					<SpriteIcon name={"sprite"} iconName={"share-green"} />
				</div>
			</Section>
			<WhiteSpace space={15} />

			<Section>
				{loading ? (
					<div>
						<WhiteSpace />
						<Ellipsis color={"black"} />
						<WhiteSpace />
					</div>
				) : (
					<img src={qrImage} className="ticket-detail-card__image" alt="qrImg" />
				)}
			</Section>
		</div>
	);
}
