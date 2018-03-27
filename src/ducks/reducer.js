import axios from 'axios';
// action types
const GET_EVENT_INFO = "GET_EVENT_INFO";
const GET_RSVPS = "GET_RSVPS";

//initial state
const initialState = {
    reactEvent: {},
    rsvps: []
}

//reducer function
export default function (state = initialState, action) {
    switch(action.type) {
        case GET_EVENT_INFO + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case GET_EVENT_INFO + "_FULFILLED":
            return Object.assign({}, state, {reactEvent: action.payload, isLoading: false})
        case GET_RSVPS + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case GET_RSVPS + "_FULFILLED":
            return Object.assign({}, state, {isLoading: false, rsvps: action.payload})
        default:
        return state;
    }
}

//actions
export function getEventInfo() {
    return {
        type: GET_EVENT_INFO,
        payload: axios.get('/api/react-group').then(response => response.data)
    }
}
export function getRSVPs(eventID) {
    return {
        type: GET_RSVPS,
        payload: axios.get(`/api/react-group/${eventID}`).then(response => response.data)
    }
}