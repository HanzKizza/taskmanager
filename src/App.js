import Header from './Components/Header';
import Tasks from './Components/Tasks';

function App() {
  const tasks = [
    {
      id: 1,
      text: "Meeting Elon",
      day: "Feb 10 2030",
      reminder: false
    },
    {
      id: 2,
      text: "Watch Avengers",
      day: "March 20th",
      reminder: true
    },
    {
      id: 3,
      text: "Family dinner",
      day: "March 1st",
      reminder: false
    }
  ]
  return (
    <div className='container'>
      <Header title="Task Manager" />
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
