// import React from 'react';
// import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// const countries = [
//   { code: 'us', name: 'United States' },
//   { code: 'in', name: 'India' },
//   { code: 'gb', name: 'UK' },
//   { code: 'de', name: 'Germany' }
// ];

// const FilterBar = ({ country, setCountry }) => {
//   return (
//     <Box p={2}>
//       <FormControl fullWidth>
//         <InputLabel>Country</InputLabel>
//         <Select
//           value={country}
//           label="Country"
//           onChange={(e) => setCountry(e.target.value)}
//         >
//           {countries.map((c) => (
//             <MenuItem key={c.code} value={c.code}>
//               {c.name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default FilterBar;
