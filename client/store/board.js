import axios from 'axios'

const GOT_BOARD = 'GOT_BOARD'

const initialState = {}

export const gotBoard = board => ({
  type: GOT_BOARD,
  board
})

export const fetchBoard = () =>
  dispatch =>
    axios.get('/api/board')
      .then(res => res.data)
      .then(board => {
        dispatch(gotBoard(board))
      })

export default function (state = initialState, action) {
  switch (action.type) {

    case GOT_BOARD:
      return action.board

    default:
      return state
  }
}
