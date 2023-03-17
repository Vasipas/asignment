/* eslint-disable prefer-destructuring */
import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
	baseURL: `/api`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export { http };