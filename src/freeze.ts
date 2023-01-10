const freeze = () => <T extends new (...rest: any[]) => Record<number | symbol | string, unknown>>(
	target: T,
) => {
	Object.freeze(target);
	Object.freeze(target.prototype);

	return target;
};

export default freeze;
