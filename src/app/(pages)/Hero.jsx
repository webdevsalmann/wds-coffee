import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section className='section-padding'>
            <div className="container mx-auto flex md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className='clr-p'>Please ignore this home-page I will update this according to your need </h1>
                    {/* <p className="my-4">Discover the Arcane Linkstore, your one-stop destination for a handpicked collection of essential and valuable website links, carefully curated based on my years of experience. These links are designed to help you kickstart your projects effortlessly, saving you precious time.</p> */}
                    <div className="flex-between gap-4">
                        <Link href="/menu" className="btn-p">See Menu</Link>
                    </div>
                </div>
                <div className="img-box lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded"
                        width={1600}
                        height={900}
                        src="/images/abstract/8.jpg"
                        alt="hero"
                    />
                </div>
            </div>
        </section>
    )
}
