import React, { useRef, useState, useEffect } from "react";

import Ladder from "./components/Ladder.js";

const LADDER_IMAGE =
    "https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png";


const App = () => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseOverHandler = () => {
        setIsHovered(true);
    };

    const onMouseLeaveHandler = () => {
        setIsHovered(false);
    };

    const ladderRef = useRef(false);

    useEffect(() => {


    }, [isHovered]);

    return (
        <div className="app-container">
            {[1, 2, 3, 4, 5].map((num, idx) =>
                ladderRef.current.id <= num ? (
                    <Ladder
                        key={idx}
						id={idx}
                        ref={ladderRef}
                        isHovered={"active"}
                        onHover={onMouseOverHandler}
                        onLeave={onMouseLeaveHandler}
                        img={LADDER_IMAGE}
                    />
                ) : (
                    <Ladder
                        key={idx}
						id={idx}
                        ref={ladderRef}
                        isHovered={""}
                        onHover={onMouseOverHandler}
                        onLeave={onMouseLeaveHandler}
                        img={LADDER_IMAGE}
                    />
                )
            )}
        </div>
    );
};

export default App;
