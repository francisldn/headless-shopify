import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: 'explorer75.myshopify.com',
    storefrontAccessToken: process.env.REACT_APP_STOREFRONT_API_ACCESS_TOKEN
  });

class ShopProvider extends Component {
    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen:false,
        isMenuOpen: false
    }

    componentDidMount() {
        if (localStorage.checkout_id) {
            this.fetchCheckout(localStorage.checkout_id)
        } else {
            this.createCheckout();
        }
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout_id", checkout.id);
        this.setState({checkout: checkout});
    }

    fetchCheckout = async (checkoutId) => {
        await client.checkout
            .fetch(checkoutId)
            .then((checkout) => {
            this.setState({checkout:checkout})
          });
    }

    addItemToCheckOut = async (variantId, quantity) => {
        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10)
            }
        ]
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
        this.setState({checkout: checkout});
    }

    removeLineItem = async(lineItemIdsToRemove) => {
       const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove);
        this.setState({checkout: checkout});
    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({products:products});
    }

    fetchProductWithHandle = async(handle) => {
        const product = await client.product.fetchByHandle(handle);
        this.setState({product: product});
    }

    closeCart = () => {this.setState({isCartOpen: false})}
  
    openCart = () => {this.setState({isCartOpen: true})}

    closeMenu = () => {this.setState({isMenuOpen: false})}

    openMenu = () => {this.setState({isMenuOpen: true})}

    render() {
    return (
      <ShopContext.Provider 
        value = {{
            ...this.state,
            fetchAllProducts: this.fetchAllProducts,
            fetchProductWithHandle:this.fetchProductWithHandle,
            addItemToCheckOut: this.addItemToCheckOut,
            removeLineItem: this.removeLineItem,
            openCart: this.openCart,
            closeCart: this.closeCart,
            closeMenu: this.closeMenu,
            openMenu: this.openMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;

export {ShopConsumer, ShopContext};

export default ShopProvider;