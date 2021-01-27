import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <ul className={style.column}>
          <a className={style.footerLink} href="#">
            Abput Us
          </a>
          <a className={style.footerLink} href="#">
            Privacy Policy
          </a>
          <a className={style.footerLink} href="#">
            Terms And Services
          </a>
        </ul>
      </div>
    </div>
  );
}
