// import logo from './logo.svg';
// import { useEffect } from 'react';
import './App.css';
// import Footer from './component/footer/Footer';
// import Header from './component/header/Header';
import Partners from './component/partners/Partners';

function App() {
  // useEffect(() => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, []);
  return (
    <div className="App">
      {/* <Header> </Header> */}
      <Partners></Partners>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;



