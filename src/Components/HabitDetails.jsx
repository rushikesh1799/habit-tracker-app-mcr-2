import { useContext } from "react";
import { HabitsContext } from "../Context/HabitsContext";

const HabitDetails = () => {
  const { viewHabitDetail } = useContext(HabitsContext);

  return (
    <div
      className="modal fade"
      id="exampleModalCenter1"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      {/* <button
        className="btn default-button view-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter1"
        onClick={() => handleViewDetails(habit.id)}
      >
        View Details
      </button> */}
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Habit Details
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              <b>Habit Name:</b> {viewHabitDetail?.name}
            </p>
            <p>
              <b>Habit Repeat:</b> {viewHabitDetail?.repeat}
            </p>
            <p>
              <b>Habit goal:</b> {viewHabitDetail?.goal}
            </p>
            <p>
              <b>Habit startDate:</b> {viewHabitDetail?.startDate}
            </p>
            <p>
              <b>Habit endDate:</b> {viewHabitDetail?.endDate}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
