'use client';
import { Box } from '@mui/material';
import Tag from '../../../components/Tag';
import {
  AuthorContainer,
  AuthorStyled,
  AvatarWrapper,
  Container,
  ContentWrapper,
  HeaderContainer,
  HeaderWidth,
  Name,
  PicWrapper,
  TagContainer,
  TitleStyled
} from './postDetail.styled';
import Image from 'next/image';
import { API_ENDPOINTS } from '../../../constants/fetch';
import { FetchService } from '../../../services/fetchApi';
import { FETCH_METHODS } from '../../../enums/fetch';
import useSWR from 'swr';

const PostPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  const { data, error, isLoading } = useSWR(
    `${API_ENDPOINTS.POSTS}/${id}?&_expand=user`,
    (url) => FetchService.fetch(url, FETCH_METHODS.SSR)
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <HeaderContainer>
        <HeaderWidth>
          <TagContainer>
            {data.tag && (
              <Tag
                key={data.tag.id}
                title={data.tag.name}
                color={data.tag.color}
                href={`/category/${data.tag.name}`}
              />
            )}
          </TagContainer>
          <TitleStyled>{data.title}</TitleStyled>
          <AuthorContainer>
            <AuthorStyled href={`/author/${data.user.id}`}>
              <AvatarWrapper />
              <Box>
                <Name>{data.name}</Name>
                <time
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: '#6B7280'
                  }}
                >
                  {new Date(data.dateCreated).toDateString()}
                </time>
              </Box>
            </AuthorStyled>
          </AuthorContainer>
        </HeaderWidth>
      </HeaderContainer>
      <PicWrapper>
        {data.imageBase64 && (
          <Image
            src={data.imageBase64}
            alt="Post Image"
            width={100}
            height={100}
            priority
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
              color: 'transparent'
            }}
          ></Image>
        )}
      </PicWrapper>
      <ContentWrapper>
        <article
          style={{ maxWidth: '768px', marginRight: 'auto', marginLeft: 'auto' }}
        >
          {data.content}
        </article>
      </ContentWrapper>
    </Container>
  );
};

export default PostPage;
