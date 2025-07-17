import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserProfile() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserProfile must be used within a UserProvider");
  }

  const { user } = context;

  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
    </div>
  );
}
