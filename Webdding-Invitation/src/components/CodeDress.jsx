import { mancode, womancode, codebg } from '../assets'

const CodeDress = () => 
 (
    <section id="codedress" className='relative w-full h-screen min-h-screen mb-[7rem] xs:mb-[6rem] sm:mb-[5rem]'>
        <div className="w-full h-screen  ">
        <div className='absolute backdrop-blur-lg w-full h-[10rem] sm:h-[50%] flex justify-center items-center pb-5 z-[7] opacity-30'></div>
            <div className='relative sm:absolute w-full h-[10rem] sm:h-[50%] flex justify-center items-center pb-5'>
                <h1 className='absolute z-[9] font-wedding text-[2rem] sm:text-[5rem] mr-2 text-white'>Codigo de Vestimenta</h1>   
                <h1 className='absolute z-[8] font-wedding text-[2rem] sm:text-[5rem] text-black'>Codigo de Vestimenta</h1>                   
                
                <img src={codebg} alt="bgcode" className='absolute w-full z-[6] h-full object-cover' />
            </div>
            <div className='absolute top-[8rem] sm:top-[10rem] sm:absolute z-[10] w-full h-auto sm:h-full flex justify-start sm:justify-center items-center gap-3 sm:gap-10 flex-col sm:flex-row pb-10 sm:pb-10'>
                <div className='w-[200px] h-[20rem] sm:w-[250px] sm:h-[550px] bg-white shadow-xl flex items-center justify-center flex-col leading-10'>
                    <img className='w-[80%] sm:w-[100%]' src={mancode} alt="mancode" />
                    <h1 className='text-[2rem] sm:text-[3rem] font-wedding'>Hombre</h1>
                    <h2 className='text-[1rem] sm:text-[2rem] font-wedding mb-2'>Traje</h2>
                </div>
                <div className='w-[200px] h-[20rem] sm:w-[250px] sm:h-[550px] bg-white shadow-xl flex items-center justify-center flex-col leading-10'>
                    <img className='w-[80%] sm:w-[100%]' src={womancode} alt="womancode" />
                    <h1 className='text-[2rem] sm:text-[3rem] font-wedding'>Mujer</h1>
                    <h2 className='text-[1rem] sm:text-[2rem] font-wedding mb-2'>Vestido</h2>
                </div>
            </div>
            
        </div> 
    </section>
 )


export default CodeDress