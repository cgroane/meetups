import axios from 'axios';
// action types
const GET_EVENT_INFO = "GET_EVENT_INFO";
const GET_RSVPS = "GET_RSVPS";
const GET_PLACES = "GET_PLACES";
const ADD_PLACE = "ADD_PLACE";
const REMOVE_PLACE = "REMOVE_PLACE";

//initial state
const initialState = {
    reactEvent: {},
    rsvps: [],
    places: [],
    selectedPlaces: []
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
        case GET_PLACES + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case GET_PLACES + "_FULFILLED":
            return Object.assign({}, state, {isLoading: false, places: action.payload})
        case ADD_PLACE:
            {
                if (!state.selectedPlaces.find(x => x.place_id == action.payload)){
                    const newPlace = action.payload;
                    const newPlaces = state.selectedPlaces;
                    newPlaces.push(newPlace);
                    return Object.assign({}, state, {selectedPlaces: newPlaces})
                } 
                else {
                    return state
                }
            }
        case REMOVE_PLACE:
            {
                const remove = action.payload;
                const newPlaces = state.selectedPlaces.filter((x) => x.place_id !== remove)
                return Object.assign({}, state, {selectedPlaces: newPlaces})
            }
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
export function getPlaces(obj) {
    return {
        type: GET_PLACES,
        payload: axios.post('/api/places', obj).then(response => response.data)
    }
}

export function selectPlace(obj) {
    return {
        type: ADD_PLACE,
        payload: obj
    }
}

export function removePlace(obj) {
    return {
        type: REMOVE_PLACE,
        payload: obj
    }
}