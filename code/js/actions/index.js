export const select = (copter) => {
console.info("helicopter: " + copter.name + '(' + copter.aim + ').');
	return {
		type: "COPTER_SELECTED",
		payload: copter
	}
};