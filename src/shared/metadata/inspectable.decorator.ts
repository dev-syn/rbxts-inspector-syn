import "reflect-metadata"

export interface InspectableOptions {
	/** A UI display friendly name */
	name?: string;
	/** Makes this inspectable value read only and won't allow UI edits. */
	readonly?: boolean;
	/**
	 * A description of this inspectable element and will
	 * be displayed during tool tips if enabled
	 */
	description?: string;
}
export function Inspectable(options: InspectableOptions = {}) {
	return (target: object, propertyKey: string | symbol) => {
		const keys: Set<string | symbol> =
		Reflect.getOwnMetadata("syn_inspector:keys",target) || new Set();

		keys.add(propertyKey);
		Reflect.defineMetadata("syn_inspector:keys", keys, target);
		Reflect.defineMetadata("syn_inspector:options", options, target, propertyKey);
	}
}