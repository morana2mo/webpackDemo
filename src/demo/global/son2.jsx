import EventEmitter from  "./EventEmitter";

class SelectionButtons extends React.Component{
	onClickItem(item){
		EventEmitter.dispatch('changeItem',item);
	}
	render(){
		return(
			<div>
				<button onClick={this.onClickItem.bind(this, 'item1')}>item1</button>
				<button onClick={this.onClickItem.bind(this, 'item2')}>item2</button>
			</div>
		)
	}
}
export default SelectionButtons;