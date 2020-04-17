import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from '../actions/action';


const initialState = {

smurfs: [
  ],
isFetching: false,
error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
        return {smurfs:[], isFetching: true, error: '' }
        case FETCH_SMURFS_SUCCESS:
        return {smurfs: action.payload, isFetching: false, error: '' }
        case FETCH_SMURFS_FAILURE:
        return {smurfs: [], isFetching: false, error: action.payload }
        default: 
        return state
    }
}