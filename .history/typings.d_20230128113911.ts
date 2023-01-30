
type DataEntry = {
    author: string | null
    category: string;
    country
}

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
};



type NewsResponse = { 
    pagination: Pagination;
    data: DataEntry[];
};

type Category =
    "general"
    "business"
    "entertainment"
    "health"
    "science"
    "sports"
    "technology";