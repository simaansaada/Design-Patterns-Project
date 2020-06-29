import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'design-patterns-project';
  input: {
    version: string, student_name_1: string,
    student_name_2: string
  };
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<{ version: string, student_name_1: string, student_name_2: string }>('assets/input.json').subscribe((text) => {
      this.input = text;
    });

  }

}
