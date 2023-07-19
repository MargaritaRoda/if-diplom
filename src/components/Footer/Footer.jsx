import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Container } from '../Container';
import { FooterLink } from './FooterLink';

import {
  footerLinksTextAbout,
  footerLinksTextEditor,
  footerLinksTextSupport,
} from '../../lib/footerLinksText';
import { useStyles } from './Footer.styles';

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.footerContainer}>
        <nav className={classes.footerItems}>
          <div className={classes.footerItem}>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksItem}>
                <h3 className={classes.footerLinksHeader}>About Fox Library</h3>
              </li>
              {footerLinksTextAbout.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
          <div className={classes.footerItem}>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksItem}>
                <h3 className={classes.footerLinksHeader}>Help</h3>
              </li>
              {footerLinksTextSupport.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
          <div className={classes.footerItem}>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksItem}>
                <h3 className={classes.footerLinksHeader}>My account</h3>
              </li>
              {footerLinksTextEditor.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
          <div className={classes.footerItem}>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksItem}>
                <h3 className={classes.footerLinksHeader}>Stay connected</h3>
              </li>
              <div className={classes.footerIcons}>
                <Icon
                  className={classNames(
                    classes.footerLogoMobile,
                    classes.footerLogoIcon,
                  )}
                  name="instagram"
                />
                <Icon
                  className={classNames(
                    classes.footerLogoMobile,
                    classes.footerLogoIcon,
                  )}
                  name="facebook"
                />
              </div>
            </ul>
          </div>
        </nav>
      </Container>
    </footer>
  );
};
