
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
        {display:"AmusementPark",         FeatureType: "amusement_park"},
        {display:"Aquarium",              FeatureType: "aquarium"},
        {display:"ArtGallery",            FeatureType: "art_gallery"},
        {display:"Atm",                   FeatureType: "atm"},
        {display:"Bakery",                FeatureType: "bakery"},
        {display:"Bank",                  FeatureType: "bank"},
        {display:"Bar",                   FeatureType: "bar"},
        {display:"BeautySalon",           FeatureType: "beauty_salon"},
        {display:"BicycleStore",          FeatureType: "bicycle_store"},
        {display:"BookStore",             FeatureType: "book_store"},
        {display:"BowlingAlley",          FeatureType: "bowling_alley"},
        {display:"BusStation",            FeatureType: "bus_station"},
        {display:"Cafe",                  FeatureType: "cafe"},
        {display:"Campground",            FeatureType: "campground"},
        {display:"CarDealer",             FeatureType: "car_dealer"},
        {display:"CarRental",             FeatureType: "car_rental"},
        {display:"CarRepair",             FeatureType: "car_repair"},
        {display:"CarWash",               FeatureType: "car_wash"},
        {display:"Casino",                FeatureType: "casino"},
        {display:"Cemetery",              FeatureType: "cemetery"},
        {display:"Church",                FeatureType: "church"},
        {display:"CityHall",              FeatureType: "city_hall"},
        {display:"ClothingStore",         FeatureType: "clothing_store"},
        {display:"ConvenienceStore",      FeatureType: "convenience_store"},
        {display:"Courthouse",            FeatureType: "courthouse"},
        {display:"Dentist",               FeatureType: "dentist"},
        {display:"DepartmentStore",       FeatureType: "department_store"},
        {display:"Doctor",                FeatureType: "doctor"},
        {display:"Electrician",           FeatureType: "electrician"},
        {display:"ElectronicsStore",      FeatureType: "electronics_store"},
        {display:"Embassy",               FeatureType: "embassy"},
        {display:"FireStation",           FeatureType: "fire_station"},
        {display:"Florist",               FeatureType: "florist"},
        {display:"FuneralHome",           FeatureType: "funeral_home"},
        {display:"FurnitureStore",        FeatureType: "furniture_store"},
        {display:"GasStation",            FeatureType: "gas_station"},
        {display:"GroceryOrSupermarket",  FeatureType: "grocery_or_supermarket"},
        {display:"Gym",                   FeatureType: "gym"},
        {display:"HairCare",              FeatureType: "hair_care"},
        {display:"HardwareStore",         FeatureType: "hardware_store"},
        {display:"HinduTemple",           FeatureType: "hindu_temple"},
        {display:"HomeGoodsStore",        FeatureType: "home_goods_store"},
        {display:"Hospital",              FeatureType: "hospital"},
        {display:"InsuranceAgency",       FeatureType: "insurance_agency"},
        {display:"JewelryStore",          FeatureType: "jewelry_store"},
        {display:"Laundry",               FeatureType: "laundry"},
        {display:"Lawyer",                FeatureType: "lawyer"},
        {display:"Library",               FeatureType: "library"},
        {display:"LiquorStore",           FeatureType: "liquor_store"},
        {display:"LocalGovernmentOffice", FeatureType: "local_government_office"},
        {display:"Locksmith",             FeatureType: "locksmith"},
        {display:"Lodging",               FeatureType: "lodging"},
        {display:"MealDelivery",          FeatureType: "meal_delivery"},
        {display:"MealTakeaway",          FeatureType: "meal_takeaway"},
        {display:"Mosque",                FeatureType: "mosque"},
        {display:"MovieRental",           FeatureType: "movie_rental"},
        {display:"MovieTheater",          FeatureType: "movie_theater"},
        {display:"MovingCompany",         FeatureType: "moving_company"},
        {display:"Museum",                FeatureType: "museum"},
        {display:"NightClub",             FeatureType: "night_club"},
        {display:"Painter",               FeatureType: "painter"},
        {display:"Park",                  FeatureType: "park"},
        {display:"Parking",               FeatureType: "parking"},
        {display:"PetStore",              FeatureType: "pet_store"},
        {display:"Pharmacy",              FeatureType: "pharmacy"},
        {display:"Physiotherapist",       FeatureType: "physiotherapist"},
        {display:"Plumber",               FeatureType: "plumber"},
        {display:"Police",                FeatureType: "police"},
        {display:"PostOffice",            FeatureType: "post_office"},
        {display:"RealEstateAgency",      FeatureType: "real_estate_agency"},
        {display:"Restaurant",            FeatureType: "restaurant"},
        {display:"RoofingContractor",     FeatureType: "roofing_contractor"},
        {display:"RvPark",                FeatureType: "rv_park"},
        {display:"School",                FeatureType: "school"},
        {display:"ShoeStore",             FeatureType: "shoe_store"},
        {display:"ShoppingMall",          FeatureType: "shopping_mall"},
        {display:"Spa",                   FeatureType: "spa"},
        {display:"Stadium",               FeatureType: "stadium"},
        {display:"Storage",               FeatureType: "storage"},
        {display:"Store",                 FeatureType: "store"},
        {display:"SubwayStation",         FeatureType: "subway_station"},
        {display:"Synagogue",             FeatureType: "synagogue"},
        {display:"TaxiStand",             FeatureType: "taxi_stand"},
        {display:"TrainStation",          FeatureType: "train_station"},
        {display:"TravelAgency",          FeatureType: "travel_agency"},
        {display:"University",            FeatureType: "university"},
        {display:"VeterinaryCare",        FeatureType: "veterinary_care"},
        {display:"Zoo",                   FeatureType: "zoo"},

    ]
}