import React from "react";
import "./JeuDe.css";

class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      face: null, 
      compteur: 0, 
      fin: false, 
      rotate: false,
      cache: Math.floor(Math.random() * 6) + 1 // تعيين الوجه المخفي بشكل عشوائي
    };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;

    // تفعيل الدوران
    this.setState({ rotate: true });
    setTimeout(() => {
      this.setState({ rotate: false });
    }, 500);

    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === prevState.cache, // التحقق من تطابق الوجه مع الوجه المخفي
    }));
  }

  getImage() {
    return this.state.face ? `images/face${this.state.face}.png` : "images/Dé.PNG";
  }

  initialiser() {
    // إعادة تعيين اللعبة وتعيين وجه مخفي جديد عشوائي
    this.setState({ 
      face: null, 
      compteur: 0, 
      fin: false,
      cache: Math.floor(Math.random() * 6) + 1 // تعيين الوجه المخفي بشكل عشوائي
    });
  }

  render() {
    return (
      <div className="jeu-container">
        <h2 className="titre">Bienvenue dans notre jeu 😎😎😎😎 :</h2>
        <h2>Jeu de Dés</h2>
        <img
          src={this.getImage()}
          className={`de-image ${this.state.rotate ? "rotate" : ""}`}
          alt="Face du dé"
        />
        <h2>Face: {this.state.face || "Pas de face générée"}</h2>
        <h2>Nombre d'essais: {this.state.compteur}</h2>
        <button onClick={() => this.jouer()}>Jouer</button> <br></br>
        {this.state.fin && <p className="message-victoire">Bravo, vous avez trouvé la face cachée !</p>}
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
export default JeuDe;




