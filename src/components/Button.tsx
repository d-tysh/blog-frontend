import classNames from "classnames";
import { Loader } from "./Loader";
import { IButtonProps } from "../interfaces/interfaces";

export const Button = (props: IButtonProps) => {
    const { text, isLoading, type = "submit", onClick, disabled, width } = props;

    return (
        <button type={type} className={classNames(`h-12 w-[${width}px]`)} onClick={onClick} disabled={disabled}>
            {isLoading ? <Loader size={24} /> : text}
        </button>
    )
}