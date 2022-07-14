import React from 'react'; //import React library
const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export function App(prop) {
  return (
    <div className = "container">
      <h1>US Senators (Oct 2020)</h1>
      <SenatorTable senators = {prop.senators}/>
    </div>
  )
}
export function SenatorTable(props) {
  let header = ['Name', 'State', 'Phone', 'Twitter'];
   return (
     <table className = "table table-bordered">
        <TableHeader colunmNames={header}/>
        <tbody>
        <SenatorRow senator={props.senators}/>
        </tbody>
     </table>
   )
}
export function TableHeader(props) {
  let arrOfColName = props.colunmNames.map((individual)=>{
     return <th key={individual.toString()}>{individual}</th>
  })
  return (
<thead>
  <tr>
      {arrOfColName}
  </tr>
</thead>
  )
}

export function SenatorRow(props){
  let tableContent = props.senator.map((item)=>{
    let name = item.name;
    let state = item.party.slice(0,1)+ " - " +item.state;
    let tel = <a href="tel:${item.phone}">{item.phone}</a>
    let twLink = "https://twitter.com/"+item.twitter;
    let twitter = <a href={twLink}>@{item.twitter}</a>
    return(
      <tr key = {name}>
        <td>
          {name}
        </td>
        <td>
          {state}
        </td>
        <td>
          {tel}
        </td>
        <td>
          {twitter}
        </td>
      </tr>
    )
  })
  return tableContent;
}

