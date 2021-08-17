import axios from './request';

// 获取招聘职位列表
export function getRecruitList(params) {
  return axios.request({
    // url: 'recruit/list',
    url: '/mock/mock.json',
    method: 'get',
    params
  });
}
