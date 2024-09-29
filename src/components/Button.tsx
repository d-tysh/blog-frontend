import { Loader } from "./Loader";
import { IButtonProps } from "../interfaces/interfaces";

export const Button = (props: IButtonProps) => {
    const { text, isLoading, type = "submit", onClick, disabled, width } = props;

    return (
        <button type={type} onClick={onClick} disabled={disabled}
            className='h-12'
            style={{ width }}
        >
            {isLoading ? <Loader size={24} /> : text}
        </button>
    )
}