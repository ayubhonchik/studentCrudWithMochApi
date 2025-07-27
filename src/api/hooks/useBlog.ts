import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const key = "BLOG";

export const useBlog = () => {
  const client = useQueryClient();

  const getBlogs = () =>
    useQuery({ queryKey: [key], queryFn: () => api.get("/blog").then(res => res.data) });

  const createBlog = (
    useMutation({
      mutationFn: (body: any) => api.post("/blog", body),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    }));

    const deleteBlog = (
    useMutation({
      mutationFn: (id) => api.delete(`/blog/${id}`),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    }));

    const updateBlog = (
    useMutation({
      mutationFn: ({body , id}:{body:any , id:string} ) => api.put(`/blog/${id}`, body),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    }))

  return { createBlog, getBlogs, deleteBlog, updateBlog };
};
