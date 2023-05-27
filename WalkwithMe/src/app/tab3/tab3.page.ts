import { Component, OnInit, ViewChild } from '@angular/core';
import { GeolocationService } from '../geolocation.service';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';

declare let google: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild('map', { static: true }) mapElement: any;
  map: any;
  marker: any;
  watchId: any;
  isTracking: boolean = false;
  dailyDistance: number = 0;
  weeklyDistance: number = 0;
  distanceGoals: number = 0;

  constructor(
    private geolocationService: GeolocationService, 
    private service:ServiceService) {}

  ngOnInit() {
    this.loadDistanceGoals();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latLng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        const mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );

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
      });
    } else {
      alert("Geolocation not supported");
    }
  }

  startTrackingLocation() {
    const watchOptions = {
      enableHighAccuracy: true,
      timeout: 5000, // adjust timeout as needed
    };

    let previousPosition: any = null;

    this.geolocationService.watchPosition()
      .then((position: any) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Use the retrieved latitude and longitude in your app as needed
        console.log('Current location:', lat, lng);

        // Update the marker position on the map
        const newPosition = new google.maps.LatLng(lat, lng);
        this.marker.setPosition(newPosition);
        this.map.setCenter(newPosition);

        // Calculate and update distance traveled for the day
        if (previousPosition) {
          const distance = this.calculateDistance(
            previousPosition.coords.latitude,
            previousPosition.coords.longitude,
            lat,
            lng
          );
          this.dailyDistance += distance;
        }
        previousPosition = position;

        // Calculate and update distance traveled for the week
        // You can modify this logic based on your specific requirements

        // Example: Update distance only if it's a new day (midnight)
        const currentDate = new Date();
        if (currentDate.getHours() === 0 && currentDate.getMinutes() === 0) {
          this.weeklyDistance += this.dailyDistance;
          this.dailyDistance = 0;
        }
      })
      .catch((error: any) => {
        console.log('Error retrieving location', error);
      });

    this.isTracking = true;
    console.log('Tracking started');
  }

  stopTracking() {
    // Stop tracking the user's location
    // Clear watch or perform any necessary cleanup
    // For example, if you are using Capacitor Geolocation, you can clear the watch like this:
    // this.geolocationService.clearWatch();
    this.isTracking = false;
    console.log('Tracking stopped');
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    // Haversine formula to calculate distance between two points
    const R = 6371; // Earth's radius in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
  async loadDistanceGoals() {
    const storedData = await this.service.getData();
    this.distanceGoals = storedData?.distanceGoals || 0;
  }
  
}
