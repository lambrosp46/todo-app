import React from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';


const TodoInput = ({ inputText, setInputText, addTodo, notesText, setNotesText }) => {
  const handleAddTodo = () => {
    addTodo();
    Keyboard.dismiss(); // Dismiss the keyboard after adding a todo
  }
  
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
      />
      <View style={styles.notesRow}>
        <TextInput
          style={styles.notesInput}
          placeholder="Add notes (optional)"
          placeholderTextColor="#9ca3af"
          value={notesText}
          onChangeText={setNotesText}
          returnKeyType="enter"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 12,
    paddingTop: 6,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  notesRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  addButton: {
    marginLeft: 12,
    backgroundColor: '#4f46e5',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  notesInput: {
    flex: 1,
    minHeight: 100,
    backgroundColor: '#f9fafb',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 16,
    color: '#1f2937',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
});

export default TodoInput;
