import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css']
})
export class LinkCardComponent {

  @Input()
  title: string | null = null;

  @Input()
  subtitle: string | null = null;

  @Input()
  link: string | null = null;

  @Input()
  imageLink: string | null = null;

  compressedTitle: string | null = null;

  ngOnInit(): void {
    this.compressTitle();
  }

  private compressTitle(): void {
    const maxChars = 15;

    if (this.title && this.title.length > maxChars) {
      this.compressedTitle = `${this.title.slice(0, maxChars-1)}...`;
    } else {
      this.compressedTitle = this.title;
    }
  }

}
