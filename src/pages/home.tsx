import { useEffect } from 'react';
//import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Anuphan'].join(','),
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#6B6464',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#E8F1FF',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  company_name: string,
  company_symbol: string,
  company_color: string,
  stock_price: number,
  change: string,
  value: string,
) {
  return { company_name, company_symbol, company_color, stock_price, change, value };
}

const rows = [
  createData('Apple Inc.', 'AAPL', '#000000', 229.4, '-0.34%', '3,487,820.54'),
  createData('NVIDIA Corporation', 'NVDA', '#77B901', 119.43, '1.51%', '2,937,965.7'),
  createData('Microsoft Corporation', 'MSFT', '#017CB9', 415.9, '0.97%', '3,091,401.34'),
  createData('Amazon.com', 'AMZN', '#D68400', 174.55, '3.71%', '1,832,006.98'),
  createData('Tesla, Inc.', 'TSLA', '#FF0000', 209.94, '3.8%', '670,682.72'),
  createData('Booking Holdings Inc.', 'BKNG', '#009CEA', 3926.08, '0.47%', '131,619.48'),
];

export const Home = () => {
  // const [changePercents, setChangePercents] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // const fetchChangePercents = async () => {
    //   const apiKey = 'Y7PIHCS3H5FMJRHP';
    //   const promises = rows.map(async (row) => {
    //     const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${row.company_symbol}&apikey=${apiKey}`;
    //     try {
    //       const response = await axios.get(url);
    //       const changePercent = response.data['Global Quote']['10. change percent'];
    //       return { [row.company_symbol]: changePercent };
    //     } catch (error) {
    //       console.error(`Error fetching data for ${row.company_symbol}:`, error);
    //       return { [row.company_symbol]: 'N/A' };
    //     }
    //   });

    //   const results = await Promise.all(promises);
    //   const changePercentMap = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    //   setChangePercents(changePercentMap);
    // };

    // fetchChangePercents();
  }, []);

  function formatNumberWithCommas(number: number) {
    const formatter = new Intl.NumberFormat('en-US');
    return formatter.format(number);
  }

  function getColorClass(changePercent: string) {
    return changePercent.includes('-') ? 'text-red-500' : 'text-green-plus-color';
  }

  return (
    <>
      <div className="mb-5">
        <h2 className="font-semibold text-brown-sugar text-3xl">ภาพรวม</h2>

        {/* Stock cards section */}
        <div className="stock-zone flex mt-5 mb-10">
          <div className="stock-card max-w-[15em] p-4 bg-navbar-color rounded-lg me-4">
            <div className="flex items-start">
              <div className="detail flex-grow">
                <p className="text-brown-sugar text-[20px] font-bold">S&P 500</p>
                <p className="text-brown-sugar">5616.84</p>
                <p className="text-red-500">-17.77 (-0.32%)</p>
              </div>
              <div className="w-30 h-full flex items-end">
                <button>
                  <img src="../../menu-button.png" width={18} height={28} />
                </button>
              </div>
            </div>
          </div>

          <div className="stock-card max-w-[15em] p-4 bg-navbar-color rounded-lg me-4">
            <div className="flex items-start">
              <div className="detail flex-grow">
                <p className="text-brown-sugar text-[20px] font-bold">DJI</p>
                <p className="text-brown-sugar">41240.52</p>
                <p className="text-green-plus-color">65.42 (0.16%)</p>
              </div>
              <div className="w-30 h-full flex items-end">
                <button>
                  <img src="../../menu-button.png" width={18} height={28} />
                </button>
              </div>
            </div>
          </div>

          <div className="stock-card max-w-[15em] p-4 bg-navbar-color rounded-lg me-4">
            <div className="flex items-start">
              <div className="detail flex-grow">
                <p className="text-brown-sugar text-[20px] font-bold">NASDAQ</p>
                <p className="text-brown-sugar">17725.765</p>
                <p className="text-red-500">-152.03 (-0.85%)</p>
              </div>
              <div className="w-30 h-full flex items-end">
                <button>
                  <img src="../../menu-button.png" width={18} height={28} />
                </button>
              </div>
            </div>
          </div>

          <div className="stock-card max-w-[15em] p-4 bg-navbar-color rounded-lg me-4">
            <div className="flex items-start">
              <div className="detail flex-grow">
                <p className="text-brown-sugar text-[20px] font-bold">Russell 2000</p>
                <p className="text-brown-sugar">2217.9224</p>
                <p className="text-red-500">-0.78 (-0.04%)</p>
              </div>
              <div className="w-30 h-full flex items-end">
                <button>
                  <img src="../../menu-button.png" width={18} height={28} />
                </button>
              </div>
            </div>
          </div>

          <div className="stock-card max-w-[15em] p-4 bg-navbar-color rounded-lg me-4">
            <div className="flex items-start">
              <div className="detail flex-grow">
                <p className="text-brown-sugar text-[20px] font-bold">FTSE 100</p>
                <p className="text-brown-sugar">8327.78</p>
                <p className="text-green-plus-color">39.78 (0.48%)</p>
              </div>
              <div className="w-30 h-full flex items-end">
                <button>
                  <img src="../../menu-button.png" width={18} height={28} />
                </button>
              </div>
            </div>
          </div>

          <div className="stock-card max-w-[15em] p-4 bg-navbar-color rounded-lg me-4">
            <div className="flex items-start">
              <div className="detail flex-grow">
                <p className="text-brown-sugar text-[20px] font-bold">Nikkei 225</p>
                <p className="text-brown-sugar">38331.33</p>
                <p className="text-green-plus-color">221.33 (0.58%)</p>
              </div>
              <div className="w-30 h-full flex items-end">
                <button>
                  <img src="../../menu-button.png" width={18} height={28} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-semibold text-brown-sugar text-2xl mb-5">หุ้นในดวงใจ</h1>

        <ThemeProvider theme={theme}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: '#E8F1FF' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: '#6B6464' }}>ชื่อบริษัท</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#6B6464' }} align="center">
                    สัญลักษณ์
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#6B6464' }} align="center">
                    ราคาหุ้น
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#6B6464' }} align="center">
                    เปลี่ยนแปลง (%)
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#6B6464' }} align="center">
                    มูลค่าตลาด
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.company_name}>
                    <StyledTableCell component="th" scope="row" sx={{ color: '#6B6464' }}>
                      <div className="flex items-center">
                        <div
                          className="ps-4 pe-4 pt-1 pb-1 rounded-md text-white me-3"
                          style={{ backgroundColor: row.company_color }}
                        >
                          <p className="font-bold">{row.company_symbol}</p>
                        </div>
                        {row.company_name}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ color: '#6B6464' }}>
                      {row.company_symbol}
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ color: '#6B6464' }}>
                      ${formatNumberWithCommas(Number(row.stock_price))}
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ color: '#6B6464' }}>
                      <span className={getColorClass(row.change)}>
                        {row.change}
                      </span>
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ color: '#6B6464' }}>
                      ${row.value}M
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </div>
    </>
  );
};