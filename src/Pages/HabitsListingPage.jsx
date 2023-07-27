import { useContext, useEffect } from "react";
import Habit from "../Components/Habit";
import HabitDataModal from "../Components/HabitDataModal";
import HabitDetails from "../Components/HabitDetails";
import { HabitsContext } from "../Context/HabitsContext";

const HabitsListingPage = () => {
  const { habitsData, viewDetailsIsModal } = useContext(HabitsContext);

  // useEffect(() => {
  //   console.log(habitsData);
  // }, [habitsData]);

  return (
    <div>
      <div>
        <div
          className="create__habit__container"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter3"
        >
          Create New Habit
        </div>
        <HabitDataModal />
        {viewDetailsIsModal ? <HabitDetails /> : <></>}
        {/* {isModal ? <HabitDataModal /> : <></>} */}
      </div>
      <div className="habits-container">
        {habitsData
          ?.filter((habit) => !habit.isArchive)
          .map((habit) => (
            <Habit habit={habit} key={habit.id} />
          ))}
      </div>
    </div>
  );
};

export default HabitsListingPage;
