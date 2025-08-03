import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthInterceptor } from './Shared/Core/Services/interceptor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('HMS');
}
