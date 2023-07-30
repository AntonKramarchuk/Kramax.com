import React from 'react';
import {Box, Modal} from "@mui/material";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: '70%',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function VideoModal({open, handleModal}) {
    
    return (
        <Modal
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <ReactPlayer url='https://www.youtube.com/watch?v=Mit-LnocRaY' width='100%' height='100%' playing={true} controls={true}  />
            </Box>
        </Modal>
    );
}

VideoModal.propTypes = {
    handleModal: PropTypes.func,
    open: PropTypes.bool,
};
export default VideoModal;