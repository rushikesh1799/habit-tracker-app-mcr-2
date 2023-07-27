import { useContext } from "react";
import { HabitsContext } from "../Context/HabitsContext";

const EditHabits = () => {
  const {
    habitsData,
    setHabitsData,
    updatedHabitObject,
    setUpdatedHabitObject
  } = useContext(HabitsContext);

  const handleUpdatedFormSubmit = (e, habitData) => {
    e.preventDefault();
    const newUpdatedObjToBeUpdated = habitsData.map((habit) =>
      habit.id === habitData.id ? updatedHabitObject : habit
    );
    setHabitsData(newUpdatedObjToBeUpdated);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Update Habit Details
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
              <form
                className="modal-form-container"
                onSubmit={handleUpdatedFormSubmit}
              >
                {/* name input */}
                <label htmlFor="name">
                  Name:{" "}
                  <input
                    type="text"
                    id="name"
                    placeholder="Habit Name"
                    required
                    value={updatedHabitObject.name}
                    onChange={(e) =>
                      setUpdatedHabitObject((prev) => ({
                        ...prev,
                        name: e.target.value
                      }))
                    }
                  />
                </label>
                {/* repeat input */}
                <label htmlFor="repeat">
                  Repeat:{" "}
                  <select
                    value={updatedHabitObject.repeat}
                    onChange={(e) =>
                      setUpdatedHabitObject((prev) => ({
                        ...prev,
                        repeat: e.target.value
                      }))
                    }
                    required
                  >
                    <option value="">select</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </label>
                {/* goal input */}
                <label htmlFor="goal">
                  Goal:{" "}
                  <select
                    value={updatedHabitObject.goal.toLowerCase()}
                    onChange={(e) =>
                      setUpdatedHabitObject((prev) => ({
                        ...prev,
                        goal: e.target.value
                      }))
                    }
                    required
                  >
                    <option value="">select</option>
                    <option value="1 time a day">1 time a day</option>
                    <option value="2 times a day">2 times a day</option>
                    <option value="3 times a day">3 times a day</option>
                  </select>
                </label>
                {/* time input */}
                <label htmlFor="time">
                  Time of the Day:{" "}
                  <input
                    value={updatedHabitObject.time}
                    type="time"
                    id="time"
                    name="time"
                    onChange={(e) =>
                      setUpdatedHabitObject((prev) => ({
                        ...prev,
                        time: e.target.value
                      }))
                    }
                    required
                  />
                </label>
                {/* start date input */}
                <label htmlFor="start-date">
                  Start Date:{" "}
                  <input
                    type="date"
                    id="start-date"
                    name="start-date"
                    value={updatedHabitObject.startDate}
                    onChange={(e) =>
                      setUpdatedHabitObject((prev) => ({
                        ...prev,
                        startDate: e.target.value
                      }))
                    }
                    required
                  />
                </label>
                {/* end date input */}
                <label htmlFor="start-date">
                  End Date:{" "}
                  <input
                    type="date"
                    id="end-date"
                    name="end-date"
                    value={updatedHabitObject.endDate}
                    onChange={(e) =>
                      setUpdatedHabitObject((prev) => ({
                        ...prev,
                        endDate: e.target.value
                      }))
                    }
                    required
                  />
                </label>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e) => handleUpdatedFormSubmit(e, updatedHabitObject)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHabits;
