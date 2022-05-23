import React from "react";

function Results ({prompt}) {


    return (
        <div className="results-container">
            {[...prompt].reverse().map( (result) => (
                <div className="results-row">
                    <ul key={result.id}>
                        <b>Prompt: </b> {result.txt}
                        <br></br>
                        <br></br>
                        <b>Response:</b>{result.result}
                    </ul>
                </div>
            ))}

        </div>
    )

}

export default Results;
