import React, { useState, useEffect } from 'react';
import loadGif from '@/assets/images/load.gif';
import SearchBox from '@/components/search/SearchBox';
import LoadMore from '@/components/loadMore/LoadMore';
import { Link, HashRouter } from 'react-router-dom';
import { recruitDetail } from '@/constants/PagePath';
import { getRecruitList }  from '@/apis/recruit';

import '@/styles/recruit/recruit.scss';

function Recruit() {
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [keyWords, setKeyWord] = useState('');
    const [recruitList, setRecruitList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadMoreShow, setLoadMoreShow] = useState(true);
    const [reset, setReset] = useState(true);

    useEffect(() => {
        if ((reset && page === 1) || (!reset && page > 1)) {
            getJobList();
        }
    }, [page, reset]);
    
    // 关键字搜索
    const searchRequest = ({keyWord} = {}) => {
        setKeyWord(keyWord);
        setPage(1);
        setReset(true);
    }
    // 加载更多
    const loadMoreRequest = () => {
        setPage(page + 1);
        setReset(false);
    }
    // 请求列表数据
    const getJobList = () => {

        const params = {
            keyWord: keyWords,
            pageSize,
            page
        }
        if (params.page > 1) setLoadMoreShow(true);
        getRecruitList(params).then((res = {})=> {
            const { data: { items, page: pageNum }} = res;
            const searchResultList = pageNum === 1 && params.page === 1 ? items : recruitList.concat(items);
            setRecruitList(searchResultList);
            setPage(pageNum);
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
                setLoadMoreShow(false);
            }, 5000);
        });
    }
    // 列表Item
    const listDom = recruitList.map( (item, index) =>
        <tr key={index}>
            <td><span>{item.name}</span></td>
            <td>{item.department}</td>
            <td>{item.area}</td>
            <td>
            <HashRouter>
                <span className="btn-detail">
                    <Link to={ `${recruitDetail().name}${item.id}` }>职位详情</Link>
                </span>
            </HashRouter>
            </td>
        </tr>); 

    return (
        <div id="recruitPage" className="main 1/2screen">
        <SearchBox getJobList={searchRequest} />
        <div className="box-warp office-box">
            <table className="off-tab">
                <thead>
                    <tr><th className="o-name">职位名称</th><th className="o-part">所属部门</th><th className="o-address">工作地点</th><th className="o-request">职位需求</th></tr>
                </thead>
                <tbody>
                    {listDom}
                </tbody>
                <tfoot>
                <tr style={{ display: loading ? 'table-row' : 'none'}}>
                    <td colSpan="4"><p className="load"><img src={loadGif} alt="数据demo" /><br />努力加载中</p></td>
                </tr> 
                </tfoot>
            </table>
            <LoadMore
            show={loadMoreShow}
            useWindow={false}
            requestMore={loadMoreRequest}/>
        </div>
    </div>
    );
}

export default Recruit;