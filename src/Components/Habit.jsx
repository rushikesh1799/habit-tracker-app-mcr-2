import { useContext, useEffect } from "react";
import { HabitsContext } from "../Context/HabitsContext";
import EditHabits from "./EditHabits";
import HabitDetails from "./HabitDetails";

const Habit = ({ habit }) => {
  const {
    handleViewDetails,
    handleArchive,
    handleUnArchive,
    handleDelete,
    handleEdit
  } = useContext(HabitsContext);

  return (
    <div className="habits-card">
      <h3>{habit.name}</h3>
      <div className="btn-container">
        <button
          className="btn default-button view-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter1"
          onClick={() => handleViewDetails(habit.id)}
        >
          View Details
        </button>
        <button
          type="button"
          className="edit-btn btn default-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
          onClick={() => handleEdit(habit)}
        >
          Edit
        </button>

        <button
          className="del-btn btn default-button"
          onClick={() => handleDelete(habit.id)}
        >
          Delete
        </button>
        {habit.isArchive ? (
          <button
            onClick={() => handleUnArchive(habit.id)}
            className="archive-btn btn default-button"
          >
            UnArchive
          </button>
        ) : (
          <button
            onClick={() => handleArchive(habit.id)}
            className="btn default-button archive-btn"
          >
            Archive
          </button>
        )}
      </div>
      <EditHabits />
      <HabitDetails />
    </div>
  );
};

export default Habit;
