class Li  extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(<li><a href={this.props.href}>{this.props.val}</a></li>)
  }
}

Li.defaultProps = {
  href:'javascript:;',
  val:'',
}
Li.propTypes = {
  href: React.PropTypes.string.isRequired,
  val : React.PropTypes.string.isRequired
}

export default Li;