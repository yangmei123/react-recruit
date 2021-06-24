import React from 'react';
import closeImage from '@/assets/images/close.jpg';

const Recruit = () =>  {
    return (
    <div>
        <div className="mask"></div>
        <div className="pop-box">
            <h3>DEAR:<span className="close"><img src={closeImage} width="17" height="17"  alt="招聘"/></span></h3>
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
};

export default Recruit;