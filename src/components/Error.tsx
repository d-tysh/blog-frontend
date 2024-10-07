export const Error = ({ width = 200 }: { width?: number }) => {
    return (
        <div className="flex flex-col items-center gap-4 mx-auto" style={{ width }}>
            <p className="text-lg text-center">Oops, something went wrong...</p>
            <img src="/error.png" alt="Error" />
        </div>
    )
}