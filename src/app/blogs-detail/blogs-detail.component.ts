import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs-detail',
  templateUrl: './blogs-detail.component.html',
  styleUrls: ['./blogs-detail.component.css']
})
export class BlogsDetailComponent {
  data: any = [];
  id: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  async getData() {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.apiService.detail('/blogs/detail', this.id).subscribe(
      (response: any) => {
        const { data } = response.data
        this.data = data;
        console.log(this.data)
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.getData();
  }
}

