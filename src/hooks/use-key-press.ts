import { useEffect, useState } from "react";

interface Options {
	onKeyPress?: Function;
	onKeyRelease?: Function;
}

export default function useKeyPress(targetKey: string, options: Options) {
	const { onKeyPress, onKeyRelease } = options;
	const [isPressed, setIsPressed] = useState<boolean>(false);

	const handleKeyOperations = ({ type, key }) => {
		setIsPressed((prevValue) => !prevValue);

		if (key !== targetKey) return;
		if (type === "keydown") onKeyPress?.();
		if (type === "keyup") onKeyRelease?.();
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyOperations);
		window.addEventListener("keyup", handleKeyOperations);

		return () => {
			window.removeEventListener("keydown", handleKeyOperations);
			window.removeEventListener("keyup", handleKeyOperations);
		};
	}, []);

	return isPressed;
}
