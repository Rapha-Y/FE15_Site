import React from 'react';
import { MDBIcon } from 'mdbreact';

function FooterLink(props) {
    if (props.iconName === null) {
        return (
            <div>
                <a 
                    href={props.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.name}
                </a>
            </div>
        );
    } else {
        const iconProps = props.iconName + " pr-2";
        return (
            <div>
                <a 
                    href={props.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MDBIcon fab icon={iconProps} />
                    {props.name}
                </a>
            </div>
        );
    }
}

export default FooterLink;