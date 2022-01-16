import classes from './App.module.css';
import Header from './components/Header';
import TransferItems from './components/TransferItems';



function App() {
  return (
    <div className="App">
     <Header />
     <div className={classes.bodyComponents}>
        <TransferItems />
     </div>
    </div>
  );
}

export default App;
