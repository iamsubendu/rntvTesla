import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import StyleButton from './StyleButton';

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props;
  return (
    <>
      <View style={styles.carCont}>
        <ImageBackground source={image} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}&nbsp; <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.btnCont}>
          <StyleButton
            type="primary"
            content={'Custom Order'}
            onPress={() => {
              console.warn('jdg');
            }}
          />
          <StyleButton
            type="secondary"
            content={'Existing Inventory'}
            onPress={() => {
              console.warn('jdjkhg');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  carCont: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  btnCont: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
});
