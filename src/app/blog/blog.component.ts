import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  data: any = [];
  total: any = [];

  currentPage: number = 1;

  totalPages: number = 0;

  nums: any = [];

  page: any;

  toPage: number = 1;
  limitPage: number = 4;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  async getData() {
    await this.apiService.get('/blogs/list?page=' + this.toPage + '&limit=' + this.limitPage).subscribe(
      (response: any) => {
        const { data, total } = response.data
        this.data = data;
        this.total = total;
        this.totalPages = Math.ceil(this.total / 4);

        let nums = []
        for (let i = 1; i <= this.totalPages; i++) {
          nums.push(i)
        }
        this.nums = nums;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  prev() {
    if (Number(this.toPage) > 1) {
      if (this.toPage == 1) {
        return;
      } else {
        this.toPage--;
        this.getData();
        this.router.navigate(['/blogs/' + this.toPage]);
      }
    }
  }

  next() {
    if (Number(this.toPage) < Number(this.totalPages)) {
      if (this.toPage == this.totalPages) {
        return;
      } else {
        this.toPage++;
        this.getData();
        this.router.navigate(['/blogs/' + this.toPage]);
      }
    }
  }

  goPage(num:any) {
    this.toPage = num;
    this.router.navigate(['/blogs/' + num]);
    this.getData();
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('page')) {
      this.page = this.route.snapshot.paramMap.get('page');
    } else {
      this.page = 1;
    }
    this.getData();
  }
}

