import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes=[
      {id:11,name:'anish1'},
      {id:12,name:'anish2'},
      {id:13,name:'anish3'},
      {id:14,name:'anish4'},
      {id:15,name:'anish5'},
      {id:16,name:'anish6'},

    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
