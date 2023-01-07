function seal() {
	return <T extends new (...rest: any[]) => Record<never, unknown>>(
		target: T,
	) => {
		Object.seal(target);
		Object.seal(target.prototype);

		return target;
	};
}

export default seal;
