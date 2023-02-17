import React from "react";
import "../styles/pages/about.css";

const About = (props) => {
    return (
        <body>
        <main>
            <div id="profile">
                <div id="aboutlist"><img id="profileimg" src="./img/ProfileB-photo.jpg" className="image-fluid" alt="Profile Pic"/>
                    <ul>
                        <li>Name: Deborah Merz</li>
                        <li>Occupation: Illustrator</li>
                        <li>Originally from: Buenos Aires, Argentina</li>
                        <li>Current residence: Wrightwood, California, USA </li>
                    </ul>
                </div>
                <div id="abouttext">
                    <h2>Short Bio</h2>
                    <p>
                        I am an Illustrator based in Wrightwood, California.
                        I was born and raised in Argentina where I studied animation for four years.
                        My love for art began when I was a child with my grandmother's old German illustrated children's books. The
                        illustrations in them insipred me, made me want to create worlds of my own and I have been drawing and painting ever
                        since.
                        I love fantasy, horror and science fiction, but I also enjoy painting nature and wildlife and all the beautiful things
                        this world has to offer.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nobis, id, sapiente qui velit
                        cum esse eveniet minima rerum accusantium at, hic sunt. Possimus dolore cupiditate eos corrupti,
                        eligendi officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perspiciatis!
                        Dolore quis minus libero eveniet iste ducimus, voluptates autem, numquam officia vel ex nihil
                        laboriosam cum debitis assumenda tempore? Placeat!
                    </p>

                    <img id="kitty" src="./img/kittyskullblacksm1.jpg" alt="kitty" />
                </div>
                <div id="sidepics">
                    <img src="./img/grasshoppercard.jpg" alt="Grasshopper" id="ghopper" />
                    <img src="./img/foxcard.jpg" alt="Fox" id="fox" />
                    <img src="./img/lotusunderwater.jpeg" alt="Lotus" id="lotus" />
                </div>
            </div>
        </main>
        </body>

    );
}

export default About;
