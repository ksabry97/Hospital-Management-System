import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthInterceptor } from './Shared/Core/Services/interceptor';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
// Import ALL icons
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = Object.keys(AllIcons).map(
  (key) => (AllIcons as any)[key]
);
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzIconModule],
  templateUrl: './app.html',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NZ_ICONS, useValue: icons },
  ],
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('HMS');
}
