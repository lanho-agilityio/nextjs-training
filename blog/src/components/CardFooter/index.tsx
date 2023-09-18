import { Avatar, Link } from '@mui/material';
import { MOCK_AUTHOR } from '../../mocks/author';
import {
  AuthorContainer,
  FooterContainer,
  Name,
  ProfilePictureStyled,
  Separator
} from './CardFooter.styled';

const CardFooter = (): JSX.Element => {
  const author = MOCK_AUTHOR;

  return (
    <FooterContainer>
      <AuthorContainer href={'/'}>
        <ProfilePictureStyled>
          <Avatar alt={author.name} src={author.imagePath}   sx={{ width: 20, height: 20 }}/>
        </ProfilePictureStyled>
        <Name>{author.name}</Name>
      </AuthorContainer>
      <Separator>•</Separator>
      <time
        dateTime="2022-10-21T15:48:00.000Z"
        style={{
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >
        October 21, 2022
      </time>
    </FooterContainer>
  );
};

export default CardFooter;
