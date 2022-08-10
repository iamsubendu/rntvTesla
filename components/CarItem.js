import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CarItem = (props) => {
  return (
    <>
      <View style={styles.carCont}>
        <ImageBackground
          source={require('../assets/img/ModelX.jpeg')}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model Z</Text>
          <Text style={styles.subtitle}>Starting at 69,{'\u20A8'}</Text>
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
});
