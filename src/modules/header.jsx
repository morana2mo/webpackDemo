import Dropdown from "../components/dropdown";
import  "./header.less";

const data = ['个人主页','退出登录'];
const login = ['登录','注册'];

class Head extends React.Component {
  	render() {
	    return (
	      <header className="header">
	        <Dropdown results={data} />
	      </header>
	    );
	}

}


export default Head;