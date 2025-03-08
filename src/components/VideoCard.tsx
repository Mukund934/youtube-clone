interface VideoCardProps {
	thumbnail: string;
	channel: string;
	title: string;
	author: string;
	views: string;
	timeStamp: string;
}

export function VideoCard({
	thumbnail,
	channel,
	title,
	author,
	views,
	timeStamp,
}: VideoCardProps) {
	return (
		<div className="p-3 cursor-pointer">
			<img src={thumbnail} className="rounded-xl" alt="thumbnail" />
			<div className="grid grid-cols-12 pt-2">
				<div className="col-span-1 pl-3 pt-1">
					<img
						className="rounded-full w-12 h-12"
						src={channel}
						alt="channel"
					/>
				</div>
				<div className="col-span-11 pl-2">
					<div>{title}</div>
					<div className="text-base text-gray-400">{author}</div>
					<div className="text-base text-gray-400">
						{views} | {timeStamp}
					</div>
				</div>
			</div>
		</div>
	);
}
