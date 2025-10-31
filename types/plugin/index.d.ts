declare global {
	interface Selection {
		readonly SelectionChanged: RBXScriptSignal<() => void>
	}
}

export {}