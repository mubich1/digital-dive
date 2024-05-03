import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-info',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './add-edit-info.component.html',
  styleUrl: './add-edit-info.component.scss'
})
export class AddEditInfoComponent implements OnInit {
  form!: FormGroup;
  pageHeading: string = "Add";
  formData: any[] = [];
  categories: any = [
    {
      id: 1, name: "Electronics"
    },
    {
      id: 2, name: "Clothing"
    },
    {
      id: 3, name: "Books"
    },
    {
      id: 4, name: "Other"
    }
  ]
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.intilizeForm();
    this.formData = JSON.parse(localStorage.getItem("info") || '[]');
    this.activatedRoute.queryParams.subscribe((param: any) => {
      if (param.id) {
        this.formData.find(info => {
          if (info.id === Number(param.id)) {
            this.form.patchValue(info)
          }
        })
        this.pageHeading = "Update";
      }
    })
  }

  ngOnInit(): void {
  }


  intilizeForm() {
    this.form = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  saveItem(form: any) {
    if (form.valid) {
      if (this.pageHeading === "Update") {
        const index = this.formData.findIndex(res => res.id === form.value.id);
        if (index !== -1) {
          this.formData.splice(index, 1, form.value);
          localStorage.setItem("info", JSON.stringify(this.formData))
          this.router.navigate(['info-list']);
        }
      } else {
        const id = Math.floor(100000 + Math.random() * 900000);
        form.value.id = id;
        this.formData.push(form.value)
        localStorage.setItem("info", JSON.stringify(this.formData));
        this.router.navigate(['info-list'])
      }
    } else {
      this._snackBar.open("Please fill the required information.", "ok")
    }

  }
}
