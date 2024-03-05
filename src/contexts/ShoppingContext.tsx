import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type ShoppingContextProviderProp = {
    children: ReactNode;
}

type cartItem = {
    id: number;
    name: string;   
    age: string;
    booked: string;
    price: number;
    qty: number
}

type TicketItem = {
    id: number;
    name: string;
    age: string;
    booked: string;
    price: number
}

interface ShoppingContextType {
    cartQty: number;
    totalPrice: number;
    cartItems: cartItem[];
    increaseQty: (id: number) => void;
    decreaseQty: (id: number) => void;
    addCardItem: (item: TicketItem) => void;
    removeCardItem: (id: number) => void
    clearCard: () => void
}

const ShoppingContext = createContext<ShoppingContextType>({} as ShoppingContextType);

export const useShoppingContext = () => {
    return useContext(ShoppingContext)
}

export const ShoppingContextProvider = ({ children }: ShoppingContextProviderProp) => {

    const [cartItems, setCartItems] = useState<cartItem[]>(() => {
        const jsonCartData = localStorage.getItem('shopping_cart')
        return jsonCartData ? JSON.parse(jsonCartData) : []
    });

    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems))
    }, [cartItems])

    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const increaseQty = (id: number) => {
        console.log('increaseQty', id)
        const currentCartItem = cartItems.find(item => item.id === id)
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item.id === id) {
                    return { ...item, qty: item.qty + 1 }
                } else {
                    return item
                }
            })
            setCartItems(newItems);
        }
    }

    const decreaseQty = (id: number) => {
        console.log('decreaseQty', id)
        const currentCartItem = cartItems.find(item => item.id === id)
        if (currentCartItem) {
            if (currentCartItem.qty == 1) {
                removeCardItem(id)
            } else {
                const newItems = cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty - 1 }
                    } else {
                        return item
                    }
                })
                setCartItems(newItems);
            }
        }
    }

    const addCardItem = (ticket: TicketItem) => {
        console.log("Ticket =>", ticket)
        if (ticket) {
            const currentCartItem = cartItems.find(item => item.id === ticket.id)
            if (currentCartItem) {
                const newItems = cartItems.map(item => {
                    if (item.id === ticket.id) {
                        return { ...item, qty: item.qty + 1 }
                    } else {
                        return item
                    }
                })
                setCartItems(newItems);
            } else {
                const newItem = { ...ticket, qty: 1 }
                setCartItems([...cartItems, newItem])
            }
        }
    }

    const removeCardItem = (id: number) => {
        console.log('removeCardItem', id)
        const currentCartItemIndex = cartItems.findIndex(item => item.id === id)
        const newItems = [...cartItems]
        newItems.splice(currentCartItemIndex, 1)
        setCartItems(newItems)
    }

    const clearCard = () => {
        console.log('clearCard')
        setCartItems([])
    }

    return (
        <ShoppingContext.Provider value={{ cartItems, cartQty, totalPrice, increaseQty, decreaseQty, addCardItem, removeCardItem, clearCard }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingContext