import "./header.css";

export function Header() {
    return (
        <div className="Header">

            <div className="brand">
                <span className="mark" aria-hidden="true"></span>
                <h1>Store<span>Info</span></h1>
            </div>

            <span className="status">
                <i aria-hidden="true"></i> live
            </span>

        </div>
    );
}
