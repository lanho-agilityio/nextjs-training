'use client';
import useSWR from 'swr';
import PostList from '../components/PostList';
import { API_ENDPOINTS } from '../constants/fetch';
import { FETCH_METHODS } from '../enums/fetch';
import { FetchService } from '../services/fetchApi';

export default function Home() {
  const { data, error, isLoading } = useSWR(API_ENDPOINTS.POSTS, (url) =>
    FetchService.fetch(url, FETCH_METHODS.ISR)
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      <PostList data={data}/>
    </main>
  );
}
