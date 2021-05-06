import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import './SidebarChat.css';
import db from "./firebase";
import {Link} from "react-router-dom";
import {useParams} from "react-router"

function SidebarChat({id , name, addNewChat}) {
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [messages, setMessages] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    useEffect(() => {
        if (id){
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) =>
                    doc.data()    
                ))
            ))
        }
    }, [id])
    const createChat = () => {
        const roomName = prompt("Saisissez le nom du contact");

        if(roomName) {
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>
                    {name}
                </h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Nouveau groupe</h2>
        </div>
    );
}

export default SidebarChat
