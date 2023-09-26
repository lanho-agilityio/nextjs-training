import { Box, Link, Typography, styled } from '@mui/material';

export const Container = styled(Box)`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1024px;
  @media (min-width: 1024px) {
    padding-bottom: 2rem;
  }
  @media (min-width: 1280px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const HeaderContainer = styled(Box)`
  padding-top: 0 !important;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1024px;
  @media (min-width: 1024px) {
    padding-bottom: 2rem;
  }
  @media (min-width: 1280px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const HeaderWidth = styled(Box)`
  margin-right: auto;
  margin-left: auto;
  max-width: 768px;
`;

export const AvatarWrapper = styled(Box)`\
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 999px;
`;

export const TitleStyled = styled(Typography)`
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
    line-height: 1.375;
  }
`;

export const TagContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

export const AuthorContainer = styled(Box)`
  display: flex;
  margin-top: 0.75rem;
  margin-left: 0.75rem;
  justify-content: center;
  color: #6b7280;
`;

export const AuthorStyled = styled(Link)`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  text-decoration: none;
`;

export const Name = styled(Typography)`
  color: #1f2937;
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PicWrapper = styled(Box)`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
  z-index: 0;
  max-width: 1024px;

  @media (min-width: 1024px) {
    border-radius: 0.5rem;
  }
`;

export const ContentWrapper = styled(Box)`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1024px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (min-width: 1280px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const ContentStyled = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;
