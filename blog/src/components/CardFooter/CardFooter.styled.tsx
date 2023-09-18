import { Box, Link, Typography, styled } from '@mui/material';

export const FooterContainer = styled(Box)`
  display: flex;
  margin-top: 0.75rem;
  align-items: center;
  color: #6b7280;
`;

export const Separator = styled(Typography)`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #d1d5db;
  margin-left: 10px;
  margin-right: 10px;
`;

export const AuthorContainer = styled(Link)`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const ProfilePictureStyled = styled(Box)`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
`;

export const Name = styled(Typography)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
