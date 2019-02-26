export default theme => ({
  drawerWrapper: {
    width: '15vw',
    color: '#FFFFFF',
    display: 'flex',
    marginBottom: 40,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    [theme.breakpoints.down('md')]: {
      width: '40vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  },
  listItem: {
    padding: 30,
    fontSize: 26,
    cursor: 'pointer',
    borderBottom: '1px solid white',
    '&:hover': {
      fontSize: 30,
      borderBottom: '2px solid white',
    }
  },
  brandImage: {
    width: '100%',
  }
});
