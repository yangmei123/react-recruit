import React from 'react';
import './loadMore.scss';

class LoadMore extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            targetContent: window
        };
      }
    componentDidMount() {
        this.loadEvent();
    }
    // 滚动事件注册
    loadEvent() {
        const targetContent = this.props.useWindow ? window : this.getScrollParent();
        console.log(targetContent);
        this.setState({
            targetContent
        });
        // 添加滚动监听事件
        targetContent.addEventListener('scroll', this.loadMore);
    }
    // 获取加载所在控制的父级元素
    getScrollParent() {
        return document.getElementById('loadMoreContent').parentNode || window;
    }
    // 通知父组件已经触发加载更多事件
    loadMore = () => {
      // 监听滚动事件，滑动到底部加载出列表
      const { state: { targetContent } } = this;
      const getHeightAttr = this.props.useWindow ? {
        scrollHeight: 'scrollHeight',
        clientHeight: 'innerHeight',
        scrollTop: 'scrollTop',
      } : {
        scrollHeight: 'scrollHeight',
        scrollTop: 'scrollTop',
        clientHeight: 'clientHeight'
      };
      // 这里向上取整，注意有的屏幕会出现.5的像素
      let scrollHeight = targetContent[getHeightAttr.scrollHeight];
      let clientHeight = Math.ceil(targetContent[getHeightAttr.clientHeight]);
      let scrollTop = Math.ceil(targetContent[getHeightAttr.scrollTop]);
      if (!this.props.useWindow && !clientHeight) {
        window.onerror('请设置滚动区域的高度');
        return false;
      }
      if (this.props.useWindow) {
        scrollHeight = document.scrollingElement[getHeightAttr.scrollHeight];
        scrollTop = Math.ceil(document.scrollingElement[getHeightAttr.scrollTop]);
      }
      const isOnBottom = scrollHeight - scrollTop <= clientHeight;
      console.log(scrollHeight);
      console.log(scrollTop);
      console.log(clientHeight);
      console.log(isOnBottom);
      // 没到达滚动区域的底部或者上一个加载没结束就不要继续请求
      if (!isOnBottom || this.props.show) return false;
      this.props.requestMore();
    }
    render() {
        return (
        <div id="loadMoreContent">
            <div className="load-more text-center" style={{display:this.props.show ? 'inline-block' : 'none'}}>
                <span></span><span></span><span></span>
            </div>
        </div>
        );
    }
}

export default LoadMore;