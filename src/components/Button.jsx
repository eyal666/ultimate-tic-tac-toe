import '../css/Button.css'

export default function Button({label, onButtonClick, isPrimary}) {
	return (
		<button className={`button button-${isPrimary ? 'primary' : 'secondary'}`}
		        onClick={e => onButtonClick(e)}>{label}</button>)
}