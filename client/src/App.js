import React, { Component } from 'react';
import './App.css';
import GetItem from './components/getItem';
import NavBar from './components/navBar';
import Search from './components/search';
import Cart from './components/cart';
import GetKey from './components/getKeyFromCode';
import Pagination from './components/pagination';
import Sort from './components/sort';
import ItemsPerPage from './components/itemsPerPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
  Redirect
} from "react-router-dom";
import Test from './test'





//concurrently \"node server.js\" \"cd ../ && npm start\
class App extends Component {
  state = {
    loading: true,
    wasTokenAchived: false,
    searchTxt: 'case',
    items: [],
    sort: 0, //0=ascending  |  1= desending
    cartItems: [],
    itemsPerPage: 10,
    currentPage: 1,
    authError:false,
    error: ''


    //   itemId,price,seller,shippingOptions,additionalImages,image,title

  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("nextState.error = ",nextState)
    return !(this.state.loading == true && nextState.loading == true)
  }

  fetchItems = (...args) => {
    console.log("Fetch Items Call")
    this.setState({ loading: true, items: [] ,error:''})
   // console.log("STATE = ", this.state)
   // console.log("args = ", args)
   // console.log("args>0?args[0]:this.state.searchTxt", args > 0 ? args[0] : this.state.searchTxt)
    let tmpTxt = args.length > 0 ? args[0] : this.state.searchTxt
    fetch('/.netlify/functions/server/fetchItems/searchTxt/' + tmpTxt, {
      // method: 'POST'
    }).then(res => {
      console.log("res = ", res)
      if (res.ok){
        console.log("RES OK = ",res)
        return res.json()
      } 
      console.log("response bad = ", res.type)
      if(res.status==401)  throw Error('no result, please search for something else')
    
    }).then(data => {
     // console.log("client response for fetchItems/'+txtToSearch", data)
      //console.log("data[0].image.imageUrl =",data[0].image.imageUrl)
      let index = 0
      data.filter(item => {
        //console.log("item = ",item)
        return item.image && item.image.imageUrl //filter out items with no image
      }).forEach(item => { //giving items an index to max time efficiency upon chanage in state 
        item.key = index
        item.inCart = 0
        index++
        return
       })
      this.setState({
        loading: false,
        items: data,
        searchTxt: tmpTxt,
        wasTokenAchived: true,
        currentPage: this.state.items.length / this.state.itemsPerPage < 1 ? 1 : this.state.currentPage,
        error: '' //clean any error

      })
      // console.log(this.state.items)
    }).catch((err) => {
      console.log('ERROR fetchItems = ', err);
     this.handleError(err.message)
    })


  }



  componentDidMount() {  //Get user consent code
    // this.fetchItems()
    // fetch('/.netlify/functions/server/TestgetKey',{
    //   headers:{"content-type": "application/json"}
    // }).then(res=>res.json()).then(data=>{
    //   console.log("TEST CALL______ = ",data)
    // })
    console.log("app.js mounted")

  }
  changeText = (text) => {
    console.log("APP.text = ", text)
    // this.setState({ searchTxt: text })
    console.log("APP.changeText", true ? 'a' : 'b')
    this.fetchItems(text)

  }

  cartAddRemoveItem = (item, num) => {
      console.log("cartAddRemoveItem", item, num)
    //let items = [...this.state.items]
    // items[item.key].inCart = items[item.key].inCart + num //increase/decrease inCart property of the item
    //items[item.key].index = this.state.cartItems.length //giving the item index so it can be deleted by complexity of O1 , index isn't wrong - see next line
    let cartItems = [...this.state.cartItems] //prefer shallow copy 
    const found = this.state.cartItems.findIndex(x => x.itemId == item.itemId) //searching input item in cart by item id
    if (found == -1) {
      item.inCart++
      cartItems = [...cartItems, item] //adding item to cart 
    }
    else {
      cartItems[found].inCart += num
      if (cartItems[found].inCart == 0) cartItems.splice(found, 1) //if item inCart is now 0 it should no longer be in cart
    }
    this.setState({
      cartItems: cartItems
    })
  }



