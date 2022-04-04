/* Our functionality for determining amount of time
between two dates */

const SECS_FACTOR = 1000; // 1000ms / SECS_MATH = 1
const MINS_FACTOR = 60 * SECS_FACTOR;
const HOURS_FACTOR = 60 * MINS_FACTOR;
const DAYS_FACTOR = 24 * HOURS_FACTOR;


export function timeExtract(totalTime, factor) {
	const timeExtracted = Math.floor(totalTime / factor);
	const newTotalTime = totalTime - (timeExtracted * factor);
	return [timeExtracted, newTotalTime];
}

// assume dateB > dateA
export function getTimespan(dateA, dateB) {
	const timestampA = dateA.getTime(); // span between Jan 1, 1970 and dateA
	const timestampB = dateB.getTime(); // span between Jan 1, 1970 and dateB

	const delta = timestampB - timestampA; // positive difference

	const [
		days,
		delta1
	] = timeExtract(delta, DAYS_FACTOR);

	const [
		hours,
		delta2
	] = timeExtract(delta1, HOURS_FACTOR);

	const [
		minutes,
		delta3
	] = timeExtract(delta2, MINS_FACTOR);

	const [seconds] = timeExtract(delta3, SECS_FACTOR);

	return [
		days, hours, minutes, seconds
	];
}





/*


	delta = 302,400,000 ms

	get the days (WHOLE number)

	days = floor(delta / DAYS_FACTOR);

	days is 3

	days * DAYS_FACTOR => 259,200,000 ms

	newDelta = 302,400,000 - 259,200,000

	=> 43,200,000 ms

*/
