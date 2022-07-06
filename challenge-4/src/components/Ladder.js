import React, { forwardRef } from "react";

const Ladder = forwardRef(({ id, img, onHover, isHovered, onLeave }, ref) => {
    return (
        <div>
            <img
				id={id}
				ref={ref}
                className={isHovered}
                onMouseOver={onHover}
                onMouseLeave={onLeave}
                src={img}
                alt="a ladder"
            />
        </div>
    );
});

export default Ladder;
