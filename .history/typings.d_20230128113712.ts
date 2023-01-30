


type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: I
}



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