import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Modal } from "@mui/material";
import { Api } from "../../../../api/api";
import EmbedVideo from "../../../../components/structure/EmbedVideo/EmbedVideo";
import { DeleteForever, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export const GameDetailsModal = ({ cover, gameId }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [game, setGame] = useState(undefined);

    const fetchGame = async () => {
        const response = await Api.getById("games", gameId, true);
        const resGame = await response.json();
        setGame(resGame);
    };

    useEffect(() => fetchGame(), []);

    return (
        <div>
            <CardMedia
                component="img"
                image={cover}
                height="216"
                className="game-card__image"
                onClick={handleOpen}
                sx={{ ":hover": { cursor: "pointer" } }}
            />
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                sx={{ overflow: "auto" }}
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            id="keep-mounted-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ fontWeight: 600 }}
                        >
                            {game && game.title}
                        </Typography>
                        <div>
                            <Link to={`/game/edit/${game && game.id}`}>
                                <Edit />
                            </Link>
                            <DeleteModalButton gameId={game && game.id} />
                        </div>
                    </Box>
                    <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2 }}
                    >
                        {game && game.description}
                    </Typography>
                    <Typography>
                        <strong>Released in:</strong> {game && game.year}
                    </Typography>
                    <Typography>
                        <strong>IMDB rate:</strong> {game && game.imdb}
                    </Typography>
                    <div>
                        <EmbedVideo videoUrl={game && game.trailer} />
                        <Typography sx={{ mt: 2 }}>
                            See a gameplay video:
                        </Typography>
                        <EmbedVideo videoUrl={game && game.gameplay} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

const DeleteModalButton = ({ gameId }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDelete = async () => {
        await Api.delete("games", gameId, true);
        window.location.reload();
    };
    return (
        <div>
            <Link to={""} onClick={handleOpen}>
                <DeleteForever />
            </Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Warning!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Do you really want to delete this game permanently?
                    </Typography>
                    <Button onClick={handleDelete}>YES</Button>
                    <Button onClick={handleClose}>NO</Button>
                </Box>
            </Modal>
        </div>
    );
};
