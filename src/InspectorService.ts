import { RunService } from '@rbxts/services'
import { $print, $warn } from 'rbxts-transform-debug'

const SelectionService = game.GetService("Selection");

interface InspectorConfig {
	//** Should the inspector recognize flamework components. Defaults to false */
	ENABLE_FLAMEWORK: boolean;
}

interface InspectOptions {
	
}

class InspectorService {
	config: InspectorConfig = {
		ENABLE_FLAMEWORK: false,
	}

	inspect(options: InspectOptions = {},inst?: Instance) {
		if (!RunService.IsStudio()) throw "inspect() can only be called within Studio.";

		if (!inst) {
			inst = SelectionService.Get()[0];

			// If the new inst we just now assigned is undefined, we will inspect nothing.
			if (!inst) {
				$print("{InspectorService}: No selected Instance to inspect.");
				return;
			}
		} 


	}


}

export { InspectorService }