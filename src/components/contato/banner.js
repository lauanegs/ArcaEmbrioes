import React from 'react';
import './banner.css';
import { Title } from './title';

export const BannerContato = () => {
    return(
        <div class="container-banner">
            <div style={{marginBottom: 70}}>
                <Title
                    title='A Arca Embriões está de portas abertas para te atender.'
                    subTitle='Nossa equipe está preparada para oferecer os melhores serviços em melhoramento genético de bovinos. Conte conosco!'
                
                />
            </div>
        </div>  
    )
}