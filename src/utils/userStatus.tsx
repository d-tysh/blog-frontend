export const userStatus = (status: string, text: string) => 
    <span title={status} className="cursor-pointer">
        {text}
    </span>;