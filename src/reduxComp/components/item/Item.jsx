import React from "react";
import {useParams} from "react-router-dom";

function Item() {

    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
            <p>{topicId}</p>

            {console.log('hello')}
        </div>
    );
}
export default Item;
