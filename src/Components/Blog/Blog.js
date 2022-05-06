import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-part'>
            <h2 className='text-center text-success'>Question Part</h2>



            <div>
                <h5># Difference between javascript and nodejs</h5>

                <p><span>


                    <ul>
                        <li>1. JavaScript : </li>
                    </ul>
                    <p><span>Javascript is a Scripting language. It is mostly abbreviated as
                        JS. It can be said that Javascript is the updated version of the ECMA
                        script. Javascript is a high-level programming language that uses the
                        concept of Oops but it is based on prototype inheritance. </span></p>
                    <ul>
                        <li> 2. NodeJS :</li>
                    </ul>

                    NodeJS is a cross-platform and opensource Javascript runtime environment
                    that allows the javascript to be run on the server-side. Nodejs allows
                    Javascript code to run outside the browser. Nodejs comes with a lot of modules
                    and mostly used in web development. </span></p>


            </div>
            <br />
            <br />
            <div>
                <h5># When should you use nodejs?</h5>
                <p><span>Node. js is primarily used for non-blocking, event-driven servers, due
                    to its single-threaded nature. It's used for traditional web sites and
                    back-end API services, but was designed with real-time, push-based
                    architectures in mind.</span></p>

                <h5>When should you use mongodb ?</h5>
                <p><span>SQL. NoSQL databases like MongoDB are a good choice when your
                    data is document-centric and doesn't fit well into the schema of a
                    relational database, when you need to accommodate massive scale,
                    when you are rapidly prototyping, and a few other use cases.</span></p>
            </div>
            <br />
            <br />
            <div>
                <h5># Differences between sql and nosql databases.</h5>
                <ul><li>SQL</li></ul>

                <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)	Non-relational or distributed database system.</p>
                <p>These databases have fixed or static or predefined schema	</p>
                <p>These databases are not suited for hierarchical data storage.	</p>
                <p>These databases are best suited for complex queries	</p>
                <p>Vertically Scalable	</p>
                <ul><li>NOSQL</li></ul>
                <p>Non-relational or distributed database system.</p>
                <p>They have dynamic schema</p>
                <p>These databases are best suited for hierarchical data storage.</p>
                <p>These databases are not so good for complex queries</p>
                <p>Horizontally scalable</p>
            </div>
            <br />
            <br />
            <div>
                <h5># What is the purpose of jwt and how does it work</h5>
                <p><span>JWT, or JSON Web Token, is an open standard used to share security
                    information between two parties — a client and a server. Each JWT contains
                    encoded JSON objects, including a set of claims. JWTs are signed using
                    a cryptographic algorithm to ensure that the claims cannot be altered
                    after the token is issued.</span></p>
            </div>

        </div>
    );
};

export default Blog;