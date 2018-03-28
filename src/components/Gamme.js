import React, { Component } from 'react';
import { notesManche, gammeTemperee } from '../datas/constantes';
import { Scale } from 'tonal';
import { scale } from 'tonal-dictionary';
import imageplay from '../images/play.png';
import { player } from './player';
import { popNote, popNoteOut } from './utilitaires';


const modes = scale.names();

 
class Gamme extends Component {

    constructor(props) {
      super(props);
        this.state = { 
            note: 'C', 
            gamme : Scale.notes("C", "major"),
            mode: 'major'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
  
    handleChange(event) {
       this.setState({ [event.target.name]: event.target.value }, () => {
            this.handleSubmit();
        });
    }
  
    handleSubmit(event) {
        var newgamme = Scale.notes(this.state.note, this.state.mode);
        this.setState({
            gamme : newgamme 
        });
    }

    render() {
        //mise en tableau des puces
        const affichepuces = (corde, gamme) => {
            //display toutes les notes de la corde
            return corde.map((notegamme,key) => {
                let [ noteReelle, noteAlt1, noteAlt2 ] = notegamme;
                //console.log(noteReelle, noteAlt1, noteAlt2);
                let className = 'puce';
                className += ' '+noteReelle;
                if (typeof noteAlt1 !== 'undefined') {
                    className += ' '+noteAlt1;
                }
                if (typeof noteAlt2 !== 'undefined') {
                    className += ' '+noteAlt2;
                }
                
                //affichage des puces correspondantes aux notes de la gamme désirée
                gamme.forEach(element => {
                    if(element === noteReelle) className += ' myvisible';
                    else if(element === noteAlt1){
                        className += ' myvisible';
                        noteReelle = noteAlt1;
                    }else if(element === noteAlt2){
                        className += ' myvisible';
                        noteReelle = noteAlt2;
                    } 
                });
        
                return  (
                    <li key={noteReelle+key} id={noteReelle+key} className={className} onMouseOver={popNote.bind(this, noteReelle)} onMouseOut={popNoteOut.bind(this, noteReelle)} >
                        {noteReelle}
                    </li>
                    
                );
            });
        }
        
        return (
            <div id="principal" className="row">
                <div id="selecteurs" className="col-md-6 align-self-center">
                    <form>
                        <div className="form-row">
                            <div className="col-md-4">
                                <select className="form-control" name="note" value={this.state.note} onChange={this.handleChange}>
                                    {gammeTemperee.map(function (item,id) {
                                            return <option key={id} value={item}>{item}</option>;
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-md-8">
                                <select className="form-control" name="mode" value={this.state.mode} onChange={this.handleChange}>
                                    {modes.map(function (item,id) {
                                            return <option key={id} value={item}>{item}</option>;
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div id="listenotes" className="col-md-6 align-self-center">
                    {this.state.gamme.map(function (item,id) {
                            return <span key={id} className="affichenote">{item}</span>
                        })
                    }<img src={imageplay} className="play" />
                        
                </div>
            
                <div id="manche">
                    <div id="contpuces">
                        {notesManche.map((corde,keycorde) => {
                            return(
                                <ul key={keycorde} id="ulpuces">
                                    {affichepuces(corde, this.state.gamme)}
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
  }
  
export default Gamme;