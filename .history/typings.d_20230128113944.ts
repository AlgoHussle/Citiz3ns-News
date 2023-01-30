
type DataEntry = {
    author: string | null
    category: string;
    country:| string;
    description: string;
    
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