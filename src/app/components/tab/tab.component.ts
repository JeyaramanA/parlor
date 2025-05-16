import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: true,
  imports: [],
})
export class TabComponent {
  @Output() tabChange = new EventEmitter<string>();

  tabs = ['Credentials', 'Mappings', 'Migrate Loans'];
  activeTab = 'Credentials'; // default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.tabChange.emit(tab)
  }

  onKeyDown(event: KeyboardEvent, tab: any): void {
    // Add your logic here, e.g., handle arrow keys or other key events
    console.log('Key pressed:', event.key, 'on tab:', tab);
  }
}
