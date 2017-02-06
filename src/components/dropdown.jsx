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
    this.setState({status:!this.state.status});
  }
  hide(){
    if(this.state.status){
      this.setState({status:!this.state.status});
    }
  }
  render() {
    
    return (
    	<div className = {this.state.status ? 'dropdown on' :'dropdown'}
       onClick={this.tick.bind(this)}>
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
	isOpen:false,
}
Dropdown.propTypes = {
	isOpen:React.PropTypes.bool.isRequired,
}

export default Dropdown;