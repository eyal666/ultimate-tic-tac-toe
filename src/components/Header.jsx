import './../css/Header.css'
import Button from "./Button";

export default function Header() {
	// todo:
	//  new game button
	//  show num of steps
	//  show who's turn is
	//  show turn stage and give instructions
	return (
		<div className="header-container">
			<Button primary={true} label={'Primary'}/>
			<Button primary={false} label={'Secondary'}/>
		</div>
	)
}