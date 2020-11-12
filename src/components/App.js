import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetails';
import VideoList from './VideoList';
import useVideos from './../hooks/useVideos';

const App = () => {
	const { videos, search } = useVideos('river');
	const [selectedVideo, setSelectedVideo] = useState(videos[0]);

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className='ui container'>
			<SearchBar onFormSubmit={search} />
			<div className='ui grid'>
				<div className='ui row'>
					<div className='eleven wide column'>
						<VideoDetail video={selectedVideo} />
					</div>
					<div className='five wide column'>
						<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
