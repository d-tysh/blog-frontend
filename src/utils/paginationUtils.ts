export const generatePageNumbers = (pages: number | null, activePage: number, visiblePagesLimit: number) => {
    const pageNumbers = [];

    if (pages) {
        const startPages = [1];
        const endPages = [pages];

        const start = Math.max(activePage - visiblePagesLimit, 2);
        const end = Math.min(activePage + visiblePagesLimit, pages - 1);

        pageNumbers.push(...startPages);

        if (start > 2) {
            pageNumbers.push("...");
        }

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        if (end < pages - 1) {
            pageNumbers.push("...");
        }

        pageNumbers.push(...endPages);
    }

    return pageNumbers;
};