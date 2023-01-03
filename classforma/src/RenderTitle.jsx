/*
JE: 
x1: 273.365
x2: 466.64
y1: 546.1800000000001
y2: 557.124


xv: 193.27499999999998
yA: 546.1800000000001
*/ 
function RenderTitle(props) {
    console.log(props)
    return (
        <ul>
            {props.title.map((a)=>(
                <li key={a.xv + a.yA + Math.random()}>`x: {Math.floor(a.xv)}, y:{Math.floor(a.yA)}, height:{Math.floor(Math.abs(a.JE.x2 - a.JE.x1))}, width:{Math.floor(Math.abs(a.JE.y2 - a.JE.y1))} Title`</li>
            ))}
        </ul>
    )
}

export default RenderTitle;