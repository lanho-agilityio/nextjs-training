'use client';
import useSWR from 'swr';
import {
  AvatarWrapper,
  Container,
  DescriptionWrapper,
  HeaderContainer,
  HeaderStyled
} from './page.styled';
import { FetchService } from '../../../services/fetchApi';
import { API_ENDPOINTS } from '../../../constants/fetch';
import { FETCH_METHODS } from '../../../enums/fetch';
import PostList from '../../../components/PostList';

const AuthorPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  const { data, error, isLoading } = useSWR(
    `${API_ENDPOINTS.USERS}/${id}?&_embed=posts`,
    (url) => FetchService.fetch(url, FETCH_METHODS.SSR)
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <HeaderContainer>
        <AvatarWrapper />
        <HeaderStyled variant="h1">{id}</HeaderStyled>
        <DescriptionWrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </DescriptionWrapper>
      </HeaderContainer>
      <PostList
        data={data instanceof Error || data === undefined ? [] : data.posts}
        user={data}
      />
    </Container>
  );
};

export default AuthorPage;
