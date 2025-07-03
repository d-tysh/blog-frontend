import { Loader } from "./Loader";
import { IButtonProps } from "../interfaces/interfaces";

export const Button = ({ isLoading, width, children, ...restProps }: IButtonProps) => {
    return (
        <button className='h-12' style={{ width }} {...restProps}>
            {isLoading ? <Loader size={24} /> : children}
        </button>
    )
}