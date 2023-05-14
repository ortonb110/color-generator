import { useState } from "react";
import componentToRGB from "./Util";

const SingleColor = ({items, index}) => {
    const [ alert, setAlert] = useState(false);
    const {rgb, weight} =items
    let bcg = rgb.join(',');
    console.log(bcg);
    let hexCode = componentToRGB(...rgb);



    return(
        <div className={`h-[10rem] w-[15rem] cursor-pointer`} style={{backgroundColor: `rgb(${bcg})`}} onClick={()=> {
            setAlert(true)
            navigator.clipboard.writeText(hexCode);
            setTimeout(()=> {
                setAlert(false)
            }, 3000)
        }}>
            <div className={`ml-[1rem] mt-[1rem] ${index > 10 ? "text-white" : ""}`}>
                <p >{weight}%</p>
                <p>
                {hexCode}
                </p>
                <p>{alert && 'Copied to clipboard'}</p>
            </div>
        </div>
    )
}

export default SingleColor;