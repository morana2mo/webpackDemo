class Dropdown extends React.Component {
constructor(props) {
    super(props);
    this.state = {status: props.isOpen};
  }
  tick() {
  	let statuss =  this.state.status == 'off' ? 'on' : 'off'; 
    this.setState({status: statuss});
  }
  render() {
    return (
        <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.status} 
        </div>
    );
  }

}
Dropdown.defaultProps = {
	isOpen:'off',
}
Dropdown.propTypes = {
	isOpen:React.PropTypes.string.isRequired,
}

export default Dropdown;