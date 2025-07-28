import { useBlog } from "../api/hooks/useBlog";
import React from "react";

type BlogProps = {
  setEditingItem: React.Dispatch<React.SetStateAction<any>>;
};

const Blog: React.FC<BlogProps> = ({ setEditingItem }) => {
  const { getBlogs, deleteBlog } = useBlog()
  const { data } = getBlogs();
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-3 gap-3 py-4">
        {
          data?.map((item: any) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-md border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.05]"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{item.body}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{item.address}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{item.phone_number}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <button
                    onClick={() => deleteBlog.mutate(item.id)}
                    className="px-3 py-1 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setEditingItem(item)}
                    className="px-3 py-1 text-sm font-medium text-blue-500 border border-blue-500 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Update
                  </button>
                </div>

                <p className="text-xs text-gray-400">
                  {item.birthdate?.split("T")[0]}
                </p>
              </div>
            </div>

          ))
        }

      </div>
    </div>
  );
};

export default React.memo(Blog);
