import { Igithub, Ilogo, Iinstagram, Iyoutube, Ifacebook, Iwhatsapp } from "../svgs/svgs";

export default function Footer() {
  const socialIconBox = "icon-box set-text-balance p-2 w-12 h-12 set-bg-light rounded hover:bg-dark";

  return (
    <footer className="section-padding pb-8">

      <div className="gap-2 grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))]">
        <div className="flex-center gap-4 p-2 w-full h-full">
          <a className={`${socialIconBox} hover:text-green-500`} href="#" target="_blank" rel="noreferrer"><Iwhatsapp /></a>
          <a className={`${socialIconBox} hover:text-red-500`} href="#" target="_blank" rel="noreferrer"><Iyoutube /></a>
          <a className={`${socialIconBox} hover:text-blue-500`} href="#" target="_blank" rel="noreferrer"><Ifacebook /></a>
        </div>

        <div className="flex-center p-2 w-full h-full">
          <a href="#" className="icon-box w-20 h-20 clr-p"><Ilogo /></a>
        </div>

        <div className="flex-center flex-col gap-4 p-2 w-full h-full">
          <p className="mx-4 text-2xl self-start">Subscribe to our newsletter</p>
          <label htmlFor="footerEmail">
            <input type="text" className="mb-3 py-2 px-3 w-full bg-transparent outline-2 outline outline-neutral-400 set-text-balance" placeholder="Email Address" />
            <button className="btn-outline w-full">Subscribe</button>
          </label>
        </div>
      </div>

      <div className="mt-4 flex-center p-2 w-full h-full">
        <p className="text-xs">Created by &nbsp;
          <a className="set-text-balance hover:set-text-balance hover:underline text-xs" href="https://webdevsalman.netlify.app/" >Salman Mallick</a>
          &nbsp;/&nbsp;
          <a className="set-text-balance hover:set-text-balance hover:underline text-xs" href="#" >privacy-policy</a>
          &nbsp;/&nbsp;
          <a className="set-text-balance hover:set-text-balance hover:underline text-xs" href="#" >copyright&copy;</a></p>
      </div>

    </footer>
  )
}
