import { Component } from '@angular/core';

interface Lugar {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [],
})
export class PropiedadesComponent {
  lugares: Lugar[] = [
    {
      titulo: 'Mi casa, Solana de los Barros',
      descripcion: 'Badajoz-Extremadura-España',
      lngLat: [-6.53951, 38.7237],
    },
    {
      titulo: 'Campo de futbol, Solana de los Barros',
      descripcion: 'Badajoz-Extremadura-España',
      lngLat: [-6.53679, 38.72841],
    },
    {
      titulo: 'Piscina Municipal, Solana de los Barros',
      descripcion: 'Badajoz-Extremadura-España',
      lngLat: [-6.53616, 38.73052],
    },
    {
      titulo: 'Cooperativa Agrosola, Solana de los Barros',
      descripcion: 'Badajoz-Extremadura-España',
      lngLat: [-6.54165, 38.72207],
    },
  ];
}
