import { SearchBar } from "./SearchBar";

export function AppBar() {
	return (
		<div className="flex justify-between pt-3">
			<div>Youtube</div>
			<div>
				<SearchBar></SearchBar>
			</div>
			<div>Sign in</div>
		</div>
	);
}
