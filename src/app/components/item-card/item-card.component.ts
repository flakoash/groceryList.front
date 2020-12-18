import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item = {
    _id: 0,
    name: '',
    description: '',
    productFeatures: { key: 'val' },
    created_at: new Date(),
  };
  Object = Object;

  constructor() {}

  ngOnInit(): void {}
}
