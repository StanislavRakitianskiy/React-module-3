import { useState, useEffect } from "react";
import "../App.css";
import SubmitData from "./SubmitData/SubmitData";
import SubmitSelect from "./SubmitProps/SubmitProps";
import AsetsMapItems from "./AsetsList/AsetsList";
import HTTPServerSubmet from "./HTTPServerSubmet/HTTPServerSubmet";
import FetchArticles from "../services/articleService";
import RadioBtn from "./RadioBtn/RadioBtn";
import CheckBox from "./CheckBox/CheckBox";
import SelectOp from "./SelectOp/SelectOp";
import type { Article } from "../types/article";
import Timer from "./Timer/Timer";
import axios from "axios";

const handleSubmitProps = (value: string) => {
  console.log("Submitted value from SubmitProps:", value);
};

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [person, setPerson] = useState(null);
  const [cont, setCont] = useState(1);
  const [start, setStart] = useState(false);

  useEffect(() => {
    async function fetchPersonStars() {
      const responsy = await axios.get(`https://swapi.info/api/people/${cont}`);
      try {
      setPerson(responsy.data);
      } catch (error) {
        console.error("Error fetching person data:", error);
      } 
    }
    fetchPersonStars();
  }, [cont]);

  const handleSubmit = async (searchTerm: string) => {
    try {
      setIsLoading(true);
      setError(false);
      const fetchedArticles = await FetchArticles(searchTerm);
      setArticles(fetchedArticles);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SubmitData />
      <SubmitSelect onSubmit={handleSubmitProps} />
      <HTTPServerSubmet onSubmit={handleSubmit} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching articles. Please try again.</p>}
      <AsetsMapItems items={articles} />
      <RadioBtn />
      <CheckBox />
      <SelectOp />
      <button onClick={() => setCont(cont + 1)}>Next Person {cont}</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <button onClick={() => setStart(!start)}>
        {start ? 'Hide timer' : 'Show timer'}
      </button>
      {start && <Timer />}
    </>
  );
}

export default App;
