import List from "./list";

class MyContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list:['item1','item2'],
			curItem:'item1'
		}
	}
	changeItem(item){
		console.log(item);
		this.setState({curItem: item});
	}
	render(){
		return (
			<div>
				The curItem is : {this.state.curItem}
				<List list={this.state.list} changeItem={this.changeItem.bind(this)} />
			</div>
		)
	}
}
export default MyContainer;