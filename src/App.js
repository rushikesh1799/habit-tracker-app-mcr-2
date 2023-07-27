import HabitDataModal from "./Components/HabitDataModal";
import HabitsListingPage from "./Pages/HabitsListingPage";
import "./styles.css";

import { NavLink, Routes, Route } from "react-router-dom";
import ArchivePage from "./Pages/ArchivePage";

export default function App() {
  const styles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "500",
      textDecoration: isActive ? "underline" : "none"
    };
  };
  return (
    <div className="App">
      <h1 className="title">Habits Tracker App</h1>
      <nav className="primary-nav">
        <NavLink style={styles} to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink style={styles} to="/archive" className="nav-item">
          Archive
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HabitsListingPage />}></Route>
        <Route path="/archive" element={<ArchivePage />}></Route>
      </Routes>
    </div>
  );
}
//ArchivePage
// Habit listing landing page - will show all the habits on this page.
// should be having a plus button or "Add a new habit" button.
// on clicking of this plus button it should open a dialog box or modal form component with different text boxes for details of habit.

// Name of the habit
// Goal of the habits
// How many times
// Time of the day
// start date
// end date
