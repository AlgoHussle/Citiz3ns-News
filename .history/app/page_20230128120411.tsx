import { categories } from "../constants";

async function Homepage() {
// fetch the news data //
const news: NewsResponse = await fetchNews(categories.join(','))
  

  return (
    <div>
      {/* NewsList news */}
    </div>
  )
}

export default Homepage

function fetchNews(arg0: string): NewsResponse | PromiseLike<NewsResponse> {
  throw new Error("Function not implemented.");
}
