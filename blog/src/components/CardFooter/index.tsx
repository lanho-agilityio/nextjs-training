'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
//Components
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  AuthorContainer,
  FooterContainer,
  Name,
  ProfilePictureStyled,
  Separator
} from './CardFooter.styled';
//Types
import { Author } from '@/Ttypes/author';
import { useAuthContext } from '../../hooks/useAuthContext';

export interface CardFooterProps {
  postId: string;
  author: Author;
  time: string;
}

const CardFooter = ({ postId, author, time }: CardFooterProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  const handleDetailClick = () => {
    router.push(`/post/${postId}`);
  };

  const handleEditClick = () => {
    router.push(`/upsert/edit/${postId}`);
  };

  const { user } = useAuthContext();


  return (
    <FooterContainer>
      <AuthorContainer href={`/author/${author.id}`}>
        <ProfilePictureStyled />
        <Name>{author.name}</Name>
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
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '10ch'
          }
        }}
      >
        {
          user && user.id === author.id && 
          <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        }
        <MenuItem onClick={handleDetailClick}>Detail</MenuItem>
      </Menu>
    </FooterContainer>
  );
};

export default CardFooter;
