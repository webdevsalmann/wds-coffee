import ItemCard from "@/components/ui/ItemCard";
import useData from "@/context/DataContext"

export default function Content() {
  const { items } = useData();

  return (
    <div id="content" className="p-2 sm:p-4 flex-1 set-bg-light rounded-lg">
      <div className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {items && items.map(item => {
          return <ItemCard key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}
