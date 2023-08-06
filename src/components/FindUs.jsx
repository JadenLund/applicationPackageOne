// import React, { useState } from "react";
// import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

export default function FindUs(props) {
  //   const coords = { lat: 32.73124, lng: -97.32594 };

  //   return (
  //     <div className="h-full w-full">
  //       <Map google={props.google} zoom={15} initiaCenter={coords}></Map>
  //     </div>
  //   );
  return (
    <div className="text-center ">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
        Find Us
      </h1>
      <h2>1234 Main street avenue, Fort Worth, Texas 12345</h2>
      <div class="relative w-full h-96">
        <iframe
          class="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.6047778442107!2d-97.34812528868899!3d32.77621997355404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e76ac887b6e01%3A0x684b7d0160556e5e!2s1234%20N%20Main%20St%2C%20Fort%20Worth%2C%20TX%2076106!5e0!3m2!1sen!2sus!4v1691175987841!5m2!1sen!2sus"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div className="bg-bg"></div>
    </div>
  );
}
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAOXrBGty4UmANDZbuXAy6OOvUkURjZ02o",
// })(FindUs);
