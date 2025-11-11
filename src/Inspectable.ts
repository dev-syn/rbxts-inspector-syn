import "reflect-metadata"

export interface InspectableOptions {
	/** Defines if this  */
	readonly?: boolean;
}
export function Inspectable(options: InspectableOptions) {
	return (target: object, propertyKey: string | symbol) => {
		
	}
}