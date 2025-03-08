export function SearchBar() {
	return (
		<div className="flex justify-center p-4">
			<form className="flex w-full max-w-md">
				<input
					type="search"
					placeholder="Search"
					required
					className="flex-1 py-2 pl-4 border border-gray-300 rounded-l-full focus:outline-none"
				/>
				<button
					type="submit"
					className="px-4 bg-red-600 border border-red-600 rounded-r-full hover:bg-red-700 focus:outline-none"
				>
					<svg
						className="w-5 h-5 text-white"
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10,18a8,8,0,1,1,5.292-2.292l4.182,4.182a1,1,0,0,1-1.414,1.414l-4.182-4.182A8,8,0,0,1,10,18ZM10,2a6,6,0,1,0,6,6A6,6,0,0,0,10,2Z" />
					</svg>
				</button>
			</form>
		</div>
	);
}
