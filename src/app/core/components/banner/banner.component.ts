
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { BannerPipe } from '../../../shared/pipe/banner.pipe';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BannerPipe],
  templateUrl: './banner.component.html',
  styleUrls:[ './banner.component.css']
})
export class BannerComponent implements OnChanges {

  @Input({required: true}) bannerTitle = '';
  @Input() bannerOverview = '';
  @Input() key = 'r_pUE7OcN8w';
  private sanitizer = inject(DomSanitizer)
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`)

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['key']){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`);
    }
    }
  }