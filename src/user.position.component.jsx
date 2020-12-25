import React from "react";

let report = (lat , month) => {
    console.log(lat);
    if(month>=2 && month <=9){
        return lat < 1 ? "summer":"monsoon"
    }else {
        return lat >1 ? "winter":"summer"
    }
}

const Userposition = (props) =>
{
    let season = report(props.lattitude ,new Date().getMonth());
    console.log(season);
    
    if(season === "summer"){
        return (
            <div className={`container summer`}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>SUMMER TIME</h1>
                    </div>
                </div>
            </div>
        )

    }
    if(season === "winter"){
        return (
            <div className={`container winter`}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>winter time</h1>
                    </div>
                </div>
            </div>
        )

    }
    else{
        return (
            <div className={`container summer`}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Bring your umbrella.....</h1>
                    </div>
                </div>
            </div>
        )

    }
    
}


export default Userposition;