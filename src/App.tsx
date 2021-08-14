import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Main from './components/Main';
import TasksProvider from './core/contexts/tasksContext'
import './App.css';

function App() {

  return (
    <ChakraProvider>
      <TasksProvider>
        <Main/>  
      </TasksProvider>
    </ChakraProvider>
  );
}

export default App;
