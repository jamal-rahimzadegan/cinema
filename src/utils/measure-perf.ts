function calculatePerf(): () => number {
	const convertMsToSec = (ms: number): number => +((ms % 60000) / 1000).toFixed(0);
	return () => convertMsToSec(performance.now());
}

const measurePerf = calculatePerf();
export default measurePerf;
