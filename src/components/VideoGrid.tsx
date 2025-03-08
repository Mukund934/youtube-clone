import { VideoCard } from "./VideoCard";

const VIDEOS = [
	{
		title: "Exploring the Hidden Gems of Tokyo",
		author: "Travel Explorer",
		views: "5.4M Views",
		timeStamp: "4 days ago",
		channel: "channel.jpg",
		thumbnail: "thumbnail1.jpg",
	},
	{
		title: "Learn React in 30 Minutes",
		author: "Code Academy",
		views: "3.2M Views",
		timeStamp: "1 week ago",
		channel: "channel.jpg",
		thumbnail: "thumbnail1.jpg",
	},
	{
		title: "Mastering the Art of Italian Cooking",
		author: "Chef Mario",
		views: "2.8M Views",
		timeStamp: "2 weeks ago",
		channel: "channel.jpg",
		thumbnail: "thumbnail1.jpg",
	},
	{
		title: "Ultimate Drone Footage of Iceland",
		author: "Sky High Films",
		views: "6.7M Views",
		timeStamp: "3 days ago",
		channel: "channel.jpg",
		thumbnail: "thumbnail1.jpg",
	},
	{
		title: "The Science Behind Quantum Computing",
		author: "Tech Insider",
		views: "4.1M Views",
		timeStamp: "5 days ago",
		channel: "channel.jpg",
		thumbnail: "thumbnail1.jpg",
	},
	{
		title: "Yoga for Beginners: 20-Minute Daily Routine",
		author: "Wellness Today",
		views: "3.9M Views",
		timeStamp: "1 month ago",
		channel: "channel.jpg",
		thumbnail: "thumbnail1.jpg",
	},
	{
		title: "History of the Internet Explained",
		author: "Digital History",
		views: "2.3M Views",
		timeStamp: "8 days ago",
		channel: "channel.jpg",
		thumbnail: "thumbnail1.jpg",
	},
	{
		title: "Epic Road Trip Across America",
		author: "Adventure Vlogs",
		views: "7.5M Views",
		timeStamp: "2 days ago",
		channel: "channel.jpg",
		thumbnail: "thumbnail1.jpg",
	},
];

export function VideoGrid() {
	return (
		<div>
			{VIDEOS.map((video, index) => (
				<VideoCard
					key={index}
					title={video.title}
					author={video.author}
					views={video.views}
					timeStamp={video.timeStamp}
					channel={video.channel}
					thumbnail={video.thumbnail}
				/>
			))}
		</div>
	);
}
