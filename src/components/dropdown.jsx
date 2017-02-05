import  "./dropdown.less";
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: props.isOpen };
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
           {this.props.results.map((result,index)=>{
              return <li key={index} data={result} ><a href="javascript:;">{result}</a></li>;
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
	isOpen:React.PropTypes.string.isRequired
}

export default Dropdown;