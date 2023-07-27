import { useContext } from "react";
import { HabitsContext } from "../Context/HabitsContext";
import Habit from "../Components/Habit";

const ArchivePage = () => {
  const { habitsData } = useContext(HabitsContext);
  return (
    <div>
      <h3>ArchivePage</h3>
      <div className="habits-container">
        {habitsData?.filter((habit) => habit.isArchive).length === 0
          ? "Sorry, No Habits are archived yet."
          : habitsData
              ?.filter((habit) => habit.isArchive)
              .map((habit) => <Habit habit={habit} key={habit.id} />)}
      </div>
    </div>
  );
};

export default ArchivePage;
