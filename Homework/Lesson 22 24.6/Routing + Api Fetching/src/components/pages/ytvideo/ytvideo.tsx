import "./ytvideo.css";

export function Ytvideo() {
    return (
        <div className="Ytvideo">
            <iframe
                src="https://www.youtube.com/embed/xKZZq6q0EFI?si=eGR3o6mVdNQS-goI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}