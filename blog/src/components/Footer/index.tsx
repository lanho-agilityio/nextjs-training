'use client';

import { Select } from '@mui/material';
import { Container, Copyright, Made, ThemeWrapper } from './Footer.styled';
import LightModeIcon from '@mui/icons-material/LightMode';
import { THEME } from '../../enums/theme';
const Footer = (): JSX.Element => {
  return (
    <Container>
      <Copyright>Copyright © 2023 Stablo. All rights reserved.</Copyright>
      <Made>Made by Web3Templates</Made>
      <ThemeWrapper>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <LightModeIcon fontSize="small" />
          <Select native>
            <option value={THEME.Light} style={{ backgroundColor: 'white' }}>
              Light
            </option>
            <option value={THEME.Dark} style={{ backgroundColor: 'white' }}>
              Dark
            </option>
          </Select>
        </div>
      </ThemeWrapper>
    </Container>
  );
};

export default Footer;
