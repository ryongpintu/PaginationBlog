import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  constructor() { }
  @Input() details;
  // set details(val) {
  //   this._details = val;
  // }

  // @Input() get details() {
  //   return this._details;
  // }
  ngOnInit() {
  }

}
