export default function setNativePageTitle(title: string) {
	(window as any)?.appGlobal?.application?.setPageTitle(title);
}
