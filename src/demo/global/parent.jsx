import CurItemPanel from "./son1";
import SelectionButtons from "./son2";

class MyContainer extends React.Component{
	render(){
		return (
			<div>
				<CurItemPanel />
				<SelectionButtons/>
			</div>
		)
	}	
}
export default MyContainer;