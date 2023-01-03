import data from "./data"
import RenderAuth from "./RenderAuth";
import RenderTitle from "./RenderTitle";
import { useState } from "react"
import "./App.css"
function List() {
    const [isShown, setIsShown] = useState(false);
    const [titleBtn, setTitleBtn] = useState(false)
    const handleClickAuth = () => {
        setIsShown(!isShown);
    }

    const handleClickTitle = () => {
        setTitleBtn(!titleBtn)
    }


    return (
        <div className = "flex fd-col">
            <button id="author" onClick={handleClickAuth}>Author</button>
            <button id="title" onClick={handleClickTitle}>Title</button>
            {isShown && <RenderAuth auth={data.author} />}
            {titleBtn && <RenderTitle title={data.titles} />}
        </div>
    );
}

export default List;