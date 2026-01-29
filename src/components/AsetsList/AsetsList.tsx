import type { Article } from "../../types/article.ts";
interface AsetsProps {
  items: Article[];
}
function AsetsMapItems({ items }: AsetsProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}> 
            <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
export default AsetsMapItems;