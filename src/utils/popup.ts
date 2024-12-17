interface Retry {
	title?: string;
	message: string;
	cancelTitle?: string;
	retryTitle?: string;
	onRetry?: Function;
	onCancel?: Function;
}

interface Ask {
	title?: string;
	message: string;
	acceptTitle?: string;
	cancelTitle?: string;
	onAccept?: Function;
	onCancel?: Function;
}

class Popup {
	private Bridge: any;
	private isDevelopment: boolean;

	constructor() {
		this.isDevelopment = process.env.NODE_ENV === "development";
		this.Bridge = (window as any)?.appGlobal?.application;
	}

	get loading() {
		const bridge = (window as any)?.appGlobal?.application;

		return {
			start: () => {
				return this.isDevelopment ? console.log("start loading") : bridge?.showLoading();
			},
			stop: () => {
				return this.isDevelopment ? console.log("stop loading") : bridge?.hideLoading();
			},
		};
	}

	info(title: string, message: string) {
		this.isDevelopment
			? this.devAlert(title, message)
			: this.Bridge?.showMessageBox(title, message, 1);
	}

	error(message: string, cb?: Function) {
		// TODO: pass the cb to bridge
		this.isDevelopment ? this.devAlert("", message) : this.Bridge?.showError(message);
	}

	private devAlert = (
		title,
		message,
		onAccept: Function = () => {},
		onCancel: Function = () => {}
	) => {
		// const isAccepted = confirm(`${title} \n ${message}`);
		// isAccepted ? onAccept?.() : onCancel?.();
	};

	ask(params: Ask) {
		const {
			title = "",
			message,
			cancelTitle = "تایید",
			acceptTitle = "بستن",
			onCancel = () => {},
			onAccept = () => {},
		} = params || {};

		return this.isDevelopment
			? this.devAlert(title, message, onAccept, onCancel)
			: this.Bridge?.showConfirmBox(
					title,
					message,
					acceptTitle,
					cancelTitle,
					onAccept,
					onCancel
			  );
	}

	retry(params: Retry) {
		const {
			title = "",
			message,
			cancelTitle = "انصراف",
			retryTitle = "تلاش مجدد",
			onCancel = () => {},
			onRetry = () => {},
		} = params || {};

		return this.isDevelopment
			? this.devAlert(title, message, onRetry, onCancel)
			: this.Bridge?.showConfirmBox(
					title,
					message,
					retryTitle,
					cancelTitle,
					onRetry,
					onCancel
			  );
	}
}

export default new Popup();
