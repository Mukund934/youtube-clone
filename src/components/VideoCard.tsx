export function VideoCard(props) {
	return (
		<div className="p-3 cursor-pointer">
			<img src={props.thumbnail} className="rounded-xl" alt="thumbnail" />
			<div className="grid grid-cols-12 pt-2">
				<div className="col-span-1 pl-3 pt-1">
					<img
						className="rounded-full w-12 h-12"
						src={props.channel}
						alt="channel"
					/>
				</div>
				<div className="col-span-11 pl-2">
					<div>{props.title}</div>
					<div className="text-base text-gray-400">
						{props.author}
					</div>
					<div className="text-base text-gray-400">
						{props.views} | {props.timeStamp}
					</div>
				</div>
			</div>
		</div>
	);
}
