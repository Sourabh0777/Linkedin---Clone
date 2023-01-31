import React, { useEffect, useState } from 'react'
import "./Feed.css"

import InputOptions from './InputOptions';
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import TodayIcon from '@mui/icons-material/Today';
import FeedIcon from '@mui/icons-material/Feed';

import { db } from "./firebase"
import { doc, onSnapshot, collection, addDoc, documentId, getDoc } from "firebase/firestore";

import Post from './Post';
import { useSelector } from 'react-redux';
function Feed() {
    const user = useSelector((state) => state.user.value);

    const [input, setInput] = useState(" ");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const dbRef = collection(db, "posts");

        onSnapshot(dbRef, snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        });
    }, []);

    console.log(posts);

    async function sendPost(e) {
        e.preventDefault();

        const dbRef = collection(db, "posts");
        await addDoc(collection(db, "posts"), {
            name: user.displayName,
            discription: user.email,
            message: input,
            photoURL: user.photoURL || "",
        });

        setPosts("")
    };
    return (
        <div className='feed'>
            <div className="feed_inputcontaincer">
                <div className="feed_input">
                    <CreateIcon />
                    <form action="none">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button type='submit' onClick={sendPost}>Post</button>
                    </form>
                </div>
                <div className='feed_options'>
                    <InputOptions title="Photos" Icon={InsertPhotoIcon} color="blue" />
                    <InputOptions title="Video" Icon={SmartDisplayIcon} color="orange" />
                    <InputOptions title="Events" Icon={TodayIcon} color="grey" />
                    <InputOptions title="Write Article" Icon={FeedIcon} color="red" />
                </div>
            </div>
            {/* Posts */}

                {posts.length>0 ? ( 
                    posts.map(({ id, data: { name, discription, message, photoURL } }) => (
                        
                    <Post
                        key={id}
                        name={name}
                        discription={discription}
                        message={message}
                        photoURL={photoURL} />
                ))):(console.log("Not working"))}

        </div>
    )
}
export default Feed

