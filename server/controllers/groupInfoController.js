const axios = require('axios');
const urlName = 'reactjs-dallas'
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
    }
}