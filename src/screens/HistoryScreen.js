import React from 'react'
import Bounce from 'react-reveal/Bounce';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import A1 from "../award-1.jpg"
import A2 from "../award-2.jpeg"
import A3 from "../award-3.jpg"
import A4 from "../award-4.jpg"
import StarIcon from "../StarIcon.png"
import WorkIcon from "../WorkIcon.png"
import SchoolIcon from "../SchoolIcon.png"

const HistoryScreen = () => {
    return (
        <section className="flex flex-col gap-5 max-w-screen-xl py-36 mx-auto px-6  overflow-y-hidden">
            {/* heading  */}
            <Bounce left>
                <div className="flex flex-col items-center space-x-2 pb-4">
                    <h1 className="text-gray-700 poppins text-3xl">Our {" "} <span className="text-blue-500 font-semibold select-none">Hospitals</span></h1>
                    <div className="bg-blue-500 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                </div>
                <div className="flex flex-col min-w-full rounded-lg overflow-hidden shadow-green-500/50 md:shadow-xl md:shadow-green-500">
                    {/* <VerticalTimeline>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(16, 185, 129)' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-subtitle">
                                The manufacturing Unit set-up is fully designed as per GMP-Schedule M, Drug and Cosmetics Act, 1940 and drugs Authorities have approved our works and awarded Drugs manufacturing License on 2nd February 2006
                            </h1>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(16, 185, 129)' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-subtitle">
                                The manufacturing Unit set-up is fully designed as per GMP-Schedule M, Drug and Cosmetics Act, 1940 and drugs Authorities have approved our works and awarded Drugs manufacturing License on 2nd February 2006
                            </h1>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(16, 185, 129)' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-subtitle">
                                The manufacturing Unit set-up is fully designed as per GMP-Schedule M, Drug and Cosmetics Act, 1940 and drugs Authorities have approved our works and awarded Drugs manufacturing License on 2nd February 2006
                            </h1>
                        </VerticalTimelineElement>
                    </VerticalTimeline> */}
                    {/* <VerticalTimeline lineColor='#10b981'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006"
                            contentStyle={{ background: '#10b981', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #10b981' }}
                            iconStyle={{ background: '#10b981', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">The manufacturing Unit set-up is fully designed as per GMP-Schedule M, Drug and Cosmetics Act, 1940 and drugs Authorities have approved our works and awarded Drugs manufacturing License on 2nd February 2006</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Setup Head Office in Lucknow 2008: Start working with Zydus Cadila</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={WorkIcon}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={WorkIcon}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={SchoolIcon}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                                Strategy, Social Media
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={SchoolIcon}
                        >
                            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={SchoolIcon}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                                Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={StarIcon}
                        />
                    </VerticalTimeline> */}
                    {/* <table className="min-w-full leading-normal"> */}
                        {/* 2006 </td></tr>

                        2007 Setup Head Office in Lucknow 2008: Start working with Zydus Cadila</td></tr>

                        2009 Elaborate the Third party business with Top 10 MNCs Companies</td></tr>

                        2010 GMP and GLP Approved from SLA</td></tr>

                        2012 Star Achiever Award 2012-2013 Intas Pharmaceuticals</td></tr>

                        2013 Star Achiever Award 2013-2014 Intas Pharmaceuticals 2014: Star Achiever Award 2014-2015 Intas Pharmaceuticals</td></tr>

                        2015 Star Achiever Award 2015-2016 Intas Pharmaceuticals</td></tr>

                        2017 Star Achiever Award 2017-2018 Intas Pharmaceuticals 2018: Expansion in Plant & Introduce Own products in Domestic Market</td></tr>

                        2019 WHO-GMP, ISO 9001:2015 & DPML IVORY COAST Approved</td></tr>

                        2020 Start the Export in Different Countries own product and third party</td></tr> */}

                        
                </div>
                {/* <div className="flex flex-row min-w-full shadow-lg rounded-lg py-12 pt-4 border-2 border-green-300 align-content-center pl-24">
                    <img src="https://lucentbiotech.com/wp-content/uploads/2020/06/Untitled-3-1.jpg" height={200} width={200}>
                    </img>
                    <img src={A1} height={200} width={200}>
                    </img>
                    <img src={A2} height={200} width={200}>
                    </img>
                    <img src={A3} height={200} width={200}>
                    </img>
                    <img src={A4} height={200} width={200}>
                    </img>
                </div> */}

            </Bounce>
        </section>
    )
}

export default HistoryScreen