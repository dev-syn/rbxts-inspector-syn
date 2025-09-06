import "reflect-metadata"

export interface InspectableOptions {
	readonly?: boolean;
}
export function Inspectable(options: InspectableOptions) {
	return (target: object, propertyKey: string | symbol) => {
		
	}
}