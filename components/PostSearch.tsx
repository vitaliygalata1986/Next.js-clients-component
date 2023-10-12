'use client';

import { getPostsBySearch } from '@/app/services/getPosts';
import { FormEventHandler, useState } from 'react';

type Props = {
  onSearch: (value: any[]) => void; // функция ничего возвращать не будет
};

function PostSearch({ onSearch }: Props) {
  const [search, setSearch] = useState('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);
    onSearch(posts); // отправим посты
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default PostSearch;
