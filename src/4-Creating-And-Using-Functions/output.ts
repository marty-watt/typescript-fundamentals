const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
icon?: string;
}

export default async function updateOutput(id:string) {
  //Todo
}

//run our samples
runTheLearningSamples();
function runTheLearningSamples(){
  // hoisted
  function displayProuctionInfo(id: number, name: string){
    console.log(`${prefix} typed parameters`);
    console.log(`product id = ${id} and name = ${name}`);
  }
  displayProuctionInfo(10, 'Pizza')
  
  console.log(`${prefix} function declaration`);
  console.log(addNumberDeclaration(7,11));

  function addNumberDeclaration(x: number, y: number): number {
    const sum: number = x+y;
    return sum;
  }

  const addNumberExpression = function(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }
  console.log(`${prefix} function Expression`);
  console.log(addNumberDeclaration(77,11));

  const sampleProducts = [
    {
      id: 10,
      name: 'pizza',
      icon: 'fas fa-pizza-slice',
  },
  {
    id: 20,
    name: 'Ice cream',
    icon: 'fas fa-ice-cream',
  },
  {
    id: 30,
    name: 'Cheese',
    icon: 'fas fa-cheese',
  },
];

function getProductNames(): string[] {
  return sampleProducts.map((p) => p.name);
}

console.log(`${prefix} return array`);
console.log(getProductNames());


  function getProductById(id: number): ProductType | undefined{
    return sampleProducts.find((p) => id == p.id);
  }
    console.log(`${prefix} return ProductType`);
    console.log(getProductById(10));

    function displayProducts(products: ProductType[]) : void {
      const productNames = products.map(p => {
        const name = p.name.toLowerCase();
        return name;
      });
      const msg = `Sample products include: ${productNames.join(', ')}`;
      console.log(`${prefix} return void`);
      console.log(msg);
    }

    displayProducts(sampleProducts);
}

