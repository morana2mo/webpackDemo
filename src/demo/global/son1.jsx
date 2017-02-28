import EventEmitter from  "./EventEmitter";

class CurItemPanel extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			curItem :'item1'
		}
	}
	componentDidMount() {
		EventEmitter.subscribe('changeItem',(newItem)=>{
			this.setState({
				curItem:newItem
			});
		})
	}
	componentWillUnmount() {
		EventEmitter.unSubscribe('changeItem');
	}
	render(){
		return(
			<p>
				The curItem is: {this.state.curItem}
			</p>
		)
	}
}

export default CurItemPanel;