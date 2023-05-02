import './Button.styles.css';

interface Props {
    label: string;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick: () => void;
}

export const Button = ({ label, disabled, onClick, type }: Props) => {
    const classnames = disabled ? 'button button-disabled' : 'button';
    return (
        <div className='button-container'>
            <button type={type} className={classnames} disabled={disabled} onClick={onClick}>
                {label}
            </button>
        </div>

    );
}