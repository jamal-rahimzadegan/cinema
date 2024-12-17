type SharePayloadType = [title: string, url: string, img: string, platform: PlatformType];

export default function shareMovie(...payload: SharePayloadType) {
	const [title, url, img, platform] = payload;

	if (platform !== "pwa") {
		(window as any)?.appGlobal?.application?.shareContent({
			shareText: title,
			shareImage: img,
		});
	} else {
		if (!navigator?.share) return console.error("share is not supported");
		navigator
			.share({
				title,
				text: url,
				url,
				// files: [img],
			})
			.then(() => console.log("Successful share"))
			.catch((error) => console.log("Error sharing", error));
	}
}
