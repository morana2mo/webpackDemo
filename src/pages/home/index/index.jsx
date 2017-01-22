import Head from "../../../modules/header";
import  "./style.less";
class Hello extends React.Component {
  render() {

    return(
    	<div>
    	 	<Head/>
    	</div>
    )
  }
}
 
ReactDOM.render(<Hello/>, document.getElementById('app'));