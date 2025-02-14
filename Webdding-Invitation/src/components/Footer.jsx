import styles from '../style';
import { circle } from '../assets';
import { footerLinks } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <section className={`${styles.flexCenter} py-10 flex-col bg-black/10 px-5`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="relative flex justify-center items-center text-gold w-full md:w-auto">
        <p className="absolute inset-0 flex justify-center items-center font-sign text-4xl sm:text-5xl md:text-6xl font-bold">L&A</p>
        <p className="absolute mt-20 md:mt-28 flex justify-center items-center font-sign text-3xl sm:text-4xl">Luz y Arturo</p>
        <img loading="lazy" src={circle} alt="" className="w-full h-auto max-w-[200px] md:max-w-[300px]" />
      </div>

    </div>
    {/* <div className="flex-[1.5] w-full flex flex-col md:flex-row justify-between flex-wrap md:mt-0 mt-10">
      {footerLinks.map((footerlink) => (
        <div key={footerlink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px] md:min-w-[200px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-dark">
            {footerlink.title}
          </h4>
          <ul className="list-none mt-4">
            {footerlink.links.map((link, index) => (
              <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dark/90 cursor-pointer 
                ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                {link.name}
              </li>
            ))} 
          </ul>
        </div>
      ))}
    </div> */}
   
      <p className='font-signature text-center mr-2 text-[1rem] sm:text-[1rem] md:text-[2rem] lg:text-[2rem]'>
        Nos casamos el 16 de Marzo
      </p>
      <p className='font-signature text-center mr-2 text-[1rem] sm:text-[1rem] md:text-[2rem] lg:text-[2rem]'>
        Te esperamos
      </p>
    <div className="w-full flex flex-col md:flex-row justify-center items-center mt-6 pt-6 border-t-[1px] border-t-[#3F3E45] p-8">
      <p className="font-normal text-center text-[16px] md:text-[20px] leading-[24px] md:leading-[27px] text-dark font-mandala mb-4 md:mb-0">
        AG Invitaciones. Invitaciones Web Personalizadas.
        <br/>
        <FontAwesomeIcon icon={faPhoneAlt} className="text-gold text-xl md:text-2xl mr-2" />
        <span className="font-poppins font-medium text-[14px] md:text-[16px] leading-[24px] text-dark">
          Cotizaciones de Invitaciones
        </span>
        <span className="font-poppins font-medium text-[14px] md:text-[16px] leading-[24px] text-dark ml-2 text-orange-700">
          6421099057
        </span>
      </p>
      <div className="flex flex-row items-center">
        {/* Aquí puedes agregar iconos de redes sociales u otros elementos */}
      </div>
    </div>
  </section>
);

export default Footer;
