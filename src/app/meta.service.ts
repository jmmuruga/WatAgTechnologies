import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private titleService: Title) {}
  setMetaInfo(title: string, description: string): void {
    try {
      this.titleService.setTitle(title);
      console.log(`Title set to: ${title}`);
      this.meta.updateTag({ name: 'description', content: description });
      console.log(`Meta description set to: ${description}`);
    } catch (error) {
      console.error('Error setting meta info:', error);
    }
  }
}
