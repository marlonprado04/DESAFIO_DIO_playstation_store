import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	// Variável para armazenar o caminho da imagem
	@Input()
	gameCover: string = "";


	// Cria variável para armazenar informação da label
	@Input()
	gameLabel: string = "";


	// Variáveis para armazenar o preço e a plataforma
	@Input()
	gameType: string = "Digital PS4";
	@Input()
	gamePrice: string = "R$ 299,90"

	constructor() { }

	ngOnInit(): void {
	}

}
