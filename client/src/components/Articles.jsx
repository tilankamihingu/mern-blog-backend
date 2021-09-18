import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Articles = ({posts}) => {
    return (
        <MainContainer>
            {posts.map((article, key) => (
                <div className="container" key={key}>
                    <h2>{article.title}</h2>
                    <p>{article.article}</p>
                    <span className="badge bg-secondary p-2">{article.authorname}</span>
                    <div className="row my-5">
                        <div className="col-sm-2">
                            <Link to=""  className="btn btn-outline-success">Edit Articles</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link to=""  className="btn btn-outline-danger">Delete Articles</Link>
                        </div>
                    </div>
                </div>
            ))}
        </MainContainer>
    )
}

export default Articles;

//MAIN CONTAINER
const MainContainer = styled.div`
    margin: 7rem 0;
`;
