import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  (theme) => {
    return {
      root: {
        backgroundColor: 'var(--secondary-blue)',
        color: 'var(--black)',
        maxHeight: 200,
        width: '100%',
      },
      footerLogoIcon: {
        display: 'block',
        width: '100%',
        maxWidth: 26,
        aspectRatio: '1/1',
      },
      footerIcons: {
        display: 'flex',
        gap: 16,
      },
      footerItems: {
        display: 'flex',
        paddingTop: 40,
        paddingBottom: 40,
        '@media (max-width: 360px)': {
          margin: '0 auto 32px',
        },
      },
      footerItem: {
        flex: '1',
        fontSize: 16,
        '@media (max-width: 600px)': {
          display: 'flex',
          flex: '1',
          justifyContent: 'space-around',
        },
        '@media (max-width: 360px)': {
          display: 'flex',
          flex: '1',
          justifyContent: 'space-around',
        },
      },
      footerLinks: {
        listStyle: 'none',
        padding: 0,
      },
      footerLinksItem: {
        paddingBottom: 10,
        '@media (max-width: 360px)': {
          padding: 0,
        },
      },
      footerLinksItemDesktop: {
        '@media (max-width: 600px)': {
          display: 'none',
        },
        '@media (max-width: 360px)': {
          display: 'none',
        },
      },
      footerLinksHeader: {
        fontSize: 18,
        fontWeight: 'Bold',
        '@media (max-width: 360px)': {
          fontSize: 15,
          textDecoration: 'underline',
        },
      },
    };
  },
  {
    name: 'Footer',
  },
);
