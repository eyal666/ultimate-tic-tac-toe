import './../css/Button.css'

export default function Button({primary, onButtonClick, label}) {
	return (
		<button className={`button-${primary ? 'primary' : 'secondary'}`} onClick={onButtonClick}>{label}</button>
	)
}