import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  FooterGrid,
  HeaderGrid,
  Item,
  MainGrid,
  MainWrapp,
} from '../../styled';
import Footer from '../Footer/Footer';
import { StyledMainGrid } from './styled';
import ProminentAppBar from '../Header/Header';

function Template() {
  return (
    <MainWrapp container>
      <HeaderGrid item lg={12} md={12} sm={12} xs={12}>
        <ProminentAppBar />
      </HeaderGrid>
        <MainGrid item lg={12} md={12} sm={12} xs={12}>
          <StyledMainGrid>
            <Item>
              <Outlet />
            </Item>
          </StyledMainGrid>
      </MainGrid>
      <FooterGrid item lg={12} md={12} sm={12} xs={12}>
        <Footer />
      </FooterGrid>
    </MainWrapp>
  );
}

export default Template;
