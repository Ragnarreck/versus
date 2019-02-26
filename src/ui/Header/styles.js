export default theme => ({
  header: {
    paddingLeft: 20,
    display: 'flex',
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      paddingRight: 20,
    }
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: '50%'
  },
  drawerWrapper: {
    width: '15vw',
    color: '#FFFFFF',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }
});
