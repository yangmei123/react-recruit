import HttpRequest from './axios';
import __urlConfig from 'urlConfig';

const http = new HttpRequest(__urlConfig.apiHost, __urlConfig.rap);

export default http;
