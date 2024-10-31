import React, { useEffect, useState, useCallback } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttpRequest from './hooks/http-hook'


function App() {

  const [tasks, setTasks] = useState([]);

  const applyData = useCallback((data) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  }

  setTasks(loadedTasks);
},[])


  const {isLoading, error, sendRequest: fetchTasks} = useHttpRequest()


  useEffect(() => {
    fetchTasks({url: 'https://flipshop-3c29e-default-rtdb.firebaseio.com/tasks.json'},applyData);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
