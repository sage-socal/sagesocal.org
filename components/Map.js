import { compose, withProps } from 'recompose'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps'

export default compose(
	withProps({
		googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)(() =>
	<GoogleMap defaultZoom={12} defaultCenter={{ lat: 33.76, lng: -118.3 }}>
		{/* <Marker
			name="Palos Verdes Peninsula High School"
			position={{ lat: 33.7775164, lng: -118.3739619 }}
		/>
		<Marker
			name="Palos Verdes High School"
			position={{ lat: 33.779738, lng: -118.4199613 }}
		/> */}
	</GoogleMap>
)
