import {createSelector} from 'reselect';

const usersSelector = (state) => state.users;

export const getIsSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn //取ってくるのはinitialState.jsのusersの値です
)
export const getOrdersHistory = createSelector(
  [usersSelector],
  state => state.orders //取ってくるのはinitialState.jsのusersの値です
)

export const getProductsInCart = createSelector(
  [usersSelector],
  state => state.cart //取ってくるのはinitialState.jsのusersの値です
)

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid  //取ってくるのはinitialState.jsのusersの値です
)

export const getUsername = createSelector(
  [usersSelector],
  state => state.username  //取ってくるのはinitialState.jsのusersの値です
)