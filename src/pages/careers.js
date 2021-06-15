import React, { useEffect } from 'react'
import { emblContentHub } from "@visual-framework/embl-content-hub-loader/embl-content-hub-loader";
import EBIPageContainer from '../components/EBIPageContainer';
import './styles.scss';


export default function Careers() {
    useEffect(() => {
        emblContentHub();
    });
    return (
        <EBIPageContainer>
            <main id="main-content-area" role="main" className="row l-main">
                <link rel="import" href="https://www.embl.org/api/v1/pattern.html?filter-content-type=article&filter-id=122468&pattern=node-body&source=contenthub" data-target="self" data-embl-js-content-hub-loader />
            </main>
        </EBIPageContainer>
    )
}
