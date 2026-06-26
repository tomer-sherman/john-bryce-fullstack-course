import css from "./menu.module.css"; // in a module css you do this
// In order too stop leaking
// That is the reason menu was called menu.module.css // This technique allows you too Name the class in the css In whatever name

export function Menu() {
    return (
        <div className="Menu">
            <a href="#" className={css.DarkText}>Home</a>

            <br />
            <br />


            <a href="#" className={css.DarkText}>About</a>

        </div>
    )
}