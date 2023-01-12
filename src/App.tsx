import { Route, Routes } from 'react-router-dom';
import Viewpager from './Viewpager';
import Navigation from './Navigation';
import './App.css';
import UserProfile from './UserProfile';

const tasks = [
  { id: 1, title: 'Take out the trash', text: '', time: '12:00 PM', organization:"self", completed:false, date: new Date(2023, 0, 12) },
  { id: 2, title: 'Get Groceries', text: 'Publix', time: 'Today', organization:"self", completed:false, date: new Date(2023, 0, 12) },
  { id: 3, title: 'Work on project', text:"", time:'' , organization:"self", completed:false, date: new Date(2023, 0, 12) },
  { id: 4, title: 'Meeting with team', text:"", time:'10:00 AM' , organization:"work", completed:false, date: new Date(2023, 0, 13) },
  { id: 5, title: 'Submit report', text:"", time:'3:00 PM' , organization:"work", completed:false, date: new Date(2023, 0, 13) },
  { id: 6, title: 'Visit grandparents', text:"", time:'1:00 PM' , organization:"family", completed:false, date: new Date(2023, 0, 14) },
  { id: 7, title: 'Gym', text:"", time:'7:00 PM' , organization:"self", completed:false, date: new Date(2023, 0, 14) },
  { id: 8, title: 'Catch up on email', text:"", time:'9:00 AM' , organization:"work", completed:true, date: new Date(2023, 0, 15) },
  { id: 9, title: 'Drink Water', text:"", time:'9:00 AM' , organization:"work", completed:true, date: null }
];


function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path="/" element={<>
              <Navigation title='To Do'></Navigation>
              <Viewpager tasks={tasks} />
            </>} />
          <Route path="/profile" element={<>
            <Navigation title='Profile'></Navigation>
            <UserProfile tasks={tasks} />
          </>} />
        </Routes>
    </div>
  );
}

export default App;
