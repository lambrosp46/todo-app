import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TodoItem from './todoItem';

const TodoList = ({ todos, deleteTodo, toggleTodoCompletion, openTodoDetails }) => {
  if (!todos.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No todos yet. Add your first task above.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      style={styles.list}
      renderItem={({ item }) => (
        <TodoItem 
          todo={item}
          onToggle={toggleTodoCompletion}
          onDelete={deleteTodo}
          onOpen={openTodoDetails}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingBottom: 28,
  },
  emptyContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default TodoList;
