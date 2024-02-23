import { Grid, Typography, Modal, Fade, Box, Backdrop } from '@mui/material'
import avatarImage from '/src/assets/images/IMG_0305.jpg';
import React, { useState } from 'react'

export default function ProfilePic() {

    const [openPreviewImg, setOpenPreviewImg] = useState(false)

    return (
        <>
            <Grid sx={{ position: 'relative', }}>
                <Typography sx={{ ...styleName }}>Đình Phong 👨‍💻</Typography>
                <img src={avatarImage} alt='avatar' style={styleImg} onClick={(e) => setOpenPreviewImg(true)} />
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openPreviewImg}
                onClose={()=>setOpenPreviewImg(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openPreviewImg}>
                    <img
                        src={avatarImage}
                        alt="preview"
                        style={style}
                    />
                </Fade>
            </Modal>
        </>

    )
}

const styleImg = {
    height: "auto",
    position: 'relative',
    width: '100%',
    cursor: 'pointer'
}

const styleName = {
    whiteSpace: 'nowarp',
    fontSize: 18,
    fontWeight: 400,
    position: "absolute",
    bottom: 5,
    color: '#fff',
    textTransform: "uppercase",
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(0, 163, 225, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Playfair Display',
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: 'background.paper',
};
