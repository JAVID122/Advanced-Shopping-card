import {createContext,useContext,type ReactNode,useState} from "react"
type shoppingCartProviderProps = {
  children: ReactNode
}
const quantity=6

 type cartItem={
  id:number
  quantity:number

 }
type shoppingCartContext={
 getItemQuantity:(id:number) => number
 // increaseCardtQuantity:(id:number)=> void
 // decreaseCartQuantity:(id:number)=>void
 // removeFromCart:(id:number)=> void
}
const ShoppingCartContext =createContext({} as shoppingCartContext)

export function useShoppingCart(){
 return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({children}:shoppingCartProviderProps){

 const [cartItems, setCartItems] =useState<cartItem[]>([])

 function getItemQuantity(id:number){
  return cartItems.find(item=> item.id===id)? quantity || 0
 }

return (
 <ShoppingCartContext.Provider value={{getItemQuantity}}>
  {children}
 </ShoppingCartContext.Provider>
)
}