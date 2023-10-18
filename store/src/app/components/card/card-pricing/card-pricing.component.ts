import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-pricing',
	templateUrl: './card-pricing.component.html',
	styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

	// Variáveis para armazenar o preço e a plataforma
	@Input()
	gameType: string = "Digital PS4";
	@Input()
	gamePrice: string = "R$ 299,90"

	constructor() { }

	ngOnInit(): void {
	}

}
