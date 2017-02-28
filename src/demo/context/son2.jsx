class CurItemPanel extends React.Component{
	render(){
		return(
			<p>
				The curItem is: {this.context.curItem}
			</p>
		)
	}
}
CurItemPanel.contextTypes ={
	curItem: React.PropTypes.any
} 
export default CurItemPanel;