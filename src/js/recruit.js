/**
 * 
 * @authors Your Name (lml)
 * @date    2016-01-05 13:47:22
 * @version 1.0
 */
var page = 1;
var scrollType = 1;

//react读取ajax数据
var OfficePage = React.createClass({displayName: "OfficePage",
  styleFun: function(){
    $(".off-tab tbody tr:nth-child(even)").css("background-color", "#fafafa");
    $(".off-tab tbody tr:first-child td").css("padding", "25px 15px 15px");
  }.bind(this),
	loadCommentsFromServer: function() {
    $(".job").hide();
    $.ajax({
      url: "/api.php?m=Occupation&a=index",
      dataType: 'json',
      type: 'get',
      data:{
     	  page : page,
      	pageLimit : 10,
      	is_ajax : 1
      },
      success: function(data) {
      	if(data.status == 201){
          $(".load").html("所有职位已经全部加载完了哦！");
      		return false;
      	}
      	$(".load").hide();
        var data2 = this.state.data.concat(data.result);
        this.setState({data: data2});
        this.styleFun();
      }.bind(this),
      error: function(message) {
      	/*console.log(message);*/
      }.bind(this)
    });
  },
  searchServer: function(keyWord) {
    scrollType = 0;
    $.ajax({
      url: "/api.php?m=Occupation&a=search",
      dataType: 'json',
      type: 'get',
      data:{
        keyword : keyWord
      },
      success: function(data) {
        if(data.status == 201){
          $(".off-tab tbody").hide();
          $(".load").show();
          $(".load").html("没有搜索到与&quot;"+ keyWord +"&quot;相关的职位哦!");
          return false;
        }
        if(data != ""){
          $(".off-tab tbody").show();
          $(".load").hide();
          this.setState({data: data.result});
          this.styleFun();
          $(".off-tab tbody tr:nth-child(odd)").css("background-color", "#fff");
            $(".load").show();
            $(".load").html("以上是符合条件的所有招聘职位！");
        }
        else{
          $(".off-tab tbody").show();
          $(".load").show();
          $(".load").html("以上是所有招聘职位！");
        }
        
      }.bind(this),
      error: function(message) {
        /*console.log(message);*/
      }.bind(this)
    });
  },
  detailServer: function(oId) {
    scrollType = 0;
    $.ajax({
      url: "/api.php?m=Occupation&a=officeDetail",
      dataType: 'json',
      type: 'get',
      data:{
        occupation_id : oId,
        is_ajax : 1
      },
      success: function(data) {
        this.setState({detailData: data.result});
      }.bind(this),
      error: function(message) {
        /*console.log(message);*/
      }.bind(this)
    });
  },
  scrollBottom: function(){
    $(window).scroll(function(){
        var winBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if(winBottom == 0){
          if(scrollType == 1){
            $(".load").show();
            page++;
            this.loadCommentsFromServer();
          }
        }
    }.bind(this));
  },
  getInitialState: function() {
    return {
      data: [],
      detailData:[]
    };
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  	this.scrollBottom();
  },
	render: function(){
		return  (
      React.createElement("div", null, 
        React.createElement("div", {id: "searchArea"}, 
          React.createElement(search-box, {onSearch: this.searchServer})
        ), 
        React.createElement("div", {className: "box-warp office-box"}, 
    			React.createElement("table", {className: "off-tab"}, 
    				React.createElement(Theader, null), 
          	React.createElement(Tbody, {data: this.state.data, showDetail: this.detailServer}), 
            React.createElement(Tfooter, null)
          )
        ), 
        React.createElement(OfficeDetail, {data: this.state.detailData})
      )
      );
	}
});
var search-box = React.createClass({displayName: "search-box",
    handleSubmit: function(e) {
      $(".job").hide();
      $(".office-box").show();
      e.preventDefault();
      var keyWord = this.refs.keyWord.value.trim();
      this.props.onSearch(keyWord);
      this.refs.keyWord.value = '';
      return;
    },
    keyboard: function(e) {
        var keyCode = e.keyCode?e.keyCode:e.which?e.which:e.charCode;
        if (keyCode ==13){
            $(".job").hide();
            $(".office-box").show();
            e.preventDefault();
            var keyWord = this.refs.keyWord.value.trim();
            this.props.onSearch(keyWord);
            this.refs.keyWord.value = '';
            return;
        }
    },
    render: function(){
      return (
        React.createElement("div", {className: "search-box clear-fix"},
          React.createElement("input", {name: "search", placeholder: "请输入职位关键字", ref: "keyWord", onKeyPress: this.keyboard}),
          React.createElement("input", {type: "button", name: "searchBtn", value: "搜索职位", onClick: this.handleSubmit})
        )
        
        )
    }
});
var OfficeDetail = React.createClass({displayName: "OfficeDetail",
      clickMe : function() {
          $(".pop-box,.mask").show();
      },
      jobreturn : function(){
              $("#recruitPage .job").css({
                  "display": "none"
              });
              $("#recruitPage .office-box").css({
                  "display": "block"
              });
      },
      render : function() {
          $("#duty").html(this.props.data.occupation_duty);
          $("#require").html(this.props.data.occupation_require);
          return (
              React.createElement("div", {className: "box-warp job"}, 
                  React.createElement("h1", null, this.props.data.occupation_name,React.createElement("br", null) , React.createElement("span", {className: "jobTitle"}, this.props.data.occupation_title), React.createElement("a", {className: "jobReturn",href: "javascript:;", onClick: this.jobreturn}, "返回")),
                  React.createElement("div", {className: "job-con"}, 
                      React.createElement("p", null, 
                          React.createElement("strong", null, "岗位职责"), React.createElement("br", null), 
                          React.createElement("span", {id: "duty"})
                      ), 
                      React.createElement("p", null, 
                          React.createElement("strong", null, "岗位要求"), React.createElement("br", null), 
                           React.createElement("span", {id: "require"})
                      ), 
                      React.createElement("p", null, "工作地点：", this.props.data.occupation_city), 
                      React.createElement("input", {type: "button", name: "applyBtn", className: "applyBtn", value: "我要应聘", onClick: this.clickMe})
                  )
              )
          )
      }
})
var Theader = React.createClass({displayName: "Theader",
    render: function(){
        return  (
            React.createElement("thead", null, 
                React.createElement("tr", null, React.createElement("th", {className: "o-name"}, "职位名称"), React.createElement("th", {className: "o-part"}, "所属部门"), React.createElement("th", {className: "o-address"}, "工作地点"), React.createElement("th", {className: "o-request"}, "职位需求"))
            )
            );
    }
});

