export const styles = {
  card: {
    width: '23%',
    height: 250,
    position: 'relative',
    margin: '0.5% 1%',
    background: 'linear-gradient(180deg, #383639 0%, #2c272b 74%)',
    color: 'white',
    borderRadius: 20
  },
  title: {
    fontWeight: 500,
    color: 'coral',
    lineHeight: 1.33,
    overflow: 'hidden',
    display: '-webkit-box',
    maxHeight: 32,
    marginBottom: 8,
    paddingRight: 24,
    textTransform: 'uppercase',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical'
  },
  body: {
    color: '#d2d5da',
    position: 'relative',
    height: 170
  },
  footer: {
    position: 'absolute',
    bottom: 5,
    width: '100%'
  },
  action: {
    display: 'flex',
    justifyContent: 'center'
  },
  price: {
    textAlign: 'end',
    margin: '10px 0',
    position: 'absolute',
    bottom: 0,
    right: 10
  }
};
