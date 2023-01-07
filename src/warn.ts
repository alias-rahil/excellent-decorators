type BaseLogger = {
	warn: (message: string) => void;
};

const warn = <T extends BaseLogger>(
	message: string,
	silent?: boolean,
	logger?: T,
) =>
	<T extends BaseLogger, U extends new (...rest: any[]) => Record<never, unknown>>(Target: U) => {
		class NewTarget extends Target {
			constructor(...rest: any[]) {
				const [options] = rest as [
					{silent?: boolean; logger?: T} | undefined,
					...unknown[],
				];

				if (!options?.silent || silent) {
					if (logger) {
						logger.warn(message);
					} else {
						console.warn(message);
					}
				}

				super(...rest);
			}
		}

		NewTarget.prototype = Target.prototype as unknown;

		return NewTarget;
	};

export default warn;
