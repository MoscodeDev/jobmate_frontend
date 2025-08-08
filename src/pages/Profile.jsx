import React, { useState } from "react";
import { useEditUserMutation, useGetUserQuery } from "../app/api/apiSlice";
import {UserRoundCheck, UserRoundPen } from "lucide-react";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const Profile = ({ user, refetch }) => {
  const [editUser, setEditUser] = useState(false);
  const [profile, setProfile] = useState(user);
   const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
  });

  const [edit, {isLoading}] = useEditUserMutation();
  const memberSince = new Date(profile.createdAt).toLocaleDateString();
  const formattedDate = dayjs(memberSince).format("DD-MM-YYYY");

  const handleUpdateUser = () => {
    setEditUser(!editUser);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async(e) => {
    e.preventDefault();

    try {
      let credentials = formData;
      const updatedUser = await edit(credentials).unwrap();
      await refetch();
      setProfile(updatedUser);
      toast.success("Profile updated successfully");
      setProfile(updatedUser);
      setEditUser(false);

    } catch (error) {
      toast.error("Failed to update profile");
    }
    

  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen w-screen relative">
      <div className="absolute top-2 right-2">
        <button
          onClick={handleUpdateUser}
          className="cursor-pointer text-right"
        >
          <UserRoundPen />
        </button>
      </div>
      {editUser ? (
        <form
          onSubmit={handleSave}
          className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md w-full max-w-md"
        >
          <h2  className="text-2xl text-center font-bold font tracking-widest">Edit Profile</h2>

          <label className="w-full">
            <span className="block text-sm font-medium mb-1">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>

          <label className="w-full">
            <span className="block text-sm font-medium mb-1">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading?'saving...': 'Save'}
            </button>
            <button
              type="button"
              onClick={() => setEditUser(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md w-full max-w-md justify-between">
          <div  className="text-2xl text-center font-bold font tracking-widest">Profile</div>
          <div className="flex flex-col items-center gap-2">
            <UserRoundCheck color="blue" size={52} />
            <div>
              <span className="text-lg tracking-widest font-bold pr-4">
                {profile.name}
              </span>
              <span>{profile.role}</span>
            </div>
          </div>
          <div></div>
          <div>
            <span className="pr-2 font-bold">Email:</span>
            <span>{profile.email}</span>
          </div>
          <div>
            <span className="pr-2 font-bold">Member since:</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
