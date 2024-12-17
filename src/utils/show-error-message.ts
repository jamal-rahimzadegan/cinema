export default function showErrorMessage(errorMessage) {
	(window as any)?.appGlobal?.application?.showError(errorMessage);
}
