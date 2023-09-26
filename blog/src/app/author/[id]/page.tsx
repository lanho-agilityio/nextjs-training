'use client';
import {
  AvatarWrapper,
  Container,
  DescriptionWrapper,
  HeaderContainer,
  HeaderStyled
} from './page.styled';

const AuthorPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  return (
    <Container>
      <HeaderContainer>
        <AvatarWrapper />
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
    </Container>
  );
};

export default AuthorPage;
