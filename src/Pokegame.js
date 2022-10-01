import React, {Component} from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component{
    static defaultProps = {
        pokempon: [
            {id: 4, name: 'Charmander', type:'fire', base_eperience: 62},
            {id: 7, name: 'Squirtle', type:'water', base_eperience: 63},
            {id: 11, name: 'Metapod', type:'bug', base_eperience: 72},
            {id: 12, name: 'Butterfree', type:'flying', base_eperience: 178},
            {id: 25, name: 'Pikachu', type:'fielecticre', base_eperience: 112},
            {id: 39, name: 'Jigglypuff', type:'normal', base_eperience: 95},
            {id: 94, name: 'Gengar', type:'poison', base_eperience: 225},
            {id: 133, name: 'Eevee', type:'normal', base_eperience: 65}
        ]
    };
    render(){
        let hand1 = [];
        let hand2 =[...this.props.pokempon];
        while(hand1.length < hand2.length){
            let randIndx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIndx,1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp, pokempon)=> exp+ pokempon.base_eperience, 0);
        let exp2 = hand2.reduce((exp, pokempon)=> exp+ pokempon.base_eperience, 0);
        return(
            <div>
                <Pokedex pokempon={hand1} exp ={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokempon={hand2} exp ={exp2} isWinner={exp2 > exp1}/>
            </div>
        );
    }
}

export default Pokegame;