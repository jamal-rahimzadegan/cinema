type CompareTimeType = (time1: number, time2: number) => number;

function compare(): CompareTimeType {
	const formTime = (t) => parseInt(t.split(":").join(""));

	return (time1, time2) => {
		try {
			return formTime(time1) - formTime(time2);
		} catch {
			return 0;
		}
	};
}

const compareTimes = compare();
export default compareTimes;
