import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { FooterNavigation, FooterWrapp } from './styled';

function Footer() {
  return (
    <FooterWrapp>
      <Typography variant='body1' color='white'>
          <Link
            to='/MinistryOfSmartPlay'
            data-text='&nbsp; @2023 Ministry of Smart Play'>
            &nbsp; @ 2023 Ministry of Smart Play&nbsp;
          </Link>
      </Typography>
      <FooterNavigation>
        <ul>
          <li>
            <Link to='/MinistryOfSmartPlay' data-text='&nbsp;Home'>&nbsp;Home&nbsp;</Link>
          </li>
          <li>
            <Link to='/MinistryOfSmartPlay' data-text='&nbsp;About'>&nbsp;About&nbsp;</Link>
          </li>
          <li>
            <Link to='/MinistryOfSmartPlay' data-text='&nbsp;Services'>&nbsp;Services&nbsp;</Link>
          </li>
          <li>
            <Link to='/MinistryOfSmartPlay' data-text='&nbsp;Blog'>&nbsp;Blog&nbsp;</Link>
          </li>
          <li>
            <Link to='/MinistryOfSmartPlay' data-text='&nbsp;Contact'>&nbsp;Contact&nbsp;</Link>
          </li>
        </ul>
      </FooterNavigation>
    </FooterWrapp>
  );
}

export default Footer;
