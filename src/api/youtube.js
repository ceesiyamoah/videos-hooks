import axios from 'axios';
const KEY = 'AIzaSyCClQIpHgkWYHH9iI6jCr55wx3o7FT3RIQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
		type: 'video',
	},
});
