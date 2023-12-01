import ItemCard from "@/components/ui/ItemCard";
import useData from "@/context/DataContext";


export default function CheckoutBox() {
    const {  } = useData();

    // return checkoutItems[0] &&
    return <div className="p-4 flex-1 set-bg-light rounded-lg">
            <h3 className="mb-6 text-center">Please Confirm Your Order!</h3>
            <div className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {/* {
                    checkoutItems.map((item, i) => {
                        return <ItemCard key={item.id + i} item={item} />
                    })
                } */}
            </div>

            <div className="mt-6 flex-center">
                <button className="btn-outline" onClick={() => window.location.href = "/"}>
                    Order Now
                </button>
            </div>
        </div>
}