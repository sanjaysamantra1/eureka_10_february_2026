import { CommonModule } from '@angular/common';
import { CommentService } from './../../services/comment-service';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [CommonModule],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentService = inject(CommentService);
  commentArr: WritableSignal<Comment[]> = signal([]);

  ngOnInit() {
    this.commentService.getAllComments().subscribe((response: Comment[]) => {
      this.commentArr.set(response);
    });
  }
}
