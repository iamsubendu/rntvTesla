import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import cars from './Cars';
import CarItem from '../CarItem';

const CarsList = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={cars}
          renderItem={({ item }) => <CarItem car={item} />}
          snapToAlignment={'start'}
          declarationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
