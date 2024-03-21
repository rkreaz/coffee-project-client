
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Banner.css'
import slider1 from '../../assets/images/slider/slider.jpg'
import slider2 from '../../assets/images/slider/slider2.jpg'
import slider3 from '../../assets/images/slider/slider3.jpg'
import slider4 from '../../assets/images/slider/slider4.jpg'
import slider5 from '../../assets/images/slider/slider5.jpg'


const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (

        <>
            <div ref={sliderRef} className="keen-slider">
                <div style={{ backgroundImage: `url(${slider1})` }} className="keen-slider__slide number-slide1">
                    <div className="text-center">
                        <h1 className="text-5xl engagement-regular text-[#fff]">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-sm mt-5">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br /> Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="text-lg px-6 py-3 bg-[#965f27] rounded-lg hover:bg-[#CA7928]">Learn More</button>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${slider2})` }} className="keen-slider__slide number-slide2">
                    <div className="text-center">
                        <h1 className="text-5xl engagement-regular text-[#fff]">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-sm mt-5">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br /> Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="text-lg px-6 py-3 bg-[#965f27] rounded-lg hover:bg-[#CA7928]">Learn More</button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${slider3})` }} className="keen-slider__slide number-slide3">
                    <div className="text-center">
                        <h1 className="text-5xl engagement-regular text-[#fff]">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-sm mt-5">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br /> Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="text-lg px-6 py-3 bg-[#965f27] rounded-lg hover:bg-[#CA7928]">Learn More</button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${slider4})` }} className="keen-slider__slide number-slide4">
                    <div className="text-center">
                        <h1 className="text-5xl engagement-regular text-[#fff]">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-sm mt-5">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br /> Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="text-lg px-6 py-3 bg-[#965f27] rounded-lg hover:bg-[#CA7928]">Learn More</button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${slider5})` }} className="keen-slider__slide number-slide5">
                    <div className="text-center">
                        <h1 className="text-5xl engagement-regular text-[#fff]">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-sm mt-5">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br /> Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="text-lg px-6 py-3 bg-[#965f27] rounded-lg hover:bg-[#CA7928]">Learn More</button>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Banner;