import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header';
import Footer from './components/Footer';
import SearchProduct from './components/SearchProduct'
import RecipeBox from './components/RecipeBox';
function App() {

  return (
    <div className='w-100 bg-white'>
      <Header />
      <div className='p-4'>
        <SearchProduct />
        {/* <RecipeBox /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
