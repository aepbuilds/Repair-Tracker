import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";
import DatePicker from "react-datepicker";

import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ post: propsPost, addNewPost, updatePost }) => {
    const [saved, setSaved] = useState(false);
    const [post, setPost] = useState({...propsPost});
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevPostRef = useRef();
    useEffect(() => {
        prevPostRef.current = post;
    }, [post]);

    const prevPost = prevPostRef.current;

    const quillRef = React.useRef();

    useEffect(() => {
        if (prevPost && quillRef.current) {
            if (propsPost.key !== prevPost.key) {
                setPost({...propsPost});
                quillRef.current.getEditor().setContents(``);
            }
        }
    }, [prevPost, propsPost]);

    const handlePostForm = (event) => {
        event.preventDefault();
        if (post.title) {
          if (updatePost) {
            updatePost(post);
          } else {
            addNewPost(post);
          }
          setSaved(true);
        } else {
          alert("Title required");
        }
    };


    if (saved === true) {
        return <Redirect to="/" />
    }

    return (

        <form className="container" onSubmit={handlePostForm}>
            <h1>Add a New Repair</h1>
                    <label htmlFor="form-vehicle">Vehicle:</label>
                    <select value={post.vehicle} onChange={(event) => setPost({
                        ...post,
                        vehicle: event.target.value,
                    })}>
                        <option value="">Please Select a Vehicle</option>
                        <option value="2005 Subaru WRX">2005 Subaru WRX</option>
                        <option value="2017 Subaru Impreza">2017 Subaru Impreza</option>
                        <option value="1991 Toyota Pickup">1991 Toyota Pickup</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="form-miles">Mileage:</label>
                    <input type="number" value={post.miles || ''} onChange={(event) => setPost({
                        ...post,
                        miles: event.target.value,
                    })}></input>
                    <br />
                    <br />
                    <label htmlFor="form-date">Date:</label>
                    <DatePicker value={selectedDate} selected={selectedDate} onSelect={date => setSelectedDate(date)} onChange={(selectedDate) => setPost({
                        ...post,
                        date: selectedDate.toString(),
                    })}/>
                    <br />
                    <br />
                    <label htmlFor="form-title">Title:</label>
                    <input /*defaultValue={post.title}*/ id="form-title" value={post.title} onChange={(event) => setPost({
                        ...post, 
                        title: event.target.value,
                    })} />
                    <label htmlFor="form-content">Notes:</label>

                <Quill ref={quillRef} defaultValue={post.content} onChange={(content, delta, source, editor) => 
                    {
                        setPost({
                            ...post,
                            content: editor.getContents(),
                        });
                    }}
                />
                
            <p>
                <button type="submit">Save</button>
            </p>
        </form>
    );
}

export default PostForm;
    
