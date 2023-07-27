import { useContext, useEffect, useState } from "react";
import { HabitsContext } from "../Context/HabitsContext";
import { v4 as uuidv4 } from "uuid";

const HabitDataModal = () => {
  const { habitsData, setHabitsData, setIsModal } = useContext(HabitsContext);

  const [habitObject, setHabitObject] = useState({
    id: uuidv4(),
    name: "",
    repeat: "",
    goal: "",
    time: "",
    startDate: "",
    endDate: ""
  });

  const handleClearValues = () => {
    setHabitObject({
      id: uuidv4(),
      name: "",
      repeat: "",
      goal: "",
      time: "",
      startDate: "",
      endDate: ""
    });
  };

  const condition =
    habitObject.name === "" ||
    habitObject.repeat === "" ||
    habitObject.goal === "" ||
    habitObject.time === "" ||
    habitObject.startDate === "" ||
    habitObject.endDate === "";

  // useEffect(() => {
  //   console.log(condition);
  // }, [condition]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      habitObject.name === "" ||
      habitObject.repeat === "" ||
      habitObject.goal === "" ||
      habitObject.time === "" ||
      habitObject.startDate === "" ||
      habitObject.endDate === ""
    ) {
      alert("Kindly please fill in all the details");
    } else {
      handleClearValues();
      const newHabit = { ...habitObject, isArchive: false };

      console.log(newHabit);
      setHabitsData((prev) => [...prev, newHabit]);
    }
  };

  // useEffect(() => {
  //   console.log(habitsData);
  // }, [habitsData]);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5>New Habit</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClearValues}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* name input */}
              <form className="modal-form-container">
                <label htmlFor="name">
                  Name:{" "}
                  <input
                    type="text"
                    id="name"
                    value={habitObject.name}
                    placeholder="Habit Name"
                    required
                    onChange={(e) =>
                      setHabitObject((prev) => ({
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
                    onChange={(e) =>
                      setHabitObject((prev) => ({
                        ...prev,
                        repeat: e.target.value
                      }))
                    }
                    value={habitObject.repeat}
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
                    onChange={(e) =>
                      setHabitObject((prev) => ({
                        ...prev,
                        goal: e.target.value
                      }))
                    }
                    value={habitObject.goal}
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
                    type="time"
                    id="time"
                    name="time"
                    onChange={(e) =>
                      setHabitObject((prev) => ({
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
                    onChange={(e) =>
                      setHabitObject((prev) => ({
                        ...prev,
                        startDate: e.target.value
                      }))
                    }
                    required
                  />
                </label>
                {/* end date input */}
                <label htmlFor="end-date">
                  End Date:{" "}
                  <input
                    type="date"
                    id="end-date"
                    name="end-date"
                    onChange={(e) =>
                      setHabitObject((prev) => ({
                        ...prev,
                        endDate: e.target.value
                      }))
                    }
                    required
                  />
                </label>
                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss={condition ? "" : "modal"}
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleClearValues}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HabitDataModal;
