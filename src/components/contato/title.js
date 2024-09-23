import React from 'react';
import './title.css';


export const Title = ({ title, subTitle, colorTitle = "WHITE", colorSubTitle = "WHITE" }) => {
    let colorTitleRes
    if(colorTitle === "BLACK"){
        colorTitleRes = "#000"
    }else if(colorTitle === "PURPLE"){
        colorTitleRes = "#1A154B"
    }else {
        colorTitleRes = "#fff"
    }

    let colorSubtitleRes
    if(colorSubTitle === "BLACK"){
        colorSubtitleRes = "#000"
    }else {
        colorSubtitleRes = "#fff"
    }

    return (
        <div class="container">
            <div class="container-title">
                <h1
                    class="title"
                    style={{ color:colorTitleRes}}
                >
                    {title}
                </h1>
            </div>

            {!!subTitle &&
                <div class="container-subtitle">
                    <p
                        class="subtitle"
                        style={{ color: colorSubtitleRes}}
                    >
                        {subTitle}
                    </p>
                </div>
            }
        </div>
    )
}