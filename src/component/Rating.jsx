import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }} className="flex flex-wrap gap-2"
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <button
            href="#"
            class="text-md relative flex rounded-full border border-gray-500 bg-yellow-400 py-1 px-3 font-bold text-gray-900 shadow-lg hover:bg-yellow-300"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" 
            viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
            Confirm
        </button>
    </Box>
  );
}
