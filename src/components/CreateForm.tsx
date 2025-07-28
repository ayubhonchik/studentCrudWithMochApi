import React, { useEffect, useState } from "react";
import { useBlog } from "../api/hooks/useBlog";

const CreateForm = ({editingItem , setEditingItem}:{editingItem:any , setEditingItem:any}) => {

  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [address, setaddress] = useState("");
  const [phone_number, setphone_number] = useState("");
  const { createBlog, updateBlog } = useBlog()

  useEffect(() => {
    if (editingItem) {
      setTitle(editingItem.title);
      setbody(editingItem.body);
      setaddress(editingItem.address);
      setphone_number(editingItem.phone_number);
    }
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = {title , body, address, phone_number};
    if (editingItem) {
      updateBlog.mutate({ body: blog, id: editingItem.id });
      setTitle("");
      setbody("");  
      setaddress("");
      setphone_number("");
      setEditingItem(null)
    } else {
      createBlog.mutate(blog);
      setTitle("");
      setbody("");
      setaddress("");
      setphone_number("");
    }
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold my-6">Home</h2>
      <form onSubmit={handleSubmit} className="flex gap-3" action="">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-50 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="F name"
          type="text"
        />
        <input
          value={body}
          onChange={(e) => setbody(e.target.value)}
          className="w-50 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="L name"
          type="text"
        />
          <input
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          className="w-50 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="address"
          type="text"
        />
          <input
          value={phone_number}
          onChange={(e) => setphone_number(e.target.value)}
          className="w-50 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="phone_number"
          type="number"
        />
        <button className="border px-3 py-1 rounded-lg border-gray-300">
          {editingItem ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default React.memo(CreateForm);
