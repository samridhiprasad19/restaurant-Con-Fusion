import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionsService } from '../services/promotions.service';
import { LeaderService } from '../services/leader.service';
import { Leader} from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   dish: Dish;
  promotion: Promotion;
  leader:Leader;
  constructor(private dishservice: DishService,private promotionservice: PromotionsService , private leaderservice:LeaderService) { }

  ngOnInit() {
   this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader=this.leaderservice.getFeaturedleaders();
  }

}
