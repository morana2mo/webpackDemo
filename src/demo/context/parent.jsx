import CurItemWrapper from "./son1";
import ListWrapper from "./son3";

class MyContainer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			curItem:'item1'
		}
	}
	getChildContext(){
		return {
			curItem: this.state.curItem,
			changeItem: this.changeItem.bind(this)
		}
	}
	changeItem(item){
		this.setState({curItem:item})
	}
	render(){
		return(
			<div>
				<CurItemWrapper />
				<ListWrapper changeItem={this.changeItem.bind(this)} />
			</div>
		)
	}
}
MyContainer.childContextTypes = {
	curItem: React.PropTypes.any,
	changeItem: React.PropTypes.any
}

export default MyContainer;