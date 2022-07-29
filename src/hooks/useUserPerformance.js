import axios from "axios";
import { useQuery } from "react-query";

const getUserPerformance = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:3000/user/${userId}/performance`
  );
  return data;
};

export default function useUserPerformance(userId) {
  return useQuery(["userPerformance"], () => getUserPerformance(userId));
}

// for score, how to get data by useQuery hook?
