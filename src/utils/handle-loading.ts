export default function handleLoading(shouldShow: boolean) {
	const action = shouldShow ? "showLoading" : "hideLoading";
	(window as any)?.appGlobal?.application?.[action]();
}
