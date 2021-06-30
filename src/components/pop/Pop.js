import React from 'react';
import closeImage from '@/assets/images/close.jpg';
import '@/styles/pop/pop.scss';

class Recruit extends React.Component {
    // 通知父组件已经触发关闭弹窗事件
    hide = () => {
        this.props.hide();
    }
    render() {
        return (
        <div>
            <div className="mask fixed top-0 left-0 z-10" style={{display:this.props.show ? 'inline-block' : 'none'}}></div>
            <div className="pop-box" style={{display:this.props.show ? 'inline-block' : 'none'}}>
                <h3>DEAR:<span className="close" onClick={this.hide}><img src={closeImage} width="17" height="17"  alt="招聘"/></span></h3>
                <div className="pop-con">
                    <p>很高兴遇见你~同时我们希望与你有合作的机会！以下通道方便您与我们取得联系：</p>
                    <ul>
                        <li className="mail">简历收取邮箱：<a href="mailto:hr@xxxxx.cn"><em>hr@xxxxxx.cn</em></a></li>
                        <li className="QQ">招聘问询QQ：<em>12323324234</em></li>
                        <li className="wechat">微信公众号：搜索“<em>招聘</em>”</li>
                        <li>（公众号可以查询面试结果哦~）</li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
};

export default Recruit;