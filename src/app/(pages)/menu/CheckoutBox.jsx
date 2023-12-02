import ItemCard from "@/components/ui/ItemCard";
import useData from "@/context/DataContext";
import CheckoutDetails from "./CheckoutDetails";


export default function CheckoutBox() {
    const { orders, getItemById } = useData();
    return orders[0] &&
        <div className="p-4 flex-1 set-bg-light rounded-lg">
            <h3 className="mb-6 text-center">Please Confirm Your Order</h3>
            <div className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {
                    orders.map((item, i) => {
                        const itemObj = getItemById(item.itemId);
                        return <ItemCard key={item.id + "COBI" + i} item={itemObj} />
                    })
                }
            </div>

            <div className="mt-6">
                <CheckoutDetails />
            </div>
        </div>
}