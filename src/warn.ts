import type Logger from './types/logger.js';

/**
 * ```typescript
 * @Warn(['Warning: Test is deprecated, use TestV2 instead.'])
 * class Test {}
 * ```
 */
const warn = (
	loggerArgs: unknown[],
	honourConstructorOptions = true,
	silent = false,
	logger: Logger = console,
) => <T extends new (...rest: any[]) => Record<never, unknown>>(Target: T) => class extends Target {
	constructor(...rest: any[]) {
		const [options] = honourConstructorOptions ? rest as [
			{silent?: boolean; logger?: Logger} | undefined,
			...unknown[],
		] : [];

		if (!options?.silent && !silent) {
			const log = (options?.logger ?? logger).warn;

			log.call(options?.logger ?? logger, ...loggerArgs);
		}

		super(...rest);
	}
};

export default warn;
