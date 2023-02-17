import React from "react";
import "../styles/pages/gallery.css";
import"../../App.css";

const Gallery = (props) => {
    return (
    <body>
    <main>
        <div class="allgalleries">
        <div class="fantasy">
            <div>
                <h2>Fantasy & Sci-Fi</h2>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col"><a href="./img/botchildsm.jpeg" target="_blank"><img class="galleryimg" src="./img/botchildsm.jpeg " alt="botchild"/></a></div>
                    <div class="col"><a href="./img/floralbotback.jpeg " target="_blank"><img class="galleryimg" src="./img/floralbotback.jpeg " alt="floralbotback"/></a></div>
                    <div class="col"><a href="./img/pridepiecesm.jpg " target="_blank"><img class="galleryimg" src="./img/pridepiecesm.jpg " alt="pridepiece"/></a></div>
                    <div class="col"><a href="./img/floralbothead.jpeg" target="_blank"><img class="galleryimg" src="./img/floralbothead.jpeg " alt="floralbothead"/></a></div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col"><a href="./img/kittyskullsm.jpg" target="_blank"><img class="galleryimg" src="./img/kittyskullsm.jpg" alt="kittyskull"/></a></div>
                    <div class="col"><a href="./img/lifeafterdeathsm.jpeg" target="_blank"><img class="galleryimg" src="./img/lifeafterdeathsm.jpeg " alt="lifeafterdeath"/></a>
                    </div>
                    <div class="col"><a href="./img/theideaisgrowingonme.jpeg" target="_blank"><img class="galleryimg" src="./img/theideaisgrowingonme.jpeg" alt="theideaisgrowingonme"/></a></div>
                    <div class="col"><a href="./img/turnmeonsm.jpg" target="_blank"><img class="galleryimg" src="./img/turnmeonsm.jpg" alt="turnmeon"/></a></div>
                </div>
            </div>
        </div>

        <div class="horror">
            <div>
                <h2>Horror</h2>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col"><a href="./img/frightwood.jpeg" target="_blank"><img class="galleryimg" src="./img/frightwood.jpeg " alt="frightwood"/></a></div>
                    <div class="col"><a href="./img/happycampers.jpeg " target="_blank"><img class="galleryimg" src="./img/happycampers.jpeg " alt="happycampers"/></a></div>
                    <div class="col"><a href="./img/midnightsnacksm.jpeg" target="_blank"><img class="galleryimg" src="./img/midnightsnack.jpeg " alt="midnightsnack"/></a></div>
                    <div class="col"><a href="./img/thelivingdeath.jpeg" target="_blank"><img class="galleryimg" src="./img/thelivingdeath.jpeg " alt="livingdeath"/></a></div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col"><a href="./img/witchsm.jpg" target="_blank"><img class="galleryimg" src="./img/witchsm.jpg" alt="witch"/></a></div>
                    <div class="col"><a href="./img/europe.jpeg" target="_blank"><img class="galleryimg" src="./img/europe.jpeg " alt="europe"/></a>
                    </div>
                    <div class="col"><a href="./img/fairybutterfly.jpeg" target="_blank"><img class="galleryimg" src="./img/fairybutterfly.jpeg" alt="fairybutterfly"/></a></div>
                    <div class="col"><a href="./img/thehikesm.jpg" target="_blank"><img class="galleryimg" src="./img/thehikesm.jpg" alt="thehike"/></a></div>
                </div>
                </div>
            </div>
        </div>
    </main>
    </body>
    );
}
export default Gallery;
