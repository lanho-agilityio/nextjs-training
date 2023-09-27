'use client';
import SearchBar from '../../components/SearchBar';
import { Filter } from '../../types/filter';
import { Container, HeaderContainer, HeaderStyled } from './search.styled';
import { API_ENDPOINTS } from '../../constants/fetch';
import PostList from '../../components/PostList';
import { usePostContext } from '../../hooks/usePostContext';

const SearchPage = (): JSX.Element => {
  const { searchPosts, params, changeParams } = usePostContext();

  if (searchPosts.error) return <div>failed to load</div>;
  if (searchPosts.isLoading)
  return (
    <div
      role="loading"
      className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8"
    >
      <h1 className="text-center animate-pulse">Loading</h1>
    </div>
  );

  const handleSearch = (data: Filter) => {
    changeParams(data);
    searchPosts.mutate(API_ENDPOINTS.POSTS);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">Search</HeaderStyled>
      </HeaderContainer>
      <SearchBar value={params} onSubmit={handleSearch} />
      <PostList
        data={
          searchPosts.data instanceof Error || searchPosts.data === undefined
            ? []
            : searchPosts.data
        }
      />
    </Container>
  );
};

export default SearchPage;
