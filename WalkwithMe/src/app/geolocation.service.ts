import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getCurrentPosition(): Promise<Position> {
    return Geolocation.getCurrentPosition();
  }

  watchPosition() {
    return Geolocation.watchPosition({}, (position, err) => {
      if (err) {
        console.log('Error retrieving location', err);
        return;
      }

      const latitude = position?.coords.latitude;
      const longitude = position?.coords.longitude;

      // Use the retrieved latitude and longitude in your app as needed
      console.log('Current location:', latitude, longitude);
    });
  }
}
