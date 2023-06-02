import React from 'react';
import Button from '@mui/material/Button';

const SimpleButton = React.forwardRef((props, ref) => {
  const {
    children,
    ...rest
  } = props
  return (
    <Button ref={ref} variant="outlined" {...rest}>
      {children}
    </Button>
  )
})

export default SimpleButton