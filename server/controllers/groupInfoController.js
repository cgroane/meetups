const axios = require('axios');
const urlName = 'reactjs-dallas';
require('dotenv').config();

module.exports = {
    getReactJSInfo: (req, res, next) => {
            axios.get(`https://api.meetup.com/${urlName}/events`).then(response => {
                var eventsUpcoming = response.data.filter((event) => event.status == 'upcoming')
                return (res.status(200)
                .send(eventsUpcoming[0]))
            }
        ).catch(() => res.status(500).send())
    },
    getRSVPs: (req, res, next) => {
        axios.get(`https://api.meetup.com/${urlName}/events/${req.params.eventID}/rsvps`).then(response => res.status(200)
        .send(response.data))
        .catch(() => res.status(500).send())
    },
    getPlaces: (req, res, next) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.location.lat},${req.body.location.lng}&radius=${req.body.meters}&types=${req.body.type}&key=${process.env.GOOGLE}`)
        .then(response => {
            if (response.data.status == 'OK') {
                return res.status(200).send(response.data.results)
            } else {
                return res.status(200).send(response.data)
            }
           
        })
        .catch(() => res.status(500).send())
    },
    getPlaceDetails: (req, res, next) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.params.place}&key=${process.env.GOOGLE}`)
        .then(response => res.status(200).send(response.data))
        .catch((err) => res.status(500).send(err))
    }
}