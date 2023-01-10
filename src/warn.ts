const warn = <Logger extends {warn: (...loggerArgs: unknown[]) => void}>(
	loggerArgs: unknown[],
	accountForConstructorOptions = true,
	silent?: boolean,
	logger?: Logger,
) => <T extends new (...rest: any[]) => Record<number | symbol | string, unknown>>(Target: T) => {
	class NewTarget extends Target {
		constructor(...rest: any[]) {
			const [options] = accountForConstructorOptions ? rest as [
				{silent?: boolean; logger?: Logger} | undefined,
				...unknown[],
			] : [];

			if (!options?.silent && !silent) {
				const log = (options?.logger ?? logger ?? console).warn;

				log.call(options?.logger ?? logger ?? console, ...loggerArgs);
			}

			super(...rest);
		}
	}

	Object.setPrototypeOf(NewTarget.prototype, Object.getPrototypeOf(Target.prototype));

	return NewTarget;
};

export default warn;
