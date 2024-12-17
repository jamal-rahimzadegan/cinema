import DoubleLinkedList from "../temp/linked-list/double-linked-list";

type ElementType = null | string;

enum ACTION {
	forward = "forward",
	backward = "backward",
}

interface RetrievedObject {
	previous: ElementType;
	current: ElementType;
	next: ElementType;
}

interface StorageSrc extends DoubleLinkedList {}

class RouteService {
	protected allRoutes: string[];
	protected storage: StorageSrc;
	result: RetrievedObject;

	constructor() {
		this.allRoutes = [];
		this.result = { previous: null, current: null, next: null };
		this.storage = new DoubleLinkedList();
	}

	protected generateResult(
		route: ElementType,
		prev: ElementType = null,
		next: ElementType = null
	) {
		return {
			previous: prev,
			current: route,
			next,
		};
	}

	get routes() {
		return this.result;
	}

	protected addOrDeleteRoute(route, action: "add" | "delete") {
		const { allRoutes } = this;
		if (action === "add") !allRoutes.includes(route) && allRoutes.push(route);
		if (action === "delete") allRoutes.splice(allRoutes.indexOf(route), 1);
	}

	observe(route: string, action?: keyof typeof ACTION) {
		const { storage } = this;
		const { next, current, previous } = this.result;

		// if (current === route) return;
		// if ([next, current, previous].includes(route)) return;

		if (action === "forward") {
			switch (storage.length) {
				case 0:
					storage.insertHead(route);
					this.result = this.generateResult(route);
					break;
				case 1:
					storage.insertEnd(route);
					this.result = this.generateResult(route, storage.head.value, null);
					break;
				case 2:
					storage.insertEnd(route);
					this.result = this.generateResult(
						route,
						storage.head.next?.previous?.next?.value,
						null
					);
					break;
				case 3:
					storage.removeHead();
					storage.insertEnd(route);
					this.result = this.generateResult(
						route,
						storage.head.next?.previous?.next?.value,
						null
					);
					break;
				default:
			}
		}

		if (action === "backward") {
			switch (storage.length) {
				case 2:
					this.result = this.generateResult(
						route,
						storage.head.next?.previous?.value,
						storage.head.next?.value
					);
					break;
				case 3:
					storage.printElements();
					this.result = this.generateResult(
						route,
						storage.head.value,
						storage.head.next?.next?.value
					);
					break;
				default:
			}
		}
	}
}

const retrieveVisitedRoutes = new RouteService();

export default retrieveVisitedRoutes;
