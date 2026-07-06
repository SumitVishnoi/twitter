const Sidebar = ({ users = [] }) => {
  return (
    <div
      className="w-full lg:w-[320px] xl:w-[350px] bg-white rounded-xl shadow-md p-4 overflow-y-auto lg:h-full h-72 text-black ">
      <h1 className="text-2xl font-semibold mb-5">Users</h1>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer transition"
          >
            <img
              src={user.profileImage}
              alt={user.username}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h2 className="font-medium">{user.username}</h2>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
