import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnStyle } from '../../models/buttons.models';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  // @Input() hoverBgColor: string = '#06b';
  // @Input() activeBgColor: string = '#08d';
  @Input() customStyle: BtnStyle = {
    title: 'default',
    color: '#eee',
    bgColor: '#08d',
  };
  @Output() dataEmitToParent: EventEmitter<BtnStyle> = new EventEmitter();

  sendTitleToParent(): void {
    this.dataEmitToParent.emit(this.customStyle);
  }
}
