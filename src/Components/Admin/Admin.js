import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PendingIcon from '@mui/icons-material/Pending';
import useAuth from '../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));





const Admin = () => {
    const { isLoading } = useAuth()
    const [infos, setInfos] = useState([])
    const [open, setOpen] = React.useState(false);
    const nameRef = useRef("")
    const imgRef = useRef("")
    const describeRef = useRef("")
    const priceRef = useRef()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        axios.get("http://localhost:5000/bookings")
            .then(res => {
                // console.log(res.data)
                setInfos(res.data)
            })
    }, [infos])
    const handleDelete = id => {
        const confrimation = window.confirm("You Sure , User Will Be Very Mad At You?")
        if (confrimation) {
            axios.delete(`http://localhost:5000/bookings/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.deletedCount > 0) {
                        alert("User Is Crying")
                        if (isLoading) {
                            return <Spinner animation="border" variant="danger" />
                        }
                        else {
                            setInfos(res.data)
                        }
                    }
                })
        }
    }

    const onSubmit = () => {
        const name = nameRef.current.value
        const img = imgRef.current.value
        const price = priceRef.current.value
        const describe = describeRef.current.value
        // console.log(name, img, price, describe)
        const newService = { name, img, price, describe }
        axios.post("http://localhost:5000/info", newService)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    alert("Services Added Successfully")
                    nameRef.current.value = ""
                    imgRef.current.value = ""
                    priceRef.current.value = ""
                    describeRef.current.value = ""
                }
            })
    }

    const handleUpdate = id => {
        const information = infos.filter(info => info._id === id)
        information[0].status = "Approved"
        // console.log(information[0])
        axios.put(`http://localhost:5000/info/${id}`, information)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    alert("Now User Will Be Happyy!!!!!")
                    setInfos(res.data)
                }
            })
    }

    // infos.length > 0 && console.log(infos)
    return (
        <div className="App m-5">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">City</StyledTableCell>
                            <StyledTableCell align="right">Destination Name</StyledTableCell>
                            <StyledTableCell align="right">Phone Number</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Admin Control</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {infos.length && infos.map((info) => (
                            <StyledTableRow key={info._id}>
                                <StyledTableCell component="th" scope="row">
                                    {info.email}
                                </StyledTableCell>
                                <StyledTableCell align="right">{info.name}</StyledTableCell>
                                <StyledTableCell align="right">{info.city}</StyledTableCell>
                                <StyledTableCell align="right">{info.destinationName}</StyledTableCell>
                                <StyledTableCell align="right">{info.phone}</StyledTableCell>
                                <StyledTableCell align="right">{info.status}</StyledTableCell>
                                <StyledTableCell align="right"><IconButton onClick={() => handleDelete(info._id)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                                    <IconButton onClick={() => handleUpdate(info._id)} aria-label="delete">
                                        <PendingIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="mt-3 mb-5">
                <h2 className="fst-italic">Add An Service</h2>
                <Button onClick={handleOpen}>Add Service</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Fill All The Info For New Service
                        </Typography>
                        <Typography className="shipping-form" id="modal-modal-description" sx={{ mt: 2 }}>
                            <input ref={nameRef} placeholder="Destination Name" required />
                            <input ref={imgRef} placeholder="Image Link" required />
                            <input ref={priceRef} type="number" placeholder="Price" required />
                            <textarea placeholder="describe" style={{ marginTop: "10px" }} name="describe" ref={describeRef} id="" cols="30" rows="5"></textarea>
                            <br />
                            <Button onClick={onSubmit} style={{ marginTop: "10px" }} variant="contained">Submit</Button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default Admin;