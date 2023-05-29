import React from 'react'
import MoviesListAdmin from "@/app/admin/components/movies/components/MoviesListAdmin";

const MoviesSection = () => {
    return (
        <section className="pageSection pageSection_noGap person__pageSection person__pageSection_noGap">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div id="person-content-column" className="person__contentColumn">
                        <MoviesListAdmin />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesSection