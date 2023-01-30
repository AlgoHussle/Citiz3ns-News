


type Pagination = {
    count: Int;
    
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