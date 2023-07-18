import './styles.css';

export const Button = ({text, onClick, disabled}) => {
    return (
        <button
            className="btn-load-more"
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    );
}
