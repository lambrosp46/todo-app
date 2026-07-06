import React from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const TodoInput = ({ inputText, setInputText, addTodo }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputContainer}
    >
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        placeholderTextColor="#9ca3af"
        value={inputText}
        onChangeText={setInputText}
        returnKeyType="done"
        onSubmitEditing={addTodo}
      />
      <TouchableOpacity onPress={addTodo} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 12,
    paddingTop: 6,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1f2937',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  addButton: {
    marginLeft: 12,
    backgroundColor: '#4f46e5',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default TodoInput;
