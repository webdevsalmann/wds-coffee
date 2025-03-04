import useData from "@/context/DataContext"
import { useEffect } from "react";


export default function Sidebar() {
  const { menuCategories, setItemsByCatName, activeCat } = useData();

  useEffect(() => { setItemsByCatName("coffee") }, []);

  return (
    <div id="sidebar" className={`relative p-4 set-bg-light flex flex-col gap-4 md:flex-row`}>
      <div className="py-2 px-4 set-bg rounded font-bold">Category:</div>
      <div className="flex gap-2 flex-wrap">
        {menuCategories &&
          menuCategories.map(item => {
            return <p className={`py-2 px-4 flex-1  md:flex-grow-0 set-bg rounded cursor-pointer capitalize ${item == activeCat && "clr-p font-bold"}`} key={item + 1} onClick={() => setItemsByCatName(item)}>{item}</p>
          })
        }
      </div>
    </div>
  )
}
