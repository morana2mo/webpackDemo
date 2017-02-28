class List extends React.Component{
	onClickItem(item){
		this.context.changeItem(item)
	}
	render(){
		return (
			<ul>
				<li onClick={this.onClickItem.bind(this, 'item1')}>I am item1, click me</li>
				<li onClick={this.onClickItem.bind(this, 'item2')}>I am item2, click me</li>
			</ul>
		)
	}
}
List.contextTypes ={
	changeItem: React.PropTypes.any
}
export default List;