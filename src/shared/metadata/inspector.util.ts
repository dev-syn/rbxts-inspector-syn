import { InspectableOptions } from './inspectable.decorator';

export function getInspectableProperties(target: object): Map<string | symbol,InspectableOptions> {
	const properties = new Map<string | symbol,InspectableOptions>();
	const keys: Set<string | symbol> = Reflect.getOwnMetadata("syn_inspector:keys",target);
	if (keys) {
			for (const key of keys) {
					// Check if we've already found this property in a derived (child) class.
					// This ensures the most derived options win (correct override behavior).
					if (!properties.has(key)) {
							// Use Reflect.getMetadata to retrieve the options for the property.
							const options = Reflect.getMetadata("syn_inspector:options",target,key) as InspectableOptions;
							
							// Store the property key and its options.
							properties.set(key, options || {});
					}
			}
	}
	return properties;
}