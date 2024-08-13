import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private positions: { [url: string]: [number, number] } = {};

  setScrollPosition(url: string, position: [number, number]): void {
    this.positions[url] = position;
  }

  getScrollPosition(url: string): [number, number] | null {
    return this.positions[url] || null;
  }
}