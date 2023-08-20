import "react-bootstrap";
import Table from 'react-bootstrap/Table';

const Bank = ()=>{
    const bankAccounts =[
        {
            accountHolder: "kashif",
            accountNumber: "234345645678",
            currentBalance : "500000"
        },
        {
            accountHolder: "kamran",
            accountNumber: "234345645678",
            currentBalance : "400000"
        },
        {
            accountHolder: "Nauman",
            accountNumber: "234345645678",
            currentBalance : "5000000"
        },
        {
            accountHolder: "Ishaq",
            accountNumber: "234345645678",
            currentBalance : "234568"
        },
        {
            accountHolder: "Rashid",
            accountNumber: "234345645678",
            currentBalance : "200000"
        },
        {
            accountHolder: "shahid",
            accountNumber: "234345645678",
            currentBalance : "500"
        },
        {
            accountHolder: "Talha",
            accountNumber: "234345645678",
            currentBalance : "50"
        },
        {
            accountHolder: "Awais",
            accountNumber: "234345645678",
            currentBalance : "5530000"
        },
        {
            accountHolder: "gul marjan",
            accountNumber: "234345645678",
            currentBalance : "550000"
        },
        {
            accountHolder: "gul Nabi",
            accountNumber: "234345645678",
            currentBalance : "-30000"
        }

    ]
    return(
    <>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Account Holder</th>
          <th>Account Number</th>
          <th>Current Balance</th>
        </tr>
      </thead>
      <tbody>
        {bankAccounts.map((item)=>(
        <tr>
          <td>{item.accountHolder}</td>
          <td>{item.accountNumber}</td>
          <td>{item.currentBalance}</td>
        </tr>
         ))}
      </tbody>
    </Table>
   
    </>
    )
}


export default Bank;