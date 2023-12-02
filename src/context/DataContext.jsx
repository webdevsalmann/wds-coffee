"use client"
import { useState, useContext, createContext, useEffect } from "react";
import { datas } from "@/data/data";

const DataContext = createContext();


// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    const [orders, setOrders] = useState([])
    const menu = datas;
    const menuCategories = Object.keys(menu);
    const [items, setItems] = useState(menu.appetizers);
    const [activeCat, setActiveCat] = useState("appetizers")

    // FIND MENU ITEM BY ID
    const getItemById = (id) => {
        for (const category in menu) {
            const menuItem = menu[category].find((item) => item.id === id);
            if (menuItem) {
                return menuItem;
            }
        }
        return null;
    };

    // ADD ORDER ITEM
    const addOrderItem = (id) => {
        const menuItem = getItemById(id);

        if (menuItem) {
            // If order contains that item id in each object's itemId
            const existingItem = orders.find((item) => item.itemId.includes(id));
            if (existingItem) {
                // If order contains that item id in each object's itemId
                const newOrder = orders.map((item) => {
                    if (item.itemId.includes(id)) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                    } else {
                        return item;
                    }
                });
                setOrders(newOrder);
            } else if (!existingItem) {
                // If order does not contain that item id in each object's itemId
                const newOrder = [...orders, {
                    itemId: id,
                    quantity: 1,
                }];
                setOrders(newOrder);
            }
            // setOrders([...orders, { ...menuItem }]);
        }
    };

    // REMOVE ORDER ITEMS 
    const removeOrderItem = (id) => {
        const orderItem = orders.find(item => item.itemId === id);
        if (orderItem) {
            const newOrder = orders.map((item) => {
                if (item.itemId === id) {
                    if (item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    } else {
                        // Don't include the item in the new array when quantity is 1
                        return null;
                    }
                } else {
                    return item;
                }
            });
            // Filter out null values (items with quantity 1) from the new array
            const filteredOrder = newOrder.filter(item => item !== null);
            setOrders(filteredOrder);
        }
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
        getItemById,
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