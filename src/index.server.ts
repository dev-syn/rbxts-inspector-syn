const toolbar = plugin.CreateToolbar("dev-syn Plugins");
const button = toolbar.CreateButton(
	// unique id
	"dev-syn.inspector.toggle_ui",
	// tooltip
	"Toggles the Inspector's UI.",
	"",
	// friendly name
	"Toggle Inspector View"
);

button.Click.Connect(() => {
	print("Button clicked!");
});

const SelectionService = game.GetService("Selection");
SelectionService.SelectionChanged.Connect(() => {
	const selection: Instance | undefined = SelectionService.Get()[0];
	if (!selection) return;

	// Inspect the newly selected object if it's an Instance
	
});