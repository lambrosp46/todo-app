import { View, Text, StyleSheet } from 'react-native';

export default function TodoScreen({ route, todos }) {
  const { todoId } = route.params;
  
  const todo = todos.find((t) => t.id === todoId);

  if(!todo) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo not found</Text>
        <Text style={styles.subtitle}>The todo item you are looking for does not exist.</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.text}</Text>
      <Text style={styles.subtitle}>{todo.notes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2ff',
    padding: 24,
    marginTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1f2a56',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#556680',
  },
});