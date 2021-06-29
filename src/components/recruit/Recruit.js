import React from 'react';
import loadGif from '@/assets/images/load.gif';
import SearchBox from '@/components/search/SearchBox';
import { Link, HashRouter } from 'react-router-dom';
import { recruitDetail } from '@/constants/PagePath';
import { getRecruitList }  from '@/apis/recruit';

import '@/styles/recruit/recruit.scss';

class Recruit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            keyWord : '',
            popShow : false,
            recruitList : [], 
            loading: true
        };
      }
    componentDidMount() {
        this.getJobList();
    }
    getJobList = ({keyWord} = {}) => {
        this.setState({
            keyWord
        });
        getRecruitList({ keyWord }).then((res = {})=> {
            const { data: { items }} = res;
            this.setState({
                recruitList: items
            });
        }).finally(() => {
            this.setState({
                loading: false
            });
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
            <div id="recruitPage" className="main">
            <SearchBox getJobList={this.getJobList} />
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
            </div>
        </div>
        );
    }
}

export default Recruit;