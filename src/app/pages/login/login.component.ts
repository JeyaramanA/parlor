import { Component, inject } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    InputGroupAddonModule,
    ReactiveFormsModule,
    InputGroupModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [AuthService, MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  logoSrc = 'assets/icons/logo.svg';
  footerText = `© ${new Date().getFullYear()} Jeya Raman. All rights reserved.`;
  private formBuilder = inject(FormBuilder);
  private route: Router = inject(Router);
  private authService = inject(AuthService);
  private messageService = inject(MessageService);

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  get isLoginDisabled(): boolean {
    return this.loginForm.invalid;
  }
  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (this.loginForm.valid) {
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          response.code !== 200 &&
            this.messageService.add({
              severity: 'error',
              detail: response.message,
            });

          this.route.navigate(['encompass-connector']);
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', detail: err.message });
          console.error('Login failed:', err);
        },
      });
    }
  }
}
