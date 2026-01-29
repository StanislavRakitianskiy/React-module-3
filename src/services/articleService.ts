import axios from "axios";
import type { Article } from "../types/article";
interface FetchArticlesResponse {
  hits: Article[];
}
const FetchArticles = async (searchTerm: string): Promise<Article[]> => {
  const response = await axios.get<FetchArticlesResponse>(
    `https://hn.algolia.com/api/v1/search?query=${searchTerm}`,
  );
  return response.data.hits;
};

export default FetchArticles;
