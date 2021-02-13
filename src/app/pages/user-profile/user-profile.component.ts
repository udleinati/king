import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  serviceForm = this.fb.group({
    name: [null, Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
