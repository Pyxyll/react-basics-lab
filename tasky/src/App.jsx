import './App.css';
import Task from './components/task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash and put away dishes"/>
      <Task title="Laundry" deadline="Tomorrow" description="Wash and fold laundry"/>
      <Task title="Tidy" deadline="Today" description="Clean the kitchen and sitting room" />	
    </div>
  );
}

export default App;