var Tfooter = React.createClass({displayName: "Tfooter",
	render: function(){
		return (
			React.createElement("tfoot", null, 
         React.createElement("tr", null, 
             React.createElement("td", {colSpan: "4"}, React.createElement("p", {className: "load"}, React.createElement("img", {src: "/statics/recruit/images/load.gif", alt: "数据demo"}), React.createElement("br", null), "努力加载中"))
         )
      )
      )
	}
})
var Tbody = React.createClass({displayName: "Tbody",
    showCon : function(oId){
      this.props.showDetail(oId);
      $(".job").show();
      $(".office-box").hide();
    },
    render: function(){ 
          var trData = this.props.data.map(function(data){
            var a = React.createElement("span", null, data.occupation_name);
            if(data.is_hot==0){
              a = React.createElement("span", {className: "new"}, data.occupation_name)
            }
            return(
                    React.createElement("tr", {key: data.occupation_id}, React.createElement("td", null, a), React.createElement("td", null, data.depar_name), React.createElement("td", null, data.occupation_city), React.createElement("td", null, React.createElement("a", {href: "javascript:;", className: "btn-detail", onClick: function(){this.showCon(data.occupation_id)}.bind(this)}, "职位详情")))
                    )
            },this);
          return  (
          React.createElement("tbody", null, 
           trData
          )
          );
    }
});

ReactDOM.render(React.createElement(OfficePage, null),$("#recruitPage").get(0));