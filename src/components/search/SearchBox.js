import React from 'react';
import '@/styles/search/search.scss';

class SearchBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            keyWord : '123'
        };
    }
    getJobList = () => {
        this.props.getJobList({ keyWord: this.state.keyWord });
    }
    setKeyWord = ({ target: { value } }) => {
        this.setState({
            keyWord: value
        });
    }
    render() {
        return (
            <div id="searchArea" name="searchArea">
                <div className="search-box clear-fix">
                    <input name="search" placeholder="请输入职位关键字" onChange={ this.setKeyWord } />
                    <input type="button" name="searchBtn" value="搜索职位" onClick={ this.getJobList } />
                </div>
            </div>
        );
    }
};

export default SearchBox;