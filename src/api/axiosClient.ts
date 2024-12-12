// src/api/axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com', // 示例 API
	headers: {
		'Content-Type': 'application/json',
	},
});

// 可以在这里添加请求拦截器和响应拦截器

export default axiosClient;
