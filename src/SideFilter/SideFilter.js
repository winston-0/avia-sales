import React from "react";
import useSideFilterLogic from "./SideFilterLogic";

 const SideFilter = () => {
    const checkBoxes = useSideFilterLogic()
    return (
        <section className="side-filter">
            <h2 className="side-filter__header">Количество пересадок</h2>
            <ul className="side-filter__list">
                {checkBoxes}
            </ul>
            </section>
    )
}

export default SideFilter

