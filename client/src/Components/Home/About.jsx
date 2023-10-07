import React from 'react'

const About = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{minHeight:"80vh"}}>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-25 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">

                <h1 style={{ fontWeight: "700" }} className='mx-auto text-center text-2xl text-black '>Ambula Technologies Private Limited</h1>
                <figure className="mt-5">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p >
                            “We provide risk management in solar PV and energy storage projects from concept planning through to completion, including engineering & technical services and operational asset optimisation management to our partners in selective renewable energy markets. We are a team of highly skilled professionals with strong operational excellence.”
                            GreenEnco team has a cumulative experience of over 50 years in renewable energy, engineering, data analysis and software development. Our team have supported over £600M Techno-Commercial due diligence in the primary and secondary solar market in EMEA and APAC. Our founder is a member of the IEC, BSI and IET international standard committee, developing solar standards for global customers.
                            GreenEnco has developed innovative design optimisation solutions to increase the value of a project from the concept to the operational phase of a project. GreenEnco's newly developed tool can perform a technical and commercial assessment of solar and battery storage projects for commercial and domestic applications.
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">

                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">

                            <div className="text-gray-600 text-center">CEO :  <strong className='text-uppercase'> Jyoti Roy </strong></div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
        </div>
    )
}

export default About