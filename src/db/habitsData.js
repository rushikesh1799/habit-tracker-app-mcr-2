import { v4 as uuidv4 } from "uuid";

const habits = [
  {
    id: uuidv4(),
    name: "Exercise",
    isArchive: false,
    repeat: "Weekly",
    goal: "1 time a day",
    time: "07:00",
    startDate: "2023-06-01",
    endDate: "2023-06-30"
  },
  {
    id: uuidv4(),
    name: "Read",
    isArchive: false,
    repeat: "Daily",
    goal: "2 times a day",
    time: "21:00",
    startDate: "2023-06-01",
    endDate: "2023-06-30"
  },
  {
    id: uuidv4(),
    name: "Meditate",
    isArchive: false,
    repeat: "Daily",
    goal: "2 times a day",
    time: "05:00",
    startDate: "2023-06-01",
    endDate: "2023-06-30"
  },
  {
    id: uuidv4(),
    name: "Running",
    isArchive: false,
    repeat: "Weekly",
    goal: "3 times a day",
    time: "17:00",
    startDate: "2023-06-01",
    endDate: "2023-06-30"
  }
  // Add more habit objects here
];

export default habits;
