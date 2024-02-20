
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 
function createData(
  name: string,
  email: string,
  product: string,
  price:string,
  date:string,
  city:string,
   status:string
) {
  return { name, email,product, price, date, city, status };
}

 
const rows = [
  createData('Mark Otto','ottoto@wxample.com'	,'ON the Road',
  	'$25 224.2',	'11 May 2017',	'Otsego' , 'Sent'),

  createData('Jacob Thornton','thornton@wxample.com'	,'HP Core i7',
  '$1 254.2',	'4 Jun 2017',	'Fivepointville' , 'Sent'),

  				
  createData('Larry the Bird','bird@wxample.com'	,'Air Pro',
  '$1 570.0',	'27 Aug 2017',	'Leadville North' , 'Pending'),

  			            	

  createData('Joseph May','josephmay@wxample.com'	,'Version Control',
  '$5 224.5',	'19 Feb 2018',	'Seaforth' , 'Declined'),
  		
  createData('Peter Horadnia','horadnia@wxample.com'	,'Lets Dance',
  '$43 594.7',	'1 Mar 2018',	'Hanoverton' , 'Sent'),
];

export default function SupportRequestsTable() {
  return (


  
 <>
    <div className='my-20 w-10/12 mx-auto'>

       
      <h2 className='text-[24px] my-10'>Support {' '}
             <span className='text-black font-bold '>Requests</span> </h2>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PRODUCT</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">CITY</TableCell>
            <TableCell align="right" >STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right" >
                <div className={`${index===2 ? "bg-[#F1C40F]" : index===3? "bg-red-400":"bg-[#A3E4D7]"} 
                 text-center text-white
                 rounded-md py-1 px-2`}>{row.status}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
 </>
  );
}