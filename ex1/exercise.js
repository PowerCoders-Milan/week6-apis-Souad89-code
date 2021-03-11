initMap=()=> {
    const myCity = { lat:  33.5074558, lng: 36.2128553 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myCity,
    });
    new google.maps.Marker({
      position: myCity,
      map,
      title: "Damascus!",
    });
  }
 