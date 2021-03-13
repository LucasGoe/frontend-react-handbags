import React from 'react';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import './App.css';


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button title={"to the collection"} disabled={false}/>
          <Button title={"shop all bags"} disabled={false}/>
          <Button title={"pre-orders"} disabled={true}/>
      </nav>


          <main>

              <Product
                  title={"Best seller"}
                  image={bag1}
                  description={"The handy bag"}
                  price={400}
              />

              <Product
                  title={"Best seller"}
                  image={bag2}
                  description={"The stylish bag"}
                  price={250}
              />

              <Product
                  title={"Best seller"}
                  image={bag3}
                  description={"The simple bag"}
                  price={250}
              />

              <Product
                  title={"Best seller"}
                  image={bag4}
                  description={"The trendy bag"}
                  price={250}
              />

          </main>

          <footer>

              <Tile title={"The brand"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus ipsum nihil
                      nisi nostrum placeat porro quo repellendus sapiente sed!
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore laborum libero
                      maxime officiis perspiciatis velit voluptatibus voluptatum. Dignissimos
                  </p>
                  >
              </Tile>
              <Tile
                  image= {brand}
                  alternative_text={"brand_image"}
              >
              </Tile>
              <Tile
                  image={our_story}
                  alternative-text={"our_story_image"}
              >
              </Tile>
              <Tile title={"Our Story"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem cupiditate enim
                      exercitationem fugiat hic ipsa ipsum iure odio omnis porro quaerat, quas reiciendis,
                      repudiandae sed similique, vitae voluptatem voluptates
                  </p>
              </Tile>

          </footer>

      </>

  );
}

export default App;

