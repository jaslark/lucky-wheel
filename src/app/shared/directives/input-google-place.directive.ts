import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

declare var google: any;

@Directive({
  selector: '[appGooglePlaceDirective]'
  // providers: [NgModel],
  // tslint:disable-next-line:use-host-property-decorator
  // host: {
  //   '(input)': 'onInputChange()'
  // }
})
export class GoogleplaceDirective {
  @Output() selectedAddress: EventEmitter<any> = new EventEmitter();
  modelValue: any;
  autocomplete: any;
  private _el: HTMLElement;

  constructor(el: ElementRef) {
    this._el = el.nativeElement;
    // this.modelValue = this.model;
    const input = this._el;

    this.autocomplete = new google.maps.places.Autocomplete(input, {
      types: ['geocode'] // 'establishment' / 'address' / 'geocode'
    });
    this.autocomplete.setFields(['address_components', 'geometry', 'name']);

    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      const place = this.autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: any) {
    console.log();

    const result: any = {
      country_code: null,
      country_name: null,
      lat: null,
      lng: null,
      state_id: null,
      state_name: null,
      zip_code: null,
      city_name: null,
      address: null
    };
    const address_components = place['address_components'];
    result.address = place['name'] || null;

    if (place['geometry']['location']) {
      result.lat = place['geometry']['location'].lat();
      result.lng = place['geometry']['location'].lng();
    }

    address_components.forEach((item: any) => {
      if (item['types'] && item['types'][0] === 'country') {
        // result.country_code = item['short_name'];
        result.country_code = item['short_name'];
        result.country_name = item['long_name'];
      }

      if (item['types'] && item['types'][0] === 'administrative_area_level_1') {
        // result.state_id = item['short_name'];
        result.state_id = item['short_name'];
        result.state_name = item['long_name'];
      }

      if (item['types'] && item['types'][0] === 'postal_code') {
        result.zip_code = item['long_name'];
      }

      if (item['types'] && item['types'][0] === 'locality') {
        result.city_name = item['long_name'];
      }
    });

    this.selectedAddress.emit(result);
  }

  onInputChange() {}
}
