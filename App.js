import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useTodos from './hooks/useTodos';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const {
    todos,
    inputText,
    notesText,
    setInputText,
    setNotesText,
    addTodo,
    deleteTodo,
    toggleTodoCompletion,
  } = useTodos();

  return (
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Home" options={{ title: 'Todos', headerShown: false }}>
          {(props) => (
            <HomeScreen
              {...props}
              todos={todos}
              inputText={inputText}
              notesText={notesText}
              setInputText={setInputText}
              setNotesText={setNotesText}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              toggleTodoCompletion={toggleTodoCompletion}
            />)}
        </Stack.Screen>

      <Stack.Screen name="TodoDetails" options={{
            headerTransparent: true,
            headerTitle: '',
            headerShadowVisible: false,
            headerTintColor: '#000',
            headerBackVisible: true,
            headerBackTitleVisible: false,
      }} >
        {(props) => (
          <TodoScreen 
          {...props} 
          todos = {todos}
        />)}
      </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}