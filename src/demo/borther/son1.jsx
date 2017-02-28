class List extends React.Component{
	render(){
		let selectedStyle = {
			color:'white',
			background:'red'
		};
		return (
			<ul>
				{this.props.list.map((item,index)=>{
					let itemStyle = (item == this.props.curItem ) ? selectedStyle : {};
					return (
						<li key={index} data={item} style = {itemStyle}> i am {item}</li>	
					)
				})}
			</ul>
		)
	}
}

export default List;