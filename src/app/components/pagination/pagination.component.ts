import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input()
  actualPageIndex: number = 0;

  @Output()
  actualPageEvent: EventEmitter<number> = new EventEmitter();

  public nextPageIndex(): void {
    this.actualPageIndex++;
    this.actualPageEvent.emit(this.getPage());
  }

  public previousPageIndex(): void {
    if (this.actualPageIndex > 1) {
      this.actualPageIndex--;
      this.actualPageEvent.emit(this.getPage());
    }
  }

  public getPage(): number {
    return this.actualPageIndex;
  }

}
