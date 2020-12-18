import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, ItemCreate } from 'src/app/interfaces/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent implements OnInit {
  @Input() set item(val: Item | undefined) {
    if (val !== undefined) {
      this.newItem = val;
      this.create = false;
    } else {
      this.create = true;
    }
  }

  @Output() saved = new EventEmitter<void>();

  newItem: ItemCreate = {
    _id: 0,
    name: '',
    description: '',
    productFeatures: {},
    created_at: new Date(),
  };
  create: boolean = true;
  selectedFile: File | undefined = undefined;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.clearFrom();
  }

  clearFrom(): void {
    this.newItem = {
      _id: 0,
      name: '',
      description: '',
      productFeatures: {},
      created_at: new Date(),
    };
  }

  onSave(): void {
    console.log(this.newItem);
    this.itemService
      .saveItem(this.newItem)
      .subscribe((items) => this.saved.emit());
    this.clearFrom();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile !== undefined)
      this.itemService
        .uploadFile(this.selectedFile)
        .subscribe((res) => console.log(res));
  }
}
