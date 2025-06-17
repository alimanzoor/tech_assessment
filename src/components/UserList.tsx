import { getUsers, type User } from "@/data/users.ts";
import UserListItem from "@/components/UserListItem.tsx";

const UserList = () => {
  const users = getUsers();

  const activeUsers = users.filter((user: User) => user.status === "Active");

  // Simulate a fake update, like from WebSockets or server Polling
  // to randomly updating 'projects' property for some users.
  // useEffect(() => {
  //   const simulateUpdate = () => {
  //     console.log("Simulating user data update...");
  //     setUsers((prevUsers) => {
  //       return prevUsers.map((user) => {
  //         // Update projects count for a few random users (10% chance)
  //         if (Math.random() > 0.9) {
  //           return {
  //             ...user,
  //             projects: Math.floor(Math.random() * 20) + 1,
  //           };
  //         }
  //         return user;
  //       });
  //     });
  //   };
  //
  //   const interval = setInterval(simulateUpdate, 3000);
  //
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="space-y-1 relative">
      {activeUsers.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
