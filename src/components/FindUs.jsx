import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

export default function FindUs() {
  const address = "1234 N Main St, Fort Worth, TX 76106, USA";
  const coordinates = { lat: 32.77639, lng: -97.3457 };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOXrBGty4UmANDZbuXAy6OOvUkURjZ02o",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <a
        className="no-underline"
        href="https://www.google.com/maps/place/1234+N+Main+St,+Fort+Worth,+TX+76106/@32.77622,-97.3481253,17z/data=!3m1!4b1!4m6!3m5!1s0x864e76ac887b6e01:0x684b7d0160556e5e!8m2!3d32.77622!4d-97.345545!16s%2Fg%2F11sn_3pxky?entry=ttu"
        target="_blank"
      >
        1234 Main street avenue, Fort Worth, Texas 12345
      </a>
      <GoogleMap
        mapContainerStyle={{ width: "800px", height: "400px" }}
        center={coordinates}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF position={coordinates} />
      </GoogleMap>
    </div>
  ) : (
    <>Map could not load</>
  );
}
