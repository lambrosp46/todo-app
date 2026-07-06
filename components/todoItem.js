import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    const deleteConfirmation = () => {
        Alert.alert(
            'Delete Todo',
            'Are you sure you want to delete this todo?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => onDelete(todo.id) }
            ]
        );
    };


  return (
    <View style={[styles.itemContainer, todo.completed && styles.itemCompleted]}>
      <TouchableOpacity style={[styles.checkbox, todo.completed && styles.checkboxChecked]} onPress={() => onToggle(todo.id)}>
        <View style={[styles.checkboxInner, todo.completed && styles.checkboxInnerChecked]} />
      </TouchableOpacity>

      <Text style={[styles.text, todo.completed && styles.textCompleted]}>{todo.text}</Text>

      <TouchableOpacity onPress={deleteConfirmation} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  itemCompleted: {
    backgroundColor: '#eef2ff',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    borderColor: '#4338ca',
    backgroundColor: '#4338ca',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  checkboxInnerChecked: {
    backgroundColor: '#ffffff',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  textCompleted: {
    color: '#64748b',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    marginLeft: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: '#fef2f2',
  },
  deleteText: {
    color: '#dc2626',
    fontWeight: '700',
    fontSize: 13,
  },
});

export default TodoItem;
