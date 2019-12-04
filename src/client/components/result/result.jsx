import React from 'react';

class Results extends React.Component {
       
    render() {
        

        let animalDescription;
        
        if (this.props.totalScore < 11){
            animalDescription = "Flappy Eagle is a powerful animal, the Flappy Eagle is most frequently associated with wisdom and freedom. Flappy Eagle people are seen as visionaries, those who are seekers and who are willing to push the limits of self-discovery and personal freedom."

        } else if (this.props.totalScore > 10 && this.props.totalScore < 20){
            animalDescription = "Kisses Bear is emblematic of grounding forces and strength. This animal has been worshiped throughout time as a powerful totem, inspiring those who need it the courage to stand up against adversity. It provides us with strength in times when we feel weak or helpless and asks us to accept an authoritative role, not only directing our own lives but guiding others."

        } else if (this.props.totalScore > 19 && this.props.totalScore < 30){
            animalDescription = "Dancing Panda is an unique animal inspiring tranquil strength and determination. It also encompasses personal and spiritual qualities, such as integration of polarized aspects of yourself, such as feminine and masculine energies"

        } else if (this.props.totalScore > 29){
            animalDescription = "Playful Monkey has a strong capacity for compassion, understanding, and bonding. All of which is part of our human social makeup as well, and they serve to remind us that our journey on this planet is not a solitary one. When it comes to solving problems this creature knows how to use their ingenuity and resourcefulness to solve problems."
        }
  
        let image = null;
        if (this.props.totalScore < 11){
            // eagle animal
            image = "https://cdn.dribbble.com/users/375867/screenshots/1454990/eagle-flying-spritesheet-sidescroller-game-assets.gif"

        } else if (this.props.totalScore > 10 && this.props.totalScore < 20){
            // bear animal
            image = "https://media1.tenor.com/images/c1b2cb88bc3cf44b10735cab46360c95/tenor.gif?itemid=13055170"

        } else if (this.props.totalScore > 19 && this.props.totalScore < 30){
            // panda animal
            image = "https://thumbs.gfycat.com/AncientNaiveArizonaalligatorlizard-max-1mb.gif"

        } else if (this.props.totalScore >29) {
            // monkey animal
            image = "https://media.tenor.com/images/83b12e358530ef103af3a9493b9ba621/tenor.gif"
        }
    

      return (
          <div>
              <h1>Your Personality Game Result is: </h1>
              <h2>{this.props.totalScore}</h2>
                <p>{animalDescription}</p>
                <img src={image} alt="animal images" className="img-fluid"/>
                <div className="d-flex justify-content-between mt-3">
                  <button onClick={(e)=> this.props.hideanimal(e)} classname="restartgame" type="button" class="btn btn-primary btn-lg">Restart Game</button>
                  <script type="text/javascript"> </script> 
                  <button onClick={()=> window.print()} value="Print" type="button" class="btn btn-success btn-lg">Screenshot</button>
                </div>
          </div>
          );

    }
  }
  
  export default Results;