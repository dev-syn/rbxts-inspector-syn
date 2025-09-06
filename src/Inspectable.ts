import "reflect-metadata"

export interface InspectableOptions {
	readonly?: boolean;
}
export function Inspectable(options: InspectableOptions) {
	return (target: object, propertyKey: string | symbol) => {
		const keys: Set<string | symbol> =
		Reflect.getMetadata("inspector:keys",target) || new Set();

		keys.add(propertyKey);
		Reflect.defineMetadata("inspector:keys", keys, target);
		Reflect.defineMetadata("inspector:options", options, target, propertyKey);
	}
}