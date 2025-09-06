import "reflect-metadata"

export interface InspectableOptions {
	readonly?: boolean;
}
export function Inspectable(options: InspectableOptions) {
	return (target: object, propertyKey: string | symbol) => {
		const keys: Set<string | symbol> =
		Reflect.getMetadata("syn_inspector:keys",target) || new Set();

		keys.add(propertyKey);
		Reflect.defineMetadata("syn_inspector:keys", keys, target);
		Reflect.defineMetadata("syn_inspector:options", options, target, propertyKey);
	}
}