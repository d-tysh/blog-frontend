export const getDate = (date: Date | string) => {
    return new Date(date).toDateString();
}