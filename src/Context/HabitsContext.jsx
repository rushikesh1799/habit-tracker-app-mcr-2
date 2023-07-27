import { v4 as uuidv4 } from "uuid";

import { createContext, useEffect, useState } from "react";
import habits from "../db/habitsData";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habitsData, setHabitsData] = useState(habits);
  const [viewHabitDetail, setViewHabitDetail] = useState({});
  const [editHabitDetail, setEditHabitDetail] = useState({});

  const [updatedHabitObject, setUpdatedHabitObject] = useState({
    id: uuidv4(),
    name: "",
    repeat: "",
    goal: "",
    time: "",
    startDate: "",
    endDate: ""
  });

  // useEffect(() => {
  //   console.log(habitsData);
  // }, [habitsData]);

  const handleViewDetails = (habitID) => {
    const viewHabitData = habitsData.find((habit) => habit.id === habitID);
    setViewHabitDetail(viewHabitData);
  };

  const handleEdit = (habitData) => {
    const editHabitData = habitsData.find((habit) => habit.id === habitData.id);

    setEditHabitDetail(editHabitData);
    setUpdatedHabitObject({
      id: habitData.id,
      name: habitData.name,
      isArchive: habitData.isArchive,
      repeat: habitData.repeat,
      goal: habitData.goal,
      time: habitData.time,
      startDate: habitData.startDate,
      endDate: habitData.endDate
    });
  };

  const handleArchive = (habitID) => {
    const updatedHabitsData = habitsData.map((habit) =>
      habit.id === habitID ? { ...habit, isArchive: true } : habit
    );
    setHabitsData(updatedHabitsData);
  };

  const handleUnArchive = (habitID) => {
    const updatedHabitsData = habitsData.map((habit) =>
      habit.id === habitID ? { ...habit, isArchive: false } : habit
    );
    setHabitsData(updatedHabitsData);
  };

  const handleDelete = (habitID) => {
    const updatedHabitsData = habitsData.filter(
      (habit) => habit.id !== habitID
    );
    setHabitsData(updatedHabitsData);
  };

  return (
    <HabitsContext.Provider
      value={{
        habitsData,
        viewHabitDetail,
        editHabitDetail,
        setHabitsData,
        handleArchive,
        handleUnArchive,
        handleDelete,
        handleViewDetails,
        handleEdit,
        updatedHabitObject,
        setUpdatedHabitObject
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
