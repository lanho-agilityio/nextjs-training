import { Avatar } from '@mui/material';
import {
  AuthorContainer,
  FooterContainer,
  Name,
  ProfilePictureStyled,
  Separator
} from './CardFooter.styled';
import { Author } from '../../types/author';

export interface CardFooterProps {
  author: Author;
  time: string;
}

const CardFooter = ({ author, time }: CardFooterProps): JSX.Element => {
  return (
    <FooterContainer>
      <AuthorContainer href={`/author/${author.name}`}>
        <ProfilePictureStyled>
          <Avatar
            alt={author.name}
            src={author.imagePath}
            sx={{ width: 20, height: 20 }}
          />
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
        {time}
      </time>
    </FooterContainer>
  );
};

export default CardFooter;
