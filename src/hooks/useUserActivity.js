import axios from "axios";
import { useQuery } from "react-query";

const getUserActivity = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:3000/user/${userId}/activity`
  );
  return data;
};

// because in App.js we use react query, here we define a function to fetch data
// the component that consumes this data add useQuery hook
// the key "user" allows react query to manage data.
//the key"user" will be same for other charts?
//userId vs idUser?
export default function useUserActivity(userId) {
  return useQuery(["userActivity"], () => getUserActivity(userId));
}

//When multiple components request the same query, only one request is issued
