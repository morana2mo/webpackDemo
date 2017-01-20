import Hellos from "./main";
class Hello extends React.Component {
  render() {

    return(
    	<div>
    	 	<h1>Hello</h1>
    	 	<Hellos />
    	</div>
    )
  }
}
 
ReactDOM.render(<Hello/>, document.getElementById('app'));