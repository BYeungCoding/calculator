import React from 'react';

const Card = (props) => {
    const {
        title, img, link, linkText, thoughts
    } = props;

    return (
            <div className="card">
                <h1>{title}</h1>
                <a href={link} target="_blank"><img
                    src={img}/></a>
                <br/>
                <a href={link} target="_blank">{linkText}</a>
                    <p>
                        <span className="thoughts">My Thoughts:</span>
                        {thoughts && thoughts.map((thought, ind) =>
                            <p key={ind} >{thought}</p>
                        )}
                        {/*<br/>This chapter was really cool, seeing Jiwoo fight this*/}
                        {/*<br/>guy and still persevere is so great, and the final panel*/}
                        {/*<br/>of him standing back up is so good.*/}
                    </p>
            </div>
    )
}

export default Card;