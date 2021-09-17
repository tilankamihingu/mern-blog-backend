import React from 'react';
import styled from 'styled-components';

const Articles = ({posts}) => {
    return (
        <MainContainer>
            {posts.map((article, key) => (
                <div className="container">
                    <h2>{article.title}</h2>
                    <p>{article.article}</p>
                    <span className="badge bg-secondary p-2">{article.authorname}</span>
                    <div className="row my-5">
                        <div className="col-sm-2">
                            <a href=""  className="btn btn-outline-success">Edit Articles</a>
                        </div>
                        <div className="col-sm-2">
                            <a href=""  className="btn btn-outline-danger">Delete Articles</a>
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
