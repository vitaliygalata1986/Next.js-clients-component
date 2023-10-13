'use client';
import type { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../services/getPosts';
import Posts from '@/components/Posts';
import PostSearch from '@/components/PostSearch';
import { Preloader } from '@/components/Preloader';
/*
const a = (info: any) => {
  console.log(info);
};
getAllPosts().then(a);
*/

export const metadata: Metadata = {
  title: 'Blog | Next App',
  description: 'Blog page',
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <Preloader /> : <Posts posts={posts} />}
    </>
  );
}
