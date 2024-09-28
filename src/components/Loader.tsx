import { Oval } from "react-loader-spinner"

export const Loader = ({ size = 40 }: { size?: number }) => {
    return (
        <Oval
            visible={true}
            height={size}
            width={size}
            color="#646cff"
            ariaLabel="oval-loading"
            wrapperStyle={{ 'justifyContent': 'center' }}
            wrapperClass=""
        />
    )
}