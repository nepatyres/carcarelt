import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { services } from '@/constants';

export default function Services() {
    const refs = useRef<Array<{ box: HTMLDivElement | null }>>(services.map(() => ({ box: null })));

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        refs.current.forEach((item, i) => {
            const { box } = item;

            if (box) {
                const boxTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: document.getElementById('box-trigger'),
                        start: 'top+100px bottom',
                        end: '+=250px',
                        scrub: true,
                        // markers: true
                    }
                });

                boxTimeline.fromTo(box,
                    { x: `${i < 2 ? '-5vw' : '5vw'}`, opacity: 0 },
                    { x: '0vw', opacity: 1 }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="flex flex-col items-center bg-[#000c10] min-h-screen overflow-hidden" id="scrollToServices">
            <span className="text-[30px] mt-[50px] lg:mt-[60px] lg:text-[40px] font-semibold font-gruppo uppercase text-white/70 text-center">Our services</span>
            <div id='box-trigger' className="2xl:max-w-[85%] max-w-full flex flex-row justify-around mt-5 mb-[50px] mx-auto sm:mt-[50px] xl:mt-[170px] 2xl:mt-[150px]">
                <div className='mt-[30px] xl:mt-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-0 tranform-all ease-in duration-500'>
                    {services.map((service, i) => (
                        <div
                            key={i}
                            ref={el => {refs.current[i].box = el}}
                            className={`flip w-[250px] h-[250px] sm:w-[230px] sm:h-[230px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] 2xl:w-[330px] 2xl:h-[330px] mb-[5px] transition-all ease-in duration-500 mr-5 ${i === 1 || i === 3 ? 'ml-[55px] sm:ml-[0px] sm:mt-[30px] xl:mt-[70px]' : ''}`}
                            style={{ perspective: '1000px' }}
                        >
                            <div className="w-full h-full inner transition-transform duration-[.6s]" style={{ transformStyle: 'preserve-3d' }}>
                                <div className="flex items-center justify-center text-center bg-[#3f3f3f] font-ubuntuL text-white text-wrap w-full h-full xl:text-[25px] absolute rounded-[20px] border border-[#02161d] text-[20px] bg-cover bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50 before:rounded-[20px]" style={{ backgroundImage: `url(${service.url})`, backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}>
                                    <div className="w-[80%]" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}>{service.front}</div>
                                </div>
                                <div className="flex items-center justify-center bg-[#02161d] font-ubuntuL text-white text-[18px] sm:text-[15px] md:text-[18px] w-full h-full absolute rounded-[20px] border border-[#02161d]" style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', transform: 'rotateY(180deg)' }}>
                                    <div className="w-[80%]" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}>{service.back}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
