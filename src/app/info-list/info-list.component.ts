import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './info-list.component.html',
  styleUrl: './info-list.component.scss'
})
export class InfoListComponent implements OnInit {
  dataSource: any[] = [];
  headers: string[] = ['Name', 'Category', 'Description', 'Action'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dataSource = JSON.parse(localStorage.getItem("info") as any)
  }

  navigateToAddEditInfo() {
    this.router.navigate(["add-info"])
  }
  editItem(data: any) {
    this.router.navigate(['add-info'], { queryParams: { id: data.id } })
  }

  deleteItem(item: any) {
    const index = this.dataSource.findIndex(res => res.id === item.id);
    this.dataSource.splice(index, 1);
    localStorage.setItem("info", JSON.stringify(this.dataSource));
    this.dataSource = JSON.parse(localStorage.getItem("info") as any)
  }
}
