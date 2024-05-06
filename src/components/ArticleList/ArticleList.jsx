import css from './ArticleList.module.css';

export default function ArticleList({ items }) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.objectID}>
          <a className={css.link} href={item.url}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

/*import { useEffect, useState } from 'react';




import axios from 'axios';

export default function ArticleList({ items }) {
  return (
    <ul>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
*/
