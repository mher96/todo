import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Main from './components/Main';
import TasksProvider from './core/contexts/tasksContext'
import TasksOptionProvider from './core/contexts/optionsContext';
import './App.css';

function App() {

  return (
    <ChakraProvider>
      <TasksProvider>
        <TasksOptionProvider>
          <Main/>  
        </TasksOptionProvider>
      </TasksProvider>
    </ChakraProvider>
  );
}

export default App;
