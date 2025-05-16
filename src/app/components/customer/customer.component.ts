import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { Customer } from '../../utils/interface';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    CardModule,
  ],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customers: Customer[] = [];
  editIndex: number = -1;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: [''],
    });
  }

  onSubmit() {
    if (this.customerForm.invalid) return;

    if (this.editIndex > -1) {
      this.customers[this.editIndex] = {
        id: this.customers[this.editIndex].id,
        ...this.customerForm.value,
      };
      this.editIndex = -1;
    } else {
      const newCustomer: Customer = {
        id: Date.now(),
        ...this.customerForm.value,
      };
      this.customers.push(newCustomer);
    }

    this.customerForm.reset();
  }

  editCustomer(customer: Customer, index: number) {
    this.customerForm.patchValue(customer);
    this.editIndex = index;
  }
}
