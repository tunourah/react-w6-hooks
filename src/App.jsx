import Photo from './components/Photo';
import Products from './components/Products';

function App() {
  return (
    <div className="flex flex-col sm:flex-row   w-full  ">
        <div className='flex justify-between'>
        <h1 className="     p-5 bg-blue-800 text-white">   lab1 </h1>
        </div>
      <div className='sm:w-1/2'>
      <h1 className='text-3xl font-bold mb-4'>Products</h1>
      <Products />
      </div>
    <div className='flex justify-between'>
  
    <h1 className="     p-5 bg-blue-800 text-white">   lab2  </h1>
    </div>
 
      <div className='sm:w-1/2'>
      <Photo/>
      </div>

    </div>
  );
}

export default App;
