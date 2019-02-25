export default theme => ({
  wrapper: {
    margin: 0,
    padding: 0,
  },
  header: {
    padding: '1vw',
    display: 'flex',
    background: 'transparent',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  player: {
    border: 0,
    height: '100vh',
  }
});
