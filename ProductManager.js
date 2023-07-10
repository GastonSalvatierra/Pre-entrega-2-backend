const fs = require ('fs'); 
const dirName = './archivo-creado' ;
const fileName = dirName + '/prueba.txt';



class ProductManager {
  constructor (){
    this.products = [];      
    this.id = 1;
    this.path = dirName;
  } 

  addProduct(product) {
    
    product.id = this.id++;

    this.products.push(product);


  }; 

  getProducts () {

    const writeFile = async (json) =>{

      try {
        
        await fs.promises.writeFile(fileName, json);

      } catch (error) {

        console.log('no se pudo escribir el archivo');
      }
      
    }
    writeFile(JSON.stringify(this.products));




    const readProducts = async () => {

      try {
        
        await fs.promises.readFile(fileName,'utf-8')

      } catch (error) {

        console.log('no se pudo leer el archivo');

      }
    }

    readProducts()

  };



  getProductById(id){      

    const resultado = this.products.find(product => product.id === id);
    
    if (resultado) {
      console.log(resultado); 
    }
    else{

      console.log('el producto no existe');
    }
    
  
  };



  updateProduct(id) {

    this.products[id]= {
      title:'auto + contenido actualizado',
      description:'auto increible actualizado',
      price:1500,
      thumbnail:'ruta-de-imagen-actualizada.jpg',
      code:2,
      stock: 3
    }

  }
  

  deleteProduct(id){
      const resultado = this.products.findIndex(product => product.id === id);

      if (resultado !== -1) {
        this.products.splice(resultado, 1);
      }
      else{
        console.log('producto no encontrado');
      }

  }


}

const items = new ProductManager();


const product1 = {title:'auto',description:'auto increible', price:1000,thumbnail:'ruta-de-imagen.jpg',code:2, stock: 3};

const product2 = {title:'moto',description:'moto chica', price:500,thumbnail:'ruta-de-imagen-2.jpg',code:1, stock: 2};

const product3 = {title:'bici',description:'bici roja', price:200,thumbnail:'ruta-de-imagen-3.jpg',code:3, stock: 5};


const createFile = async (path) => {
  try {
    
    await fs.promises.mkdir(path, {recursive:true});

  } catch (error) {

    console.log('no se puedo crear el archivo');    
    
  }

  
  }
  createFile(items.path);


/* items.addProduct(product1);
 */


/* items.addProduct(product2);
items.addProduct(product3);
 */


/* items.getProducts();
 */

/* items.getProductById(1);
items.getProductById(5);
items.getProductById(8); */


/* items.updateProduct(1);
 */

/* items.deleteProduct(2);
items.deleteProduct(5); */


items.getProducts();




 




  














