import * as Types from './mutations-type';
const mutations = {
  [Types.ADD_CART](state,book){
    let product = state.cartList.find(item=>item.bookId===book.bookId);
    if(product){
      product.bookCount+=1;
      state.cartList = [...state.cartList];
    }else{
      book.bookCount = 1;
      state.cartList = [...state.cartList,book];
    }
  },
  [Types.REMOVE_CART](state,book){
    let product = state.cartList.find(item=>item.bookId===book.bookId);
    product.bookCount-=1;
    state.cartList = [...state.cartList];
    if(product.bookCount==0){
      
      console.log(state.cartList);
    }else{
    //   book.bookCount = 0;
    //   state.cartList=state.cartList.filter(item=>{
    //     item.bookId!=product.bookId;
       
    // });
    console.log(state.cartList);
    }
  },
  [Types.CLEAR_CART](state,book){
    let product = state.cartList.find(item=>item.bookId===book.bookId);
    product.bookCount=0;
    state.cartList = [...state.cartList];
  }
};
export default mutations;