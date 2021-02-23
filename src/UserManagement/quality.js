import React from "react";
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import Footbar from '.././Components/Footbar/Footbar'
import Toolbar from '.././Components/Toolbar/Toolbar'
class quality extends React.Component {

    render() {
        return (
            <div class="QualityPage">
                <Toolbar />
                <div class="coverPhoto">
                    <div class="position-relative">
                        <img class="col-sm-12 qualityCoverImage p-0" src="img/quality_coverphoto.png" />
                    </div>
                    <div class="contentPart container text-left">
                        <h2>Quality</h2>
                        <p>  Quality planning is implemented as a means of "developing the products,
                        systems, and processes needed to meet or exceed customer expectations."
                        This includes defining who the customers are, determining their needs,
                            and developing the tools (systems, processes, etc.) needed to meet those needs.</p>
                        <p> Quality improvement is implemented as a means of providing mechanisms for
                        the evaluation and improvement of processes, etc. in the light of their efficiency,
                        effectiveness, and flexibility. This may be done with noticeably significant
                            changes or incrementally via continual improvement.</p>
                        <p>     Quality control (QC) is implemented as a means of fulfilling quality requirements,
                        reviewing all factors involved in production. The business confirms that the good
                        or service produced meets organizational goals, often using tools such as operational
                             auditing and inspection. QC is focused on process output.</p>
                    </div>
                </div>
                <Footbar />
            </div>
        );
    }
}

export default quality;
