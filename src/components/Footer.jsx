const Footer = () => {
  return (
    <>
      <div className="footer__body">
        <div className="footer__icon-container">
          <div className="footer-icons__container">
            <a href="https://www.google.com/search?rlz=1C1CHZL_enGB817GB869&sxsrf=ALiCzsZgkR4yIQ7-CuMhObnvuKdtzt8wLQ:1662135015019&q=pet%20project%20kypseli&spell=1&sa=X&ved=2ahUKEwiy9I25v_b5AhW-QEEAHYGIBEAQvS56BAgUEAE&biw=1920&bih=937&dpr=1&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=8107083936965498098&lqi=ChNwZXQgcHJvamVjdCBreXBzZWxpSIO_4sLztICACFodEAAQARgAGAEiE3BldCBwcm9qZWN0IGt5cHNlbGmSAQlwZXRfc3RvcmU&rlst=f#rlfi=hd:;si:8107083936965498098,l,ChNwZXQgcHJvamVjdCBreXBzZWxpSIO_4sLztICACFodEAAQARgAGAEiE3BldCBwcm9qZWN0IGt5cHNlbGmSAQlwZXRfc3RvcmU;mv:[[38.00016540000001,23.7431543],[37.9997328,23.7373579]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#39659b"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
          </div>
          <div className="footer-icons__container">
            <a href="https://www.facebook.com/PetProjectATH">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#39659b"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__copyright-text">
          Copyright © Pet Project All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
