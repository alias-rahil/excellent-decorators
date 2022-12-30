function freeze() {
	return function <T>(target: new (...args: never[]) => T) {
		Object.freeze(target);
		Object.freeze(target.prototype);

		return target;
	};
}

export default freeze;
