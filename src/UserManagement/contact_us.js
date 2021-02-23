import React from "react";
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import Footbar from '.././Components/Footbar/Footbar'
import Toolbar from '.././Components/Toolbar/Toolbar'
function validate(email, name, mobileNumber, queries) {
    return {
        email: email.length === 0,
        name: name.length === 0,
        mobileNumber: mobileNumber.length === 0,
        queries: queries.length === 0
    };
}
class contactUs extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
            mobileNumber: "",
            queries: '',
            touched: {
                email: false,
                name: false,
                mobileNumber: false,
                queries: false
            }
        };
    }

    handleEmailChange = evt => {
        this.setState({ email: evt.target.value });
    };

    handlenameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handlemobileNumberChange = evt => {
        this.setState({ mobileNumber: evt.target.value });
    }

    handleBlur = field => evt => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    };

    handleSubmit = evt => {
        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
        const { email, name, mobileNumber, queries } = this.state;
        alert(` ${email} name: ${name} mobileNumber: ${mobileNumber} queries: ${queries}`);
    };

    canBeSubmitted() {
        const errors = validate(this.state.email, this.state.name, this.mobileNumber, this.queries);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    updateName(evt) {
        this.setState({
            name: evt.target.value,
        });
    }

    updateEmail(evt) {
        this.setState({
            email: evt.target.value,
        });
    }

    updateMobilenumber(evt) {
        this.setState({
            mobileNumber: evt.target.value,
        });
    }

    updateQueries(evt) {
        this.setState({
            queries: evt.target.value,
        });
    }

    render() {
        const errors = validate(this.state.email, this.state.name, this.state.mobileNumber, this.state.queries);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkError = field => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];

            return hasError ? shouldShow : false;
        };
        return (
            <div>
                <Toolbar />
                <div class="contactUsPage">
                    <div class="position-relative">
                        <img class="col-sm-12 contactusCoverImage p-0" src="img/contactus1_coverphoto.png" />
                    </div>
                    <div class="contentPart container text-center">
                        <h1>Contact US</h1>
                        <div class="contents container">
                            <h4>We would love to hear from you.</h4>
                            <p>Be it questions, pesky bugs, business opportunities or even
                            simply giving us your frank opinion, send them in! We value
                            your feedback and it is through this, that we can constantly
                            improve ourselves. Our team is ever ready to listen, so get in
                            touch with us now!</p>
                            <form class="text-left"
                                action="mailto:sivamurugan30591@gmail.com?subject=Query description"
                                method="post" enctype="text/plain">
                                Name:<br />
                                <input type="text"
                                    className={shouldMarkError("name") ? "error" : ""}
                                    placeholder="Enter your name here..."
                                    name="Name"
                                    value={this.state.name}
                                    onChange={(evt) => this.updateName(evt)}
                                    onBlur={this.handleBlur("name")} /><br />
                                        E-mail:<br />
                                <input type="text"
                                    className={shouldMarkError("email") ? "error" : ""}
                                    placeholder="Enter your email here..."
                                    name="Email-ID"
                                    value={this.state.email}
                                    onChange={(evt) => this.updateEmail(evt)}
                                    onBlur={this.handleBlur("email")} /><br />
                                        Mobile Number:<br />
                                <input type="text"
                                    className={shouldMarkError("mobileNumber") ? "error" : ""}
                                    placeholder="Enter your Mobile number here..."
                                    name="Mobile Number"
                                    value={this.state.mobileNumber}
                                    onChange={(evt) => this.updateMobilenumber(evt)}
                                    onBlur={this.handleBlur("mobileNumber")} /><br />
                                                Comment:<br />
                                <input type="text"
                                    className={shouldMarkError("queries") ? "error" : ""}
                                    placeholder="Type your queries here..."
                                    name="Queries" size="50"
                                    value={this.state.queries}
                                    onChange={(evt) => this.updateQueries(evt)}
                                    onBlur={this.handleBlur("queries")} /><br /><br />
                                <input type="submit" value="Send"
                                    disabled={!this.state.name, !this.state.email, !this.state.mobileNumber, !this.state.queries} />
                            </form>
                        </div>
                    </div>
                </div>
                <Footbar />
            </div>
        );
    }
}

export default contactUs;
