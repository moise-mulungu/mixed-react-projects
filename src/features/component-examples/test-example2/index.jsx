import { useState, useEffect } from "react";

export default function TestExample2(props) {
    const { person } = props

    return (
        <>
            {`Hello ${person}!`}
        </>
    )
}