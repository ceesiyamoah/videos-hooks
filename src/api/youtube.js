import axios from 'axios';
//Key will be defined here

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
		type: 'video',
	},
});
