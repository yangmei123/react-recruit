import React from 'react';
import '@/styles/recruit/recruitDetail.scss';

const Pop = React.lazy(() => import('@/components/pop/Pop'));
class RecruitDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            popShow: false
        }
    }
    // 显示弹窗
    show = () => {
        this.setState({
            popShow:true
        });
    }
    // 关闭弹窗
    hide = () => {
        this.setState({popShow:false});
    }
    render() {
        return (
            <div className="box-warp job">
                <h1>Android 开发经理</h1>
                <div className="job-con">
                    <p>
                        <strong>岗位职责</strong>
                        <br/> 1、 负责Android端技术架构搭建，功能模块设计、开发和优化；
                        <br/> 2、 与产品管理、测试和其他团队协作，分析产品需求，制定技术方案，攻克技术难题；
                        <br/> 3、 负责android技术团队的建设、管理，保障项目开发进度；
                        <br/>
                        <br/>
                        <strong>职位要求</strong>
                        <br/> 1、 大学本科及以上学历，2年以上团队管理或项目管理经验；
                        <br/> 2、 熟悉移动互联网行业及产品技术，熟悉C++、Android等平台；
                        <br/> 3、 具有4年android系统开发规划经验，有独立承担APP产品研发管理经验或者能力；
                        <br/> 4、 良好的良好的沟通能力和优秀的团队协作能力。
                        <br/>
                        <br/> 工作地点：厦门
                    </p>
                    <input type="button"  name="applyBtn" className="apply-btn"  value="我要应聘" onClick={this.show}/>
                </div>
                <Pop show={this.state.popShow} hide={this.hide}/>
            </div>
        );
    }
};

export default RecruitDetail;