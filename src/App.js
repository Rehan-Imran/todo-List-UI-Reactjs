import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, DarkThemeMove } from "baseui";
import CreateCards from "./Components/CreateCards";
import { useState } from "react";
import TodoItems from "./Components/TodoItems";
import InputSkeleton from "./Components/InputSkeleton";
import "./App.css";
const engine = new Styletron();
// const Centered = styled('div', {
//   display: 'flex',
//   alignItems: 'center',
//   height: '100%',
// });
export default function App() {
  const [isValied, setIsValied] = useState(false);
  const [title, setTitle] = useState("");
  const [cardTitles, setCardTitles] = useState([]);
  const [tempTask, setTempTask] = useState("");
  const [task, setTask] = useState([]);
  let tempCardTitles;
  const saveRecordToState = (data) => {
    if (cardTitles.length < 5) {
      let tempData = { name: data, id: Math.random().toString() };
      tempCardTitles = [...cardTitles];
      tempCardTitles.push(tempData);
      setCardTitles(tempCardTitles);
    }
  };
  const updateHandler = (id, value) => {
    tempCardTitles = [...cardTitles];
    let index = tempCardTitles.findIndex((item) => item.id === id);
    tempCardTitles[index].name = value;
    setCardTitles(tempCardTitles);
  };
  const cardDeleteHelper = (id) => {
    tempCardTitles = [...cardTitles];
    const newData = tempCardTitles.filter((index) => index.id !== id);
    setCardTitles(newData);
  };
  const saveTaskHandler = (event) => {
    event.preventDefault();
    if (tempTask) {
      let tempData = {
        name: tempTask,
        id: Math.random().toString(),
        cardId: cardTitles[0].id,
      };
      let temp = [...task];
      temp.push(tempData);
      setTask(temp);
      setTempTask("");
    }
  };
  const taskHandler = (event) => {
    setTempTask(event.target.value);
  };
  const saveTitleHandler = (event) => {
    event.preventDefault();
    if (title.length > 0) {
      setIsValied(true);
    }
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const deleteTask = (taskId) => {
    const tasks = task.filter((item) => item.id !== taskId);
    setTask(tasks);
  };
  const updateTaskHandler = (cardId, taskId) => {
    console.log(cardId, taskId);
    const tempTasks = [...task];
    console.log(task);
    for (let item of tempTasks) {
      if (item.id === taskId) {
        item.cardId = cardId;
      }
    }
    setTask(tempTasks);
  };
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkThemeMove}>
        <div className="divDesign">
          {cardTitles.length > 0 && (
            <InputSkeleton
              onSubmit={saveTaskHandler}
              className="CreateCard"
              value={tempTask}
              onChange={taskHandler}
              placeholder="Insert Task"
              type="submit"
            >
              Add Task
            </InputSkeleton>
          )}
        </div>
        <div className="divDesign">
          {!isValied && (
            <InputSkeleton
              onSubmit={saveTitleHandler}
              className="CreateCard"
              value={title}
              onChange={titleHandler}
              placeholder="Enter title of progress.."
              type="submit"
            >
              Add Task
            </InputSkeleton>
          )}
          {isValied && <h2 style={{ marginLeft: 20 }}>{title}</h2>}
        </div>
        <div className="App">
          {cardTitles.length > 0 &&
            cardTitles.map((title) => (
              <TodoItems
                onClick={cardDeleteHelper}
                className="displayCard"
                key={title.id}
                id={title.id}
                titles={cardTitles}
                data={title}
                setRecord={updateHandler}
                task={task}
                onDelete={deleteTask}
                onChange={updateTaskHandler}
              />
            ))}
          {cardTitles.length < 5 && isValied && (
            <CreateCards onPress={saveRecordToState} />
          )}
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}
