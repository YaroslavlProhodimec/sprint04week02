export type QueryParamsWithSearch = PaginationSortingQueryParams & {
    searchNameTerm: string;
};
export type PaginationSortingQueryParams = {
    sortBy: string;
    sortDirection: "asc" | "desc";
    pageNumber: string;
    pageSize: string;
};
