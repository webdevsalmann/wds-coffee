"use client"
import { useState, useContext, createContext, useEffect } from "react";
import { datas } from "@/data/data";

const DataContext = createContext();


// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    const menu = datas;
    const menuCategories = Object.keys(menu);
    const [items, setItems] = useState(menu.appetizers);
    const [activeCat, setActiveCat] = useState("appetizers")
    const [orders, setOrders] = useState([])

    // useEffect(() => {
    //     console.log(orders)
    // }, [orders]);


    // Function to find item details by ID
    const findItemById = (id) => {
        for (const category in menu) {
            const item = datas[category].find((item) => item.id === id);
            if (item) {
                return item;
            }
        }
        return null; // Item not found
    };

    // Function to add an order item
    const addOrderItem = (id) => {
        const itemDetails = findItemById(id);

        if (!itemDetails) {
            console.log("Item not found");
            return;
        }

        const existingOrderIndex = orders.findIndex((order) => order.id === id);
        
        if (existingOrderIndex !== -1) {
            setOrders((prevOrders) => {
                const updatedOrders = [...prevOrders];
                updatedOrders[existingOrderIndex].quantity += 1;
                return updatedOrders;
            });
        } else {
            setOrders((prevOrders) => [
                ...prevOrders,
                {
                    orderId: `order${prevOrders.length + 1}`,
                    id: id,
                    quantity: 1,
                    name: itemDetails.name,
                    price: itemDetails.price,
                    desc: itemDetails.desc,
                },
            ]);
        }
    };

    // Function to remove an order item
    const removeOrderItem = (id) => {
        setOrders((prevOrders) => {
            // Find the index of the order to be removed
            const orderIndex = prevOrders.findIndex((order) => order.id === id);

            if (orderIndex !== -1) {
                // If quantity is more than one, decrease quantity
                if (prevOrders[orderIndex].quantity > 1) {
                    const updatedOrders = [...prevOrders];
                    updatedOrders[orderIndex].quantity -= 1;
                    return updatedOrders;
                } else {
                    // If quantity is one, remove the order
                    return prevOrders.filter((order) => order.orderId !== id);
                }
            } else {
                console.log("Order not found");
                return prevOrders;
            }
        });
    };



    // SET ITEM BY CATEGORY NAME
    const setItemsByCatName = (catName) => {
        if (menu.hasOwnProperty(catName)) {
            setItems(menu[catName]);
            setActiveCat(catName)
        } else {
            console.error(`Invalid category name: ${catName}`);
        }
    }


    const contextValues = {
        menu,
        items,
        activeCat,
        menuCategories,
        setItemsByCatName,
        orders,
        addOrderItem,
        removeOrderItem,
    }
    return (
        <DataContext.Provider value={contextValues}>{children}</DataContext.Provider>
    )
}

export default function useData() {
    return useContext(DataContext);
}