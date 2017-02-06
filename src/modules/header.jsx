import Dropdown from "../components/dropdown";
import  "./header.less";

class Head extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	status: props.isLogin,
	    };
	}
	changeState(event){
		this.setState({status: !this.state.status});
	}
  	render() {
  		let dropdownList;
  		if(!!this.state.status){
  			dropdownList = 	<Dropdown>
					       	<a href="javascript:;" onClick={this.changeState.bind(this)}>登录</a>
					       	<a href="javascript:;">注册</a>
					    </Dropdown>
  		}else{
  			dropdownList = 	<Dropdown>
					       	<a href="javascript:;">主页</a>
					       	<a href="javascript:;" onClick={this.changeState.bind(this)}>退出</a>
					    </Dropdown>
  		}
	    return (
	      <header className="header">
	      	{dropdownList}
	      </header>
	    );
	}

}

Head.defaultProps = {
	isLogin:0,
}
Head.propTypes = {
	isLogin:React.PropTypes.number,
}

export default Head;