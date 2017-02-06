import  "./dropdown.less";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      status: props.isOpen
    };
  }
  componentDidMount(){
     document.onclick = this.hide.bind(this);
  }
  tick(e) {
    e.nativeEvent.stopImmediatePropagation();
  	let statuss =  this.state.status == 'dropdown' ? 'dropdown on' : 'dropdown'; 
    this.setState({status: statuss});
  }
  
  hide(){
    let statuss = 'dropdown'
    if(this.state.status == 'dropdown on'){
       this.setState({status: statuss});
    }
  }
  render() {
    
    return (
    	<div className = {this.state.status} onClick={this.tick.bind(this)}>
    		<img src={require('../assets/img/img.jpg')} className="avater-sm"/>
        <ul className="dropdown-menu">
            {React.Children.map(this.props.children, (child)=>{
              return <li>{child}</li>;
            })}
         
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
}

export default Dropdown;