import Renderer from "./Renderer";
import List from "./List"
import "./App.css"
function Page1() {
    return ( 
        <div className="fd-row">
            <Renderer url = "https://arxiv.org/pdf/2212.08011.pdf"/>
            <List/>
        </div>
    );
}

export default Page1;