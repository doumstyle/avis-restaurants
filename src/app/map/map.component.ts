import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const initialState = {lng: 139.753, lat: 35.6844, zoom: 14};

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=Ek9I7j7qXMHo5ThgTZbO`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    this.map.addControl(new NavigationControl({}), 'top-right');

    new Marker({color: '#FF0000'})
      .setLngLat([139.7525, 35.6846])
      .addTo(this.map);

  }
  
  ngOnDestroy() {
    this.map?.remove();
  }
}
