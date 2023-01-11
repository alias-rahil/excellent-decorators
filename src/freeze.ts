/**
 * ```typescript
 * @Freeze
 * class Test {}
 * ```
 */
const freeze = <T extends new (...rest: any[]) => Record<never, unknown>>(
	target: T,
) => {
	Object.freeze(target);
	Object.freeze(target.prototype);

	return target;
};

export default freeze;
