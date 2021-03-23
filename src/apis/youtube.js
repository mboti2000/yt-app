import axios from 'axios';

const KEY = 'AIzaSyAQf68PurCvCJ9XnPZOOk6nqTrYNOghw1M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
