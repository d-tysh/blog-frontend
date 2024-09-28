import { useSelector } from "react-redux";
import { selectTotalCount } from "../redux/news/selectors";
import { SyntheticEvent, useState } from "react";
import classNames from "classnames";
import { IPagination } from "../interfaces/interfaces";
import { generatePageNumbers } from "../utils/paginationUtils";

export const Pagination = ({ clickHandler, limit }: IPagination) => {
    const totalCount = useSelector(selectTotalCount);
    const [activePage, setActivePage] = useState(1);

    const pages = totalCount && Math.ceil(totalCount / limit);
    const visiblePagesLimit = 1;

    const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
        const { value } = e.target as HTMLButtonElement;
        const page = +value;
        setActivePage(page);
        clickHandler(e, page);
    };

    const handlePrev = (e: SyntheticEvent<HTMLButtonElement>) => {
        const page = activePage - 1;
        if (page >= 1) {
            setActivePage(page);
            clickHandler(e, page);
        }
    };

    const handleNext = (e: SyntheticEvent<HTMLButtonElement>) => {
        const page = activePage + 1;
        if (pages && page <= pages) {
            setActivePage(page);
            clickHandler(e, page);
        }
    };

    const pageNumbers = generatePageNumbers(pages, activePage, visiblePagesLimit);

    return (
        <ul className="flex justify-center my-4 gap-1">
            <li>
                <button onClick={handlePrev} disabled={activePage === 1}>⬅ Prev</button>
            </li>
            {
                pageNumbers.map((page, index) => <li key={index}>
                    {typeof page === "number" ? (
                        <button
                            onClick={onClick}
                            value={page}
                            className={classNames("hover:bg-slate-200", {
                                "bg-slate-400 text-white": activePage === page,
                            })}
                        >
                            {page}
                        </button>
                    ) : <span className="px-2">...</span>}
                </li>
            )}
            <li>
                <button onClick={handleNext} disabled={activePage === pages}>Next ➡</button>
            </li>
        </ul>
    );
};