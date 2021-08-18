import React from 'react';
import loadGif from '@/assets/images/load.gif';
import SearchBox from '@/components/search/SearchBox';
import LoadMore from '@/components/loadMore/LoadMore';
import { Link, HashRouter } from 'react-router-dom';
import { recruitDetail } from '@/constants/PagePath';
import { getRecruitList }  from '@/apis/recruit';

import '@/styles/recruit/recruit.scss';

class Recruit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page: 1,
            pageSize: 1,
            keyWord : '',
            recruitList : [], 
            loading: true,
            loadMoreShow: true
        };
      }
    componentDidMount() {
        this.getJobList();
    }
    loadMoreRequest = () => {
        this.getJobList('', false, true);
    }
    searchRequest = ({keyWord} = {}) => {
        this.setState({
            keyWord
        });
        this.getJobList(keyWord, true);
    }
    getJobList = (keyWord, reset = false, loadMore = false) => {
        if (reset) {
            this.setState({
                page: 1,
                pageSize: 1
            });
        }
        const { state: { page, pageSize, recruitList } } = this;
        const params = {
            keyWord,
            pageSize,
            page: loadMore ? page + 1 : page
        }
        if (params.page > 1) this.setState({ loadMoreShow: true });
        getRecruitList(params).then((res = {})=> {
            const { data: { items, page: pageNum }} = res;
            const searchResultList = pageNum === 1 && params.page === 1 ? items : recruitList.concat(items);
            this.setState({
                recruitList: searchResultList,
                page: pageNum
            });
        }).finally(() => {
            setTimeout(() => {
                this.setState({
                    loading: false,
                    loadMoreShow: false
                });
            }, 5000);
        });
    }


    render() {
        const { recruitList} = this.state;
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
            <SearchBox getJobList={this.searchRequest} />
            <div className="box-warp office-box">
                <table className="off-tab">
                    <thead>
                        <tr><th className="o-name">职位名称</th><th className="o-part">所属部门</th><th className="o-address">工作地点</th><th className="o-request">职位需求</th></tr>
                    </thead>
                    <tbody>
                        {listDom}
                    </tbody>
                    <tfoot>
                    <tr style={{ display: this.state.loading ? 'table-row' : 'none'}}>
                        <td colSpan="4"><p className="load"><img src={loadGif} alt="数据demo" /><br />努力加载中</p></td>
                    </tr> 
                    </tfoot>
                </table>
                <LoadMore
                  show={this.state.loadMoreShow}
                  useWindow={true}
                  requestMore={this.loadMoreRequest}/>
            </div>
        </div>
        );
    }
}

export default Recruit;