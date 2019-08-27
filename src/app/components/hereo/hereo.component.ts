import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-hereo',
  templateUrl: './hereo.component.html',
  styles: []
})
export class HereoComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe ( params => {
      this.heroe = this._heroesService.getHeroe(params.id);
  });
  }

}
