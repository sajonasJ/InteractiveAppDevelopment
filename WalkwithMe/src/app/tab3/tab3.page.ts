import { Component, OnInit, ViewChild } from '@angular/core';
declare let google: any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('map', { static: true }) mapElement: any;
  map: any;
  marker: any;
  constructor() {}
  ngOnInit() {
    let latLng = new google.maps.LatLng(-27.963085, 153.383053);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let infoWindow = new google.maps.InfoWindow({
      content: '<h4>2701ICT Headquarters</h4>'
    });
    google.maps.event.addListener(this.marker, 'click', () => {
      infoWindow.open(this.map, this.marker);
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.map.setCenter(pos);
      });
    } else {
      alert("Geolocation not supported");
    }
  }

}
