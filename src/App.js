import classes from './App.module.css';
import HeaderS from './components/HeaderS';
import OpsTransfer from './components/OpsTransfer';
import TransferItems from './components/TransferItems';



function App() {
  return (
    <div className="App">
     <HeaderS />
     <div className={classes.bodyComponents}>
        <TransferItems />
        <div>
           <OpsTransfer />
        </div>
     </div>
    </div>
  );
}

export default App;
