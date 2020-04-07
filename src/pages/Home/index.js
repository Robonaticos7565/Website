import React, { useEffect } from 'react';

export default function Home() {

    useEffect (() => {
        document.title = `Home`;
    })

    return (
        <h1>Home</h1>
    );
}