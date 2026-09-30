import { useRef, useEffect } from "react";

export default function() {

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.style.background = "#814093";
        divRef.current.style.width = "100%";
        divRef.current.style.height = "100dvh";
        divRef.current.style.position = "absolute";
    }, [])
    
  return (
    <>
    <main>
    <div ref={divRef}></div>
    </main>
    </>
  );
}
