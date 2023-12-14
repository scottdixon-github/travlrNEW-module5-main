import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  trip: any;

  // Added methods
  onGroupingClick() {
    // Implement logic for grouping
    console.log('Grouping clicked');
  }

  onSortClick() {
    // Implement logic for sorting
    console.log('Sort clicked');
  }

  onPaginationClick() {
    // Implement logic for pagination
    console.log('Pagination clicked');
  }

  onFilterClick() {
    // Implement logic for filtering
    console.log('Filter clicked');
  }

  onSearchClick() {
    // Implement logic for searching
    console.log('Search clicked');
  }

  onViewClick() {
    // Implement logic for viewing
    console.log('View clicked');
  }

  onDeleteClick() {
    // Implement logic for deleting
    console.log('Delete clicked');
  }

  onEditClick() {
    // Implement logic for editing
    console.log('Edit clicked');
  }

  onAddClick() {
    // Implement logic for adding
    console.log('Add clicked');
  }

  title = 'Travlr Administration Webserver';
}
