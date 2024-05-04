import express from 'express';
import{
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import {verifyToken } from "../middleware/auth.js";

const router = express.Router();
/* Read routes: 
represent routes where we get info, we are not saving, updating and changing anything in the database.*/
router.get("/:id", verifyToken, getUser); // if the user(frontEnd) is sending a particular user id, we can call our databse with this particular id.
router.get("/:id/friends", verifyToken, getUserFriends);

/*UPDATE*/
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;