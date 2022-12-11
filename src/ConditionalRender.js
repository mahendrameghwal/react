import { useState } from "react";

// ConditionalRender

function ConditionalRender(){
const [login ,checklogin]= useState(2);



    return (
<div>
{login===1 ? <h2>hii mahendra good eveng..</h2>
:login===2 ? <h2>hii rakesh good eveng.</h2>
:<h2>hii kalpana good eveng.</h2>}
</div>
    )
    
}

export default ConditionalRender;