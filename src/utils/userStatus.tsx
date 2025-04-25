export const userStatus = (isOnline: boolean) => 
    isOnline 
    ? <span title='Online' className="cursor-pointer">🟢</span>
    : <span title='Offline' className="cursor-pointer">🔴</span>