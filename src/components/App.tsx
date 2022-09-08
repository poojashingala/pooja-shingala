import './App.css';
import "@awsui/global-styles/index.css"
import { Table } from '@awsui/components-react';


function App() {

  const COLUMN_DEFINITIONS = [
    {
      id: "name",
      header: "Name",
      cell: (e: any) => e.name,
      width: 170,
      minWidth: 165,
      sortingField: "name"
    },
    {
      id: "description",
      header: "Description",
      cell: (e: any) => e.description,
      width: 110,
      minWidth: 110,
    },
    {
      id: "date",
      header: "Last Modified",
      cell: (e: any) => e.date,
      width: 200,
      minWidth: 170
    }
  ];

  const allItems = [
    {
      name: "readydoc-ui",
      description: "-",
      date: "14 hours ago",
    },
    {
      name: "readydoc-api",
      description: "-",
      date: "15 hours ago",
    },
    {
      name: "digitalform-api",
      description: "-",
      date: "3 days ago",
    },
    {
      name: "digitalform-ui",
      description: "-",
      date: "6 days ago",
    },
    
    
  ];
  return (
    <Table items={allItems} columnDefinitions={COLUMN_DEFINITIONS} />
   
  
  );
}

export default App;
