import React from 'react';
import loadGif from '@/assets/images/load.gif';
import SearchBox from '@/components/search/SearchBox';
import { Link, HashRouter } from 'react-router-dom';
import { recruitDetail } from '@/constants/PagePath';

import '@/styles/recruit/recruit.scss';

class Recruit extends React.Component {
    constructor(props){
        super(props)
        this.keyWord = '';
        this.popShow = 'false';
      }
    getJobList = ({keyWord}) => {
        this.setState({
            keyWord
        });
        return [{
            name: '123',
            department: 'yf',
            area: 'xm'
        },
        {
            name: '1234',
            department: 'yfb',
            area: 'xmx'
        },
        {
            name: '12345',
            department: 'sj',
            area: 'zp'
        }]
    }


    render() {
        return (
            <div id="recruitPage" className="main">
            <SearchBox getJobList={this.getJobList} />
            <div className="box-warp office-box">
                <table className="off-tab">
                    <thead>
                        <tr><th className="o-name">职位名称</th><th className="o-part">所属部门</th><th className="o-address">工作地点</th><th className="o-request">职位需求</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>Android 开发经理</span></td>
                            <td>研发部</td>
                            <td>厦门</td>
                            <td>
                            <HashRouter>
                                <span className="btn-detail">
                                    <Link to={ `${recruitDetail().name}${1}` }>职位详情</Link>
                                </span>
                            </HashRouter>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                    <tr>
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