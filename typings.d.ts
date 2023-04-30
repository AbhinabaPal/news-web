type Category =
    | "business"
    | "sports"
    | "entertainment"
    | "general"
    | "technology"
    | "health"
    | "science";

type NewsResponse = {
    pagination: Pagination;
    data: Article[];
};

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
};

type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    publishedAt: string;
    source: string;
    title: string;
    url: string;
};
