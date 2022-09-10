import "@awsui/global-styles/index.css"
import './App.css';
import TableComponent from './table';
import { BreadcrumbGroup } from '@awsui/components-react';
import { breadcrumbs } from "../helpers/constants";


function App() {

  return (
    <div className='app'>
      <BreadcrumbGroup className='breadcrumbs' items={breadcrumbs} />
      <TableComponent />
    </div>
   
  );
}

export default App;
