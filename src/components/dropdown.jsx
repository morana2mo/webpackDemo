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
    this.changeState();
  }
  hide(){
    if(this.state.status){
      this.changeState();
    }
  }
  changeState(){
    this.setState(prevState => ({
        status:!this.state.status
    }))
  }
  render() {
    
    return (
    	<div className = {this.state.status ? 'dropdown on' :'dropdown'}
       onClick={(e)=>this.tick(e)}>
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