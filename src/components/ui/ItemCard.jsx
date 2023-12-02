import useData from "@/context/DataContext";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function ItemCard({ item, toggle }) {
    const { orders, addOrderItem, removeOrderItem } = useData();
    const getCategoryNumber = (item) => {
        const categoryMapping = {
            c: 1,
            t: 2,
            s: 3,
            d: 4,
        };
        const firstLetter = item.id.charAt(0).toLowerCase();
        return categoryMapping[firstLetter] || 1;
    };

    return (
        <div className="relative p-2 w-full set-bg flex flex-col sm:flex-row gap-4 rounded-lg" >
            <div className="img-box w-full sm:w-1/4 max-w-[2/5] aspect-square rounded-md overflow-hidden">
                <Image
                    className="object-cover aspect-square" width="500" height="500" alt={item.name}
                    src={`/images/brand/${getCategoryNumber(item)}.jpg`}
                />
            </div>

            <div className="w-full sm:w-3/4 max-w-[2/5] flex-1 flex flex-col gap-2 sm:gap-4">
                <div className="sm:flex-1 flex-1">
                    <div className="text-sm sm:text-base font-semibold">{item.name}</div>
                    <p className="text-sm hidden sm:block">{item.desc}</p>
                    <div className="font-bold clr-p">${item.price}</div>
                </div>

                <div className="w-fit flex-between gap-2">
                    <button
                        className={`p-2 w-6 sm:w-8 btn-solid aspect-square flex-center active:outline-none`}
                        onClick={() => removeOrderItem(item.id)}
                    > <FaMinus /> </button>
                    <button
                        className={`p-2 w-6 sm:w-8 btn-solid aspect-square flex-center active:outline-none`}
                        onClick={() => addOrderItem(item.id)}
                    > <FaPlus /> </button>
                </div>
            </div>

            {
                orders.map((order, i) => {
                    if (order.itemId == item.id) {
                        return (
                            <div key={order.itemId + i + "orderItem"} className="absolute top-0 right-0 m-4 w-7 h-7 set-bg-p text-dark font-bold flex-center rounded-full aspect-square">
                                {order.quantity}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
