import React from "react";

export default SideFilter = () => {
    return (
        <section className="side-filter">
                <h2 className="side-filter__header">Количество пересадок</h2>
                <label for="all">
                    <input type="checkbox" id="all"/>
                    <span className="checkbox-span"></span>
                    <span className="side-filter__text">Все</span>
                </label>

                <label for="withoutStops">
                    <input type="checkbox" id="withoutStops"/>
                    <span className="checkbox-span"></span>
                    <span className="side-filter__text">Без пересадок</span>
                </label>

                <label for="oneStop">
                    <input type="checkbox" id="oneStop"/>
                    <span className="checkbox-span"></span>
                    <span className="side-filter__text">1 пересадка</span>
                </label>

                <label for="twoStops">
                    <input type="checkbox" id="twoStops"/>
                    <span className="checkbox-span"></span>
                    <span className="side-filter__text">2 пересадки</span>
                </label>

                <label for="threeStops">
                    <input type="checkbox" id="threeStops"/>
                    <span className="checkbox-span"></span>
                    <span className="side-filter__text">3 пересадки</span>
                </label>

            </section>
    )
}