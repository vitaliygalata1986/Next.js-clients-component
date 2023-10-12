export const getAllPosts = async () => {
  const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60, // время в секундах - с каким промежутком мы хотим делать запросы
    },
  });
  if (!responce.ok) throw new Error('Unable to fetch posts');
  return responce.json();
};

export const getPostsBySearch = async (search: string) => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  if (!responce.ok) throw new Error('Unable to fetch posts');
  return responce.json();
};
