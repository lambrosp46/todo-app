import { View, Text, StyleSheet, TouchableOpacity, Keyboard, TextInput, Alert } from 'react-native';
import { useState } from 'react';

export default function TodoScreen({ navigation, route, todos, editTodoTitle, editTodoNotes, toggleTodoCompletion, deleteTodo }) {  
  const { todoId } = route.params;
  const todo = todos.find((t) => t.id === todoId);
  
  const [title, setTitle] = useState(todo?.text ?? '');
  const [notes, setNotes] = useState(todo?.notes ?? '');

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const handleEditTitle = () => {
    if (isEditingTitle) {
      editTodoTitle(todoId, title);
      Keyboard.dismiss();
    }

    setIsEditingTitle((prev) => !prev);
  }

  const handleEditNotes = () => {
    if (isEditingNotes) {
      editTodoNotes(todoId, notes);
      Keyboard.dismiss();
    }
    setIsEditingNotes((prev) => !prev);
  }

  const handleToggleCompletion = () => {
    toggleTodoCompletion(todoId);
  };

  const handleDeleteTodo = () => {
    console.log('Delete button pressed for todoId:', todoId);
    Alert.alert(
              'Delete Todo',
              'Are you sure you want to delete this todo?',
              [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Delete', style: 'destructive', onPress: () => {deleteTodo(todoId);
                    navigation.goBack();} }
              ]
          );
  };

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
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.textWrap}>
            {isEditingTitle ? (
              <TextInput
                style={styles.titleInput}
                value={title}
                onChangeText={setTitle}
                autoFocus
                placeholder="Todo title"
                placeholderTextColor="#94a3b8"
                returnKeyType="done"
              />
            ) : (
              <Text style={[styles.title, todo.completed && styles.completedTitle]}>{todo.text}</Text>
            )}
          </View>

          <TouchableOpacity style={styles.actionButton} onPress={handleEditTitle}>
            <Text style={styles.actionButtonText}>{isEditingTitle ? 'Done' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <View style={styles.textWrap}>
            {isEditingNotes ? (
              <TextInput
                style={styles.notesInput}
                value={notes}
                onChangeText={setNotes}
                autoFocus
                placeholder="Todo notes"
                placeholderTextColor="#94a3b8"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            ) : (
              todo.notes === '' ? (
                <Text style={styles.subtitle}>No notes available</Text>
              ) : (
                <Text style={styles.subtitle}>{todo.notes}</Text>
              )
            )}
          </View>

          <TouchableOpacity style={styles.actionButton} onPress={handleEditNotes}>
            <Text style={styles.actionButtonText}>{isEditingNotes ? 'Done' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={[styles.secondaryButton, todo.completed && styles.secondaryButtonActive]}
            onPress={handleToggleCompletion}
          >
            <Text style={[styles.secondaryButtonText, todo.completed && styles.secondaryButtonTextActive]}>
              {todo.completed ? 'Mark Active' : 'Mark Done'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteTodo}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textWrap: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1f2a56',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#64748b',
  },
  subtitle: {
    fontSize: 16,
    color: '#556680',
    lineHeight: 22,
  },
  actionButton: {
    backgroundColor: '#4f46e5',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  actionButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#eef2ff',
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: 'center',
  },
  secondaryButtonActive: {
    backgroundColor: '#dcfce7',
  },
  secondaryButtonText: {
    color: '#4f46e5',
    fontWeight: '700',
    fontSize: 14,
  },
  secondaryButtonTextActive: {
    color: '#15803d',
  },
  deleteButton: {
    backgroundColor: '#fef2f2',
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#dc2626',
    fontWeight: '700',
    fontSize: 14,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: '#dbeafe',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 22,
    fontWeight: '700',
    color: '#1f2a56',
    backgroundColor: '#f8faff',
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#dbeafe',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1f2a56',
    backgroundColor: '#f8faff',
    minHeight: 90,
  },
});