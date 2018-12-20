import React from 'react'
import css from './index.scss'

type Props = {}
class Map extends React.Component<Props> {
  map
  constructor(props) {
    super(props)
    this.map = React.createRef()
  }

  componentDidMount() {
     (window as any).initMap = this.initMap

     loadJS(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBbXsR79I14p1ZDwq6YWv5XYd80G7OCOVs&callback=initMap'
    )
  }

  shouldComponentUpdate() {
    return false
  }

  initMap = () => {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    const mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(49.487457, 8.46604), // New York

      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffffff' }, { lightness: 17 }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 18 }]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 16 }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#dedede' }, { lightness: 21 }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            { visibility: 'on' },
            { color: '#ffffff' },
            { lightness: 16 }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }]
        },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#f2f2f2' }, { lightness: 19 }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [{ color: '#fefefe' }, { lightness: 20 }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }]
        }
      ]
    }

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>

    // Create the Google Map using our element and options defined above
    const map = new google.maps.Map(this.map.current, mapOptions)

    // Let's also add a marker while we're at it

    // tslint:disable-next-line
    new google.maps.Marker({
      map,
      position: new google.maps.LatLng(49.487457, 8.46604),
      title: 'Arbeitsplatz'
    })
  }

  render() {
    return <div id="map" className={css.map} ref={this.map} />
  }
}

function loadJS(src) {
  const ref = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = src
  script.async = true
  ref.parentNode.insertBefore(script, ref)
}

export default Map
