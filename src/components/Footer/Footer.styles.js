import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  (theme) => {
    return {
      root: {
        backgroundColor: 'var(--secondary-blue)',
        color: 'var(--black)',
        maxHeight: 200,
        width: '100%',
        // position: 'absolute',
        // top: '82%',
      },
      // footerContainer: {
      //   Height: '100hv',
      // },
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
      // footerLogoMobile: {
      //   // display: 'none',
      //   '@media (max-width: 360px)': {
      //     display: 'block',
      //     maxWidth: 26,
      //     margin: '0 auto 40px',
      //   },
      // },
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
      // footerCopyright: {
      //   marginTop: 64,
      //   fontSize: 14,
      //   '@media (max-width: 600px)': {
      //     textAlign: 'center',
      //   },
      //   '@media (max-width: 360px)': {
      //     fontSize: 12,
      //     margin: '0 auto',
      //     textAlign: 'center',
      //   },
      // },
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
