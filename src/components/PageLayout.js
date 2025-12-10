import React from "react";

export default function Pagelayout({ header, footer, children }) {
    return (
        <div>
            <header>{header}</header>

            <main>{children}</main>

            <footer>{footer}</footer>
        </div>
    );
}
