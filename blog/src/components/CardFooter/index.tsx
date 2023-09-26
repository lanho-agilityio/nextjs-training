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
  user: Author;
  time: string;
}

const CardFooter = ({ user, time }: CardFooterProps): JSX.Element => {
  return (
    <FooterContainer>
      <AuthorContainer href={`/author/${user.id}`}>
        <ProfilePictureStyled>
          {/* <Avatar
            alt={author.name}
            src={author.imagePath}
            sx={{ width: 20, height: 20 }}
          /> */}
        </ProfilePictureStyled>
        <Name>{user.name}</Name>
      </AuthorContainer>
      <Separator>•</Separator>
      <time
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
