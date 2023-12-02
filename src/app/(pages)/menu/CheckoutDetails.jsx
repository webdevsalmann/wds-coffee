import useData from "@/context/DataContext";
import axios from 'axios';
import { useState } from "react";
import toast from "react-hot-toast";


export default function CheckoutDetails() {
    const [fTableNo, setFTableNo] = useState("");
    const handleOnChange = (e) => { setFTableNo(e.target.value); }
    // Calculate Total Amount
    const { orders, getItemById } = useData();
    const totalPrice = orders.map(item => {
        const itemObj = getItemById(item.itemId);
        return itemObj ? (itemObj.price * item.quantity) : 0;
    });
    const total = totalPrice.reduce((acc, price) => acc + price, 0).toFixed(2);

    // API MESSAGES
    const botToken = '6756282629:AAF37Y6_3DZg2MzkPg6-CceUza3tGFyYktM';
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const chatId = '@wds_coffee_broadcast';
    const message = `Table No: ${fTableNo}\n\nOrdered:\n${orders.map(order => `${order.itemId} = ${order.quantity}`).join('\n')}\n\nTotal Amount: $${total}`;

    const params = { chat_id: chatId, text: message, };

    // Handle Sending Message to Telegram Channel
    const sendMessage = async () => {
        const tableNoConditions = fTableNo.trim() === "";
        if (tableNoConditions) {
            return toast.error("Please Enter Table Number")
        } else {
            try {
                const response = await axios.post(apiUrl, params);
                toast.success("Your Order has been placed successfully")
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    }


    return (
        <div className="p-4 set-bg-dark rounded-md">
            {/* Count total */}
            <div className="">
                <span>Total Amount</span> <span className="font-bold clr-p">$ {total && total}</span>
            </div>

            <div className="mt-4">
                <label className="flex items-center gap-2" htmlFor="fTableNo">
                    <span>Table No: </span>
                    <input className="set-bg-light max-w-[5rem]" type="text" name="fTableNo" value={fTableNo} onChange={handleOnChange} placeholder="No" />
                </label>
            </div>

            <div className="mt-6">
                <button className="btn-outline" onClick={sendMessage}>Place Order</button>
            </div>
        </div>
    )
}
