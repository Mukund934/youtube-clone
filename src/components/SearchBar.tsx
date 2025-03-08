export function SearchBar() {
	return (
		<div className="flex justify-center p-4">
			<form className="relative w-full max-w-lg">
				<input
					type="search"
					placeholder="Search YouTube"
					required
					className="w-full py-3 pl-4 pr-16 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
				/>
				<button
					type="submit"
					className="absolute inset-y-0 right-0 flex items-center justify-center px-4 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-200 ease-in-out"
				>
					<svg
						className="w-6 h-6 text-white"
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M21.71 20.29l-5.38-5.38a7.5 7.5 0 1 0-1.42 1.42l5.38 5.38a1 1 0 0 0 1.42-1.42zM10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" />
					</svg>
				</button>
			</form>
		</div>
	);
}
