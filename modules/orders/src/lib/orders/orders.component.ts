import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from '@myngapp/products';

import { NxWelcomeComponent } from '../../../../../src/app/nx-welcome.component'

@Component({
  selector: 'myngapp-orders',
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, ProductsComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
