import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "../components/VideoCard";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div>

			<div>
				<VideoCard
					title="My Baby Just Cares for Me [Five Feet Apart Soundtrack]"
					author="Movie Soundtrack"
					views="78M Views"
					timeStamp="12 days ago"
					channel="channel1.jpg"
					thumbnail="thumbnail1.jpg"
				></VideoCard>
			</div>
		</div>
	);
}
