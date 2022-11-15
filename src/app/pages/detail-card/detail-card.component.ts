import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  id!: string;
  card$!: Observable<Card>;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    //this.cardService.getDetailCard(this.id).subscribe((res) => console.log(res));
    this.card$ = this.cardService.getDetailCard(this.id);
  }

}