  createItemList = () => { //create an array of components only for the current page,
    let high = parseInt(this.state.currentPage * this.state.itemsPerPage)
    let perPage = parseInt(this.state.itemsPerPage)
    //  console.log(high - perPage, high)
    return this.state.items.slice(high - perPage, high)
      .map(item => <GetItem key={item.key} item={item} cartAddRemoveItem={this.cartAddRemoveItem} />)
  }
  changeCurrentPage = (page) => {
    // console.log("Page: ", page)
    this.setState({ currentPage: page })
  }

  changeSortOrder = (input) => {
    let sortedItems = this.state.items.sort((a, b) => {
      return input == 0 && a.price.value - b.price.value < 0 ? -1 : input == 1 && a.price.value - b.price.value > 0 ? -1 : 0
    })
    this.setState({
      sort: input,
      currentPage: 1,
      items: sortedItems
    })
  }

  updateItemsPerPage = (num) => {
    console.log("updateItemsPerPage")
    const { items, currentPage } = this.state
    // console.log("items =",items , " currentPage =",currentPage)
    let tmpCurrentPage = items.length / num < currentPage ? Math.ceil(items.length / num) : currentPage //if user is in page 6 but in the new view there is no page 6 but only 3, it makes him be on 3
    console.log("tmpCurrentPage = ", tmpCurrentPage)
    this.setState({
      itemsPerPage: num,
      currentPage: tmpCurrentPage
    })
  }

  handleError=(...args)=>{
 console.log("APP.handleError args = ",args)
    this.setState({
      error: args[0],
      authError: args.length>1?true:false,
      loading:false
    })
    console.log("error updated")
  }

   homeButton=()=> {
    
    //let history = useHistory();
    this.props.history.push('http://localhost:3000/')
  };

  emptyCart=()=>{
  const cartItems = this.state.cartItems.map(item=>item.inCart=0) //because we preferred shallow copy
    this.setState({cartItems:[]})
  }
  render() {
    console.log("APP rendered STATE= ", this.state)
    //console.log("APP - render :this.state.searchTxt = ", this.state.searchTxt)
    const { error, loading, items } = this.state;
    //const cartItems = this.state.items.filter(item => item.inCart > 0)
    
    return (
      <div>

        <Router>

          <Switch>
            {window.location.href.indexOf('code=') > 0 && !this.state.wasTokenAchived && this.state.error===''&&
              <Route path="/" render={(props) => (<GetKey fetchItems={this.fetchItems} handleError={this.handleError} {...props} />)} />}
            {window.location.href.indexOf('code=') < 0 &&
              <Route path="/" exact={true} strict={true}
                component={() => {
                  window.location.href = 'https://auth.sandbox.ebay.com/oauth2/authorize?client_id=tomersha-store-SBX-8e64e9f22-0c82ed0b&response_type=code&redirect_uri=tomer_shani-tomersha-store--trsqvdhhl&scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly https://api.ebay.com/oauth/api_scope/buy.guest.order https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/buy.shopping.cart https://api.ebay.com/oauth/api_scope/buy.offer.auction https://api.ebay.com/oauth/api_scope/commerce.identity.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.email.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.phone.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.address.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.name.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.status.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.item.draft https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/sell.item'
                  return null
                }} />}
          </Switch>
          </Router>

        <div style={{ paddingLeft: 40, paddingRight: 40, align: 'center' }}>

          <Search text={this.state.searchTxt} changeText={this.changeText} authError={this.state.authError}/>
          <div style={{ right: '2%', position: 'fixed' }}>
            <Cart items={this.state.cartItems} cartAddRemoveItem={this.cartAddRemoveItem} emptyCart={this.emptyCart} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <Sort changeSortOrder={this.changeSortOrder} />
            <ItemsPerPage updateItemsPerPage={this.updateItemsPerPage} itemsPerPage={this.state.itemsPerPage} />
            <Pagination totalItems={this.state.items.length} itemsPerPage={this.state.itemsPerPage} currentPage={this.state.currentPage} changeCurrentPage={this.changeCurrentPage} />

          </div>
          <div>
            <div style={{ justifyContent: 'center',display: this.state.error==='' ? 'none' : 'flex' }}>{this.state.error}
            <a style={{display:this.state.authError?'inherit':'none'}}  href='/'>Generate New Code</a>
          
          
            </div>
           
            {this.createItemList()}

            <div class="d-flex justify-content-center" style={{ visibility: this.state.loading ? 'visible' : 'hidden' }}>
              <div class="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>

              </div>
            </div>
          </div>

        </div>
      </div>

    )
  }

}

export default App
