export const getMetaDescription = (content: string, size = 160) => {
    const description = content
        .replace(/<[^>]*>/g, '')
        .slice(0, size);
    return description;
}