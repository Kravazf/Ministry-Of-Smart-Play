import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  FooterGrid,
  HeaderGrid,
  Item,
  MainGrid,
  MainWrapp,
  // SideBarGrid,
} from '../../styled';
import Footer from '../Footer/Footer';
import { StyledMainGrid } from './styled';
// import NavListSideBar from '../NavListSideBar/NavListSideBar';
import ProminentAppBar from '../Header/Header';

function Template() {
  return (
    <MainWrapp container>
      <HeaderGrid item lg={12} md={12} sm={12} xs={12}>
        <ProminentAppBar />
      </HeaderGrid>
      {/* <SideBarGrid item lg={2} md={2} sm={2} xs={12}>
      </SideBarGrid> */}
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
