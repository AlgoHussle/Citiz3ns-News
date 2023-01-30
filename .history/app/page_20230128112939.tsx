import { categories } from "../constants";

async function Homepage() {
// fetch the news data //
const news = await fetchNews(categories.join(''))
  

  return (
    <div>
      {/* NewsList news */}
    </div>
  )
}

export default Homepage