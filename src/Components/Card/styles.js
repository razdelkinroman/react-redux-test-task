export const styles = {
  card: {
    position: 'relative',
    background: 'linear-gradient(180deg, #383639 0%, #2c272b 74%)',
    color: 'white',
    borderRadius: 20
  },
  card__title: {
    fontWeight: 500,
    color: 'coral',
    lineHeight: 1.33,
    overflow: 'hidden',
    display: '-webkit-box',
    maxHeight: 32,
    marginBottom: 8,
    paddingRight: 24,
    textTransform: 'uppercase'
  },
  card__body: {
    color: '#d2d5da',
    position: 'relative',
    height: 170
  },
  card__footer: {
    position: 'absolute',
    bottom: 5,
    width: '100%'
  },
  card__actions: {
    display: 'flex',
    justifyContent: 'start'
  },
  card__price: {
    textAlign: 'end',
    margin: '10px 0',
    position: 'absolute',
    bottom: 0,
    right: 10
  }
};
