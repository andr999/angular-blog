import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    post$: Observable<Post[]>

  constructor(private postService: PostService) { }

  ngOnInit() {
      this.post$ = this.postService.getAll()
  }

}
