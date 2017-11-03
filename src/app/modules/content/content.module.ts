// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ContentComponent } from './content/content.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentComponent,
    SearchButtonComponent,
    SearchResultComponent
  ]
})
export class ContentModule { }
