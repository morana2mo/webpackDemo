
class List extends React.Component {
	onClickItem(item){
		this.props.changeItem(item);
	}
	render(){
		return(
			<ul>
				{this.props.list.map((item,index)=>{
					return (
						<li key={index} data={item}  onClick={this.onClickItem.bind(this,item)}> 
						i am {item} 
						</li>
					) 
				})}
			</ul>
		)
	}
}
export default List;