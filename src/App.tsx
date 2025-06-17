import UserList from "./components/UserList";
import UserDetails from "@/components/UserDetails.tsx";
import "./App.css";
// import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
// import { setSelectedUser } from "@/store/slices/usersSlice.ts";

function App() {
  // You need to set the selectedUser when a list item is clicked,
  // as selectedUser is required to display the user's details on the right-hand side.

  // Option 1: Use local state with useState instead of Redux.
  // const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Option 2: Use Redux to manage the selected user state.
  // Redux setup is already included in the project.
  // You can use 'useAppDispatch' and 'useAppSelector' from "@/store/hooks.ts",
  // and the action 'setSelectedUser' from "@/store/slices/usersSlice.ts".

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar - User List */}
      <div className="w-[380px] border-r bg-muted/10">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Team Members</h2>

          <UserList />
        </div>
      </div>

      {/* Right Content - User Details */}
      {/*{!!selectedUser && <UserDetails user={selectedUser} />}*/}
    </div>
  );
}

export default App;
