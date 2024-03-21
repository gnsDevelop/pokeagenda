import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'card-pokemon',
    templateUrl: './card-pokemon.component.html',
    styleUrl: './card-pokemon.component.scss'
})

export class CardPokemonComponent implements OnInit
{
    @Input() pokemonName: string;
    @Input() pokemonNumber: number;
    public image: string;
    public imageNumber: string;

    ngOnInit(): void 
    {
        this.buildImageUlr();
    }

    private buildImageUlr(): void
    {
        if (this.pokemonNumber <= 9)
        {
            this.imageNumber = '00' + this.pokemonNumber.toString();
        }
        else if (this.pokemonNumber > 9 && this.pokemonNumber <= 99)
        {
            this.imageNumber = '0' + this.pokemonNumber.toString();
        }
        else 
        {
            this.imageNumber = this.pokemonNumber.toString();
        }

        // Atribuir a variavel 'image' uma URL + o imageNumber
        this.image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.imageNumber + '.png';
    }
}

// Ciclo de vida de um componente.
// Nasce - Primeiro passo
// Cresce - Mudanças
// Morre - Destruir
