import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating = 0;
  @Input() maxStars = 10;

  stars: string[] = [];

  ngOnChanges() {
    const filledStarsCount = Math.floor((this.rating / 10) * this.maxStars);
    const isHalfStar = this.rating % 1 !== 0;

    this.stars = Array(this.maxStars).fill('fa-star', 0, filledStarsCount);

    if (isHalfStar && filledStarsCount < this.maxStars) {
      this.stars[filledStarsCount] = 'fa-star-half';
    } else if (filledStarsCount < this.maxStars) {
      this.stars[filledStarsCount] = 'fa-star-o';
    }
  }
}
