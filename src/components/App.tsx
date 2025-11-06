import { useState } from "react";

import FormDatas from "./formData";
import FormAction from "./formAction";
import FormComponents from "./formComponent";
import SearchForm from "./searchForm";
import type { Article } from "../types/article";
import ArticleList from "./articleList";
import { fetchArticles } from "../services/articleService";

import "../App.css";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleOrder = (data: string) => {
    console.log("Order receiced form: ", data);
    // можна зберегти замовлення, викликати API, показати повідомлення тощо
  };
  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchArticles(topic);
      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <FormDatas></FormDatas>
      <FormAction></FormAction>
      <FormComponents onSubmit={handleOrder}></FormComponents>
      <SearchForm onSubmit={handleSearch}></SearchForm>
      {isLoading && <p>Please wait, its Loading</p>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}

export default App;
