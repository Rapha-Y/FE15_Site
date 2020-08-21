import React from 'react';

function FooterLink(props) {
    return (
        <a 
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.name}
        </a>
    );
}

export default FooterLink;