import { Pressable, StyleSheet, Text, View } from 'react-native';

const StyleButton = (props) => {
  const { type, content, onPress } = props;
  const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
  const textColor = type === 'primary' ? '#ffffff' : '#171a20';
  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={[styles.button, { backgroundColor: backgroundColor }]}
          onPress={onPress}
        >
          <Text style={[styles.text, { color: textColor }]}>{content}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default StyleButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
