import React from 'react';

const Footer = () =>  {
    return (
        <div id="footer">
            <div className="box-warp clear-fix">
                <div className="page-list">
                    <div>
                        <h3><a href="#">解读</a></h3>
                        <ul>
                            <li>解读</li>
                            <li>企业文化</li>
                            <li>使命与愿景</li>
                        </ul>
                    </div>
                </div>
                <div className="page-list">
                    <div>
                        <h3><a href="#">产品体系</a></h3>
                    <ul>
                            <li>相生一课</li>
                            <li>相生美物</li>
                            <li>冷笑话精选</li>
                        </ul>
                    </div>
                </div>
                <div className="page-list">
                    <div>
                        <h3><a href="#">动态</a></h3>
                        <ul>
                            <li>资讯</li>
                            <li>媒体报道</li>
                        </ul>
                    </div>
                </div>
                <div className="page-list">
                    <div>
                        <h3><a href="#" target="_blank">我们</a></h3>
                        <ul>
                            <li>社会招聘</li>
                            <li>校园招聘</li>
                            <li>公司福利</li>
                        </ul>
                    </div>
                </div>
                <div className="page-list">
                    <div>
                        <h3><a href="#">联系</a></h3>
                        <ul>
                            <li>联系方式</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;