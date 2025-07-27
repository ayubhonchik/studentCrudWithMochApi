import { useBlog } from "../api/hooks/useBlog";
import React from "react";

type BlogProps = {
  setEditingItem: React.Dispatch<React.SetStateAction<any>>;
};

const Blog: React.FC<BlogProps> = ({setEditingItem}) => {
  const { getBlogs , deleteBlog } = useBlog()
  const { data } = getBlogs();
  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-bold">Blog</h2>
      <div className="grid grid-cols-3 gap-3 py-4">
        {
          data?.map((item:any) => (
        <div key={item.id}>
          <div className="border rounded w-100 h-40 text-black p-1.5">
            <h3 className="text-lg">{item.title}</h3>
            <p className="text-sm text-black mb-2">
              {item.body}
            </p>
            <p className="text-sm text-black mb-2">
              {item.address}
            </p>
            <p className="text-sm text-black mb-2">
              {item.phone_number}
            </p>
            <div className="flex justify-between items-end">
              <div className="flex gap-2">
                <button onClick={() => deleteBlog.mutate(item.id)} className="text-blue-500 cursor-pointer border rounded px-1">
                  Delete
                </button>
                <button onClick={() => setEditingItem(item) } className="text-blue-500 border cursor-pointer rounded px-1">
                  Update
                </button>
              </div>
              <p className="text-sm text-gray-400">{item.birthdate.split("T")[0]}</p>
            </div>
          </div>
        </div>
          ))
        }

      </div>
    </div>
  );
};

export default React.memo(Blog);
