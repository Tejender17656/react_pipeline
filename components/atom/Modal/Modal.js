import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useAppContext } from "@context/Context";
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function TransitionsModal({children}) {
  const { open, setOpen, isUserLoggedIn, setCurrentModal } = useAppContext();
  const handleClose = () => {
    setOpen(false);
    setCurrentModal("login");
  }

  useEffect(() => {
    if(isUserLoggedIn) {
      handleClose();
    }
  }, [isUserLoggedIn])

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open} timeout={500}>
          <Box sx={style}>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 min-h-[320px] space-y-4 md:space-y-6 sm:p-8">
                {children}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
