import { Cards } from "../Molecules/Cards.jsx";
import React from "react";
import { Loader } from "../Atoms/Loader.jsx";

export function CardGallery() {
    return (
        <div
            id="Card--Gallery"
            className="flex justify-around flex-wrap my-[50px] px-28 gap-y-[430px]"
        >
            {isLoading && <Loader /> }
            {survey.map((v) => (
                <React.Fragment key={v.id}>
                    <Cards
                        setSurvey={setSurvey}
                        survey={survey}
                        id={v.id}
                        title={v.title}
                        description={v.description}
                        image={v.image}
                    />
                </React.Fragment>
            ))}
        </div>
    );
}