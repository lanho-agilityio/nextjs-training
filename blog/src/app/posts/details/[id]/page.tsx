'use client';
import { Avatar, Box } from '@mui/material';
import Tag from '../../../../components/Tag';
import { MOCK_AUTHOR } from '../../../../mocks/author';
import { MOCK_POST } from '../../../../mocks/post';
import {
  AuthorContainer,
  AuthorStyled,
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

const PostPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  const post = MOCK_POST;
  const author = MOCK_AUTHOR;

  return (
    <Container>
      <HeaderContainer>
        <HeaderWidth>
          <TagContainer>
            {post.tag && (
              <Tag
                key={post.tag.id}
                title={post.tag.name}
                color={post.tag.color}
                href={`/category/${post.tag.name}`}
              />
            )}
          </TagContainer>
          <TitleStyled>
            {post.title}-{id}
          </TitleStyled>
          {/* <AuthorContainer>
            <AuthorStyled href={`/author/${author.name}`}>
              <Avatar
                alt={author.name}
                src={author.imagePath}
                sx={{ width: 50, height: 50 }}
              />
              <Box>
                <Name>{author.name}</Name>
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
                  {post.dateCreated.toDateString()}
                </time>
              </Box>
            </AuthorStyled>
          </AuthorContainer> */}
        </HeaderWidth>
      </HeaderContainer>
      <PicWrapper>
        <Image
          src={post.imageBase64}
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
      </PicWrapper>
      <ContentWrapper>
        <article
          style={{ maxWidth: '768px', marginRight: 'auto', marginLeft: 'auto' }}
        >
          {post.content}
        </article>
      </ContentWrapper>
    </Container>
  );
};

export default PostPage;
