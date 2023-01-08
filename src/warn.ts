type BaseLogger = {
	warn: (...loggerArgs: unknown[]) => void;
};

const warn = <T extends BaseLogger>(
	loggerArgs: unknown[],
	silent?: boolean,
	logger?: T,
) => <T extends BaseLogger, U extends new (...rest: any[]) => Record<never, unknown>>(Target: U) => {
	class NewTarget extends Target {
		constructor(...rest: any[]) {
			const [options] = rest as [
				{silent?: boolean; logger?: T} | undefined,
				...unknown[],
			];

			if (!options?.silent || silent) {
				if (logger) {
					logger.warn(...loggerArgs);
				} else {
					console.warn(...loggerArgs);
				}
			}

			super(...rest);
		}
	}

	Object.setPrototypeOf(NewTarget.prototype, Object.getPrototypeOf(Target.prototype));

	return NewTarget;
};

export default warn;
