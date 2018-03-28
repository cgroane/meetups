
const google = window.google;

export default {
    initMap: (mapDiv, obj, array) => {
        this.map = new google.maps.Map(mapDiv, {
            zoom: 10,
            center: {
                lat: (obj.venue.lat*1),
                lng: (obj.venue.lon*1)
            },
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#365DD6"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }      
            ]
        })
        mapDiv.style.right = 'Ovw';
        mapDiv.style.top = '0vh';
        var markers = array.forEach((cur, ind, arr) => {
            var self = this;
            var marker = new google.maps.Marker({
                map: self.map,
                position: {
                    lat: cur.geometry.location.lat,
                    lng: cur.geometry.location.lng
                }
            })
            var infowindow = new google.maps.InfoWindow;
            var infowindowContent = `
                <div>${cur.name}</div>
            `
            infowindow.setContent(infowindowContent);
            marker.addListener('mouseover', function() {
                infowindow.open(self.map, marker)
            })
            marker.addListener('mouseout', function() {
                infowindow.close(self.map, marker)
            })
        }) 
    },
    getPlaces: () => {
        
    },
    setMarkers: (mapDiv, array) => {
        return array.forEach((cur, ind, arr) => {
            var self = this;
            var marker = new google.maps.Marker({
                map: mapDiv,
                position: {
                    lat: cur.geometry.location.lat,
                    lng: cur.geometry.location.lng
                }
            })
        })
    },
    googlePlacesTypes: [
        {display:"Accounting",            FeatureType: "accounting"},
        {display:"Airport",               FeatureType: "airport"},
        {display:"Amusement Park",         FeatureType: "amusement_park"},
        {display:"Aquarium",              FeatureType: "aquarium"},
        {display:"Art Gallery",            FeatureType: "art_gallery"},
        {display:"Atm",                   FeatureType: "atm"},
        {display:"Bakery",                FeatureType: "bakery"},
        {display:"Bank",                  FeatureType: "bank"},
        {display:"Bar",                   FeatureType: "bar"},
        {display:"Beauty Salon",           FeatureType: "beauty_salon"},
        {display:"Bicycle Store",          FeatureType: "bicycle_store"},
        {display:"Book Store",             FeatureType: "book_store"},
        {display:"Bowling Alley",          FeatureType: "bowling_alley"},
        {display:"Bus Station",            FeatureType: "bus_station"},
        {display:"Cafe",                  FeatureType: "cafe"},
        {display:"Campground",            FeatureType: "campground"},
        {display:"Car Dealer",             FeatureType: "car_dealer"},
        {display:"Car Rental",             FeatureType: "car_rental"},
        {display:"Car Repair",             FeatureType: "car _repair"},
        {display:"Car Wash",               FeatureType: "car_ wash"},
        {display:"Casino",                FeatureType: "casino"},
        {display:"Cemetery",              FeatureType: "cemetery"},
        {display:"Church",                FeatureType: "church"},
        {display:"City Hall",              FeatureType: "city_h all"},
        {display:"Clothing Store",         FeatureType: "clothing_st ore"},
        {display:"Convenience Store",      FeatureType: "convenience_sto re"},
        {display:"Courthouse",            FeatureType: "courthouse"},
        {display:"Dentist",               FeatureType: "dentist"},
        {display:"Department Store",       FeatureType: "department_ store"},
        {display:"Doctor",                FeatureType: "doctor"},
        {display:"Electrician",           FeatureType: "electrician"},
        {display:"Electronics Store",      FeatureType: "electronics_s tore"},
        {display:"Embassy",               FeatureType: "embassy"},
        {display:"Fire Station",           FeatureType: "fire_st ation"},
        {display:"Florist",               FeatureType: "florist"},
        {display:"Funeral Home",           FeatureType: "funeral_hom e"},
        {display:"Furniture Store",        FeatureType: "furniture_stor e"},
        {display:"Gas Station",            FeatureType: "gas_station"}, 
        {display:"Grocery Or Supermarket",  FeatureType: "grocery_or_supermar ke t"},
        {display:"Gym",                   FeatureType: "gym"},
        {display:"Hair Care",              FeatureType:  "hair_care"},
        {display:"Hardware Store",         FeatureType: "hard ware_store"},
        {display:"Hindu Temple",           FeatureType: "hi ndu_temple"},
        {display:"Home Goods Store",        FeatureType: "ho me_go ods_store"},
        {display:"Hospital",              FeatureType: "hospital"},
        {display:"Insurance Agency",       FeatureType: "insurance _agency"},
        {display:"Jewelry Store",          FeatureType: "jewelry_ store"},
        {display:"Laundry",               FeatureType: "laundry"},
        {display:"Lawyer",                FeatureType: "lawyer"},
        {display:"Library",               FeatureType: "library"},
        {display:"Liquor Store",           FeatureType: "liquor_s tore"},
        {display:"Local Government Office", FeatureType: "local_go vernment_o ffice"},
        {display:"Locksmith",             FeatureType: "locksmith"},
        {display:"Lodging",               FeatureType: "lodging"},
        {display:"Meal Delivery",          FeatureType:  "meal_delivery"},
        {display:"Meal Takeaway",          FeatureType: " meal_takeaway"},
        {display:"Mosque",                FeatureType: "mosque"},
        {display:"Movie Rental",           FeatureType: "mo vie_rental"},
        {display:"Movie Theater",          FeatureType: "mov ie_theater"},
        {display:"Moving Company",         FeatureType: "movin g_company"},
        {display:"Museum",                FeatureType: "museum"},
        {display:"Night Club",             FeatureType: "night _club"},
        {display:"Painter",               FeatureType: "painter"},
        {display:"Park",                  FeatureType: "park"},
        {display:"Parking",               FeatureType: "parking"},
        {display:"Pet Store",              FeatureType: "pet_ store"},
        {display:"Pharmacy",              FeatureType: "pharmacy"},
        {display:"Physiotherapist",       FeatureType: "physiotherapist"},
        {display:"Plumber",               FeatureType: "plumber"},
        {display:"Police",                FeatureType: "police"},
        {display:"Post Office",            FeatureType: "post_o ffice"},
        {display:"Real Estate Agency",      FeatureType: "real_es tate_a gency"},
        {display:"Restaurant",            FeatureType: "restaurant"},
        {display:"Roofing Contractor",     FeatureType: "roofing_ contractor"},
        {display:"Rv Park",                FeatureType: "rv_p ark"},
        {display:"School",                FeatureType: "school"},
        {display:"Shoe Store",             FeatureType: "shoe_st ore"},
        {display:"Shopping Mall",          FeatureType: "shopping_mall"},
         {display:"Spa",                   FeatureType: "spa"},
        {display:"Stadium",               FeatureType: "stadium"},
        {display:"Storage",               FeatureType: "storage"},
        {display:"Store",                 FeatureType: "store"},
        {display:"Subway Station",         FeatureType: "subway_station"},
         {display:"Synagogue",             FeatureType: "synagogue"},
        {display:"Taxi Stand",             FeatureType: "taxi_stand"} ,
        {display:"Train Station",          FeatureType: "train_station" },
        {display:"Travel Agency",          FeatureType: "travel_agency"}, 
        {display:"University",            FeatureType: "university"},
        {display:"Veterinary Care",        FeatureType: "veterinary_care"},
         {display:"Zoo",                   FeatureType: "zoo"},

    ]
}