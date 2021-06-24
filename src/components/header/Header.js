import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { recruit } from '@/constants/PagePath';
import logo from '@/assets/images/logo.png';

const Header = () =>  {
    return (
        <div id="header">
            <div className="box-warp">
                <h1 className="logo"><a href="/"><img src={logo} width="202" height="48" alt="官网" /></a><span>股票代码：43543534</span></h1>
                <ul className="header-nav">
                <HashRouter>
                    <li name="home"><Link to={ recruit().path }>首页</Link></li>
                    <li name="interpret"><Link to={ recruit().path }>解读</Link></li>
                    <li name="product"><Link to={ recruit().path }>产品体系</Link></li>
                    <li name="dynamic"><Link to={ recruit().path }>动态</Link></li>
                    <li name="joinus"><Link to={ recruit().path }>加入我们</Link></li>
                    <li name="contact"><Link to={ recruit().path }>联系</Link></li>
                </HashRouter>
                </ul>
            </div>
        </div>
    );
};

export default Header;