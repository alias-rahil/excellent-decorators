function seal() {
	return function <T>(target: new (...args: never[]) => T) {
		Object.seal(target);
		Object.seal(target.prototype);

		return target;
	};
}

export default seal;
