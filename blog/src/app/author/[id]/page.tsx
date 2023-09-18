'use client';

import { Avatar } from '@mui/material';
import {
  Container,
  DescriptionWrapper,
  HeaderContainer,
  HeaderStyled
} from './page.styled';
import PostList from '../../../components/PostList';

const AuthorPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  return (
    <Container>
      <HeaderContainer>
        <Avatar
          alt={id.replace(/%20/g, ' ')}
          src={'/profilePic.png'}
          sx={{ width: 75, height: 75 }}
        />
        <HeaderStyled variant="h1">{id.replace(/%20/g, ' ')}</HeaderStyled>
        <DescriptionWrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </DescriptionWrapper>
      </HeaderContainer>
      <PostList />
    </Container>
  );
};

export default AuthorPage;
