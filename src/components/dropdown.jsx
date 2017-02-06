import  "./dropdown.less";
import Li from  "./Li";
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      status: props.isOpen,
      child:props.children, 
    };
  }
  tick() {
  	let statuss =  this.state.status == 'dropdown' ? 'dropdown on' : 'dropdown'; 
    this.setState({status: statuss});
  }
  render() {
    return (
    	<div className = {this.state.status} onClick={this.tick.bind(this)}>
    		<img src={require('../assets/img/img.jpg')} className="avater-sm"/>
       <ul className="dropdown-menu">
         {child}
       </ul>
    	</div>
    );
  }

}
Dropdown.defaultProps = {
	isOpen:'dropdown',
}
Dropdown.propTypes = {
	isOpen:React.PropTypes.string.isRequired,
  children:React.PropTypes.node,
}

export default Dropdown;