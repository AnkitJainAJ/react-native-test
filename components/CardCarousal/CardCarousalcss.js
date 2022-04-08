import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    overflow: 'hidden',
    paddingTop: '20px'
  },
  image: {
    height: '100%',
    width: '100%',
    paddingTop: '20px',
    borderRadius: '8px'
  },
  cardOuter: {
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  cardContainer: {
    width: 300,
    height: 250,
    borderWidth: 0.5,
    borderColor: 'grey',
    overflow: 'scroll',
    borderRadius: '8px',
    marginLeft: '16px',
    marginTop: '16px'
  },
  textClass: {
    fontWeight: 700,
    paddingLeft: '16px',
    fontSize: '18px'
  },
  // cardTitleClass: {
  //   textAlign: 'center',
  //   marginLeft: '16px',
  //   marginTop: '8px'
  // }
});