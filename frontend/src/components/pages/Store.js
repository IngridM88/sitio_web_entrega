import React from "react";
import "../styles/pages/store.css";

const Store = (props) => {
    return (
        <main class="storemaintag">
    
            {/*Cajas Productos*/}
    
            {/*Caja Stickers*/}
    <div class="container-fluid" id="merchcontainer">
        <div class="grid text-center" id="merch">
            <div class="g-col-6 g-col-md-4" id="stickers">
                <h4>Stickers</h4>
                <div class="card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid" src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid"
                            src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
                <div class=" card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid"
                            src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
            </div>

                    {/*Caja Earrings*/}
            <div class="g-col-6 g-col-md-4" id="earrings">
                <h4>Hand-crafted earrings</h4>
                <div class=" card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid" src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
                <div class=" card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid"
                            src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
                <div class=" card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid"
                            src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
            </div>

        {/*Caja Framed Prints*/}
            <div class="g-col-6 g-col-md-4" id="prints">
                <h4>Framed Prints</h4>
                <div class=" card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid"
                            src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
                <div class=" card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid"
                            src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
                <div className=" card">
                    <a href="./img/turnmeonsm.jpg" target="_blank" rel="noopener noreferrer"><img class="img-fluid"
                            src="./img/turnmeonsm.jpg" alt=""/></a>
                    <div class="description">
                        <h5>Product Name</h5>
                        <p>Short decription of the product.</p>
                        <h6>Price</h6>
                        <form action="">
                            <input type="submit" class="addbtn" value="Add to cart"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
            {/*Fin Cajas Productos*/}

</main>
    
);
}

export default Store;
