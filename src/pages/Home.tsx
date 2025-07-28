import { useState } from "react";
import Blog from "../components/Blog";
import CreateForm from "../components/CreateForm";

const Home = () => {
  const [editingItem, setEditingItem] = useState<any>("");
  return (
    <>
      <CreateForm editingItem={editingItem} setEditingItem={setEditingItem}/>
      <Blog setEditingItem={setEditingItem}/>
    </>
  );
};

export default Home;
