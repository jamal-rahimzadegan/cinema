import retrieveVisitedRoutes from "utils/retrieve-visited-routes";

describe("retrieveVisitedRoutes", () => {
	it("has one route at the beginning", () => {
		retrieveVisitedRoutes.observe("/");
		const { previous, current, next } = retrieveVisitedRoutes.result;

		expect(previous).toBe(null);
		expect(current).toBe("/");
		expect(next).toBe(null);
	});

	it("works on first navigate (forward)", () => {
		retrieveVisitedRoutes.observe("0", "forward");
		retrieveVisitedRoutes.observe("1", "forward");
		retrieveVisitedRoutes.observe("2", "forward");
		retrieveVisitedRoutes.observe("3", "forward");
		retrieveVisitedRoutes.observe("4", "forward");
		retrieveVisitedRoutes.observe("5", "forward");
		retrieveVisitedRoutes.observe("6", "forward");

		const { previous, current, next } = retrieveVisitedRoutes.result;

		expect(previous).toBe("5");
		expect(current).toBe("6");
		expect(next).toBe(null);
	});

	it("backward at level 2", () => {
		retrieveVisitedRoutes.observe("0", "forward");
		retrieveVisitedRoutes.observe("1", "forward");
		retrieveVisitedRoutes.observe("0", "backward");

		const { previous, current, next } = retrieveVisitedRoutes.result;

		expect(previous).toBe(null);
		expect(current).toBe("0");
		expect(next).toBe("1");
	});

	it("backward at level 3", () => {
		retrieveVisitedRoutes.observe("0", "forward");
		retrieveVisitedRoutes.observe("1", "forward");
		retrieveVisitedRoutes.observe("2", "forward");
		retrieveVisitedRoutes.observe("1", "backward");

		const { previous, current, next } = retrieveVisitedRoutes.result;

		expect(previous).toBe("0");
		expect(current).toBe("1");
		expect(next).toBe("2");
	});

	it("backward at level 3", () => {
		retrieveVisitedRoutes.observe("0", "forward");
		retrieveVisitedRoutes.observe("1", "forward");
		retrieveVisitedRoutes.observe("2", "forward");
		retrieveVisitedRoutes.observe("3", "forward");
		retrieveVisitedRoutes.observe("4", "forward");
		retrieveVisitedRoutes.observe("3", "backward");

		const { previous, current, next } = retrieveVisitedRoutes.result;

		expect(previous).toBe("2");
		expect(current).toBe("3");
		expect(next).toBe("4");
	});
});
