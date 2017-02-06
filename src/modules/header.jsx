import Dropdown from "../components/dropdown";
import  "./header.less";

const data = [['登录','javascript:;'],['退出','javascript:;']];

class Head extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	status: props.isLogin,
	    	item:props.list,
	    };
	}
  	render() {
  		let dropdown;

  		if(!!this.state.status){
  			dropdown = <Dropdown list={data}/>
  		}else{
  			dropdown = <Dropdown list={data} />
  		}
	    return (
	      <header className="header">
	       	{dropdown}
	      </header>
	    );
	}

}

Head.defaultProps = {
	isLogin:0,
	list:[],
}
Head.propTypes = {
	isLogin:React.PropTypes.number,
	list:React.PropTypes.array.isRequired,
}

export default Head;