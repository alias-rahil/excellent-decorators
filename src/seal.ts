const seal = () => <T extends new (...rest: any[]) => Record<number | symbol | string, unknown>>(
	target: T,
) => {
	Object.seal(target);
	Object.seal(target.prototype);

	return target;
};

export default seal;
