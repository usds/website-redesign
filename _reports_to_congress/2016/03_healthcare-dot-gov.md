---
layout: default
title: Stabilizing and Improving HealthCare.gov
short: HealthCare.gov
sub: true
report: 2016
permalink: /report-to-congress/2016/healthcare-dot-gov/
---
### The Challenge

As required by the Affordable Care Act, HealthCare.gov is the Federal website that facilitates purchase of private health insurance for consumers who reside in states that did not establish health insurance marketplaces. HealthCare.gov supports the Federal Health Insurance Marketplace (Marketplace), providing citizens with the ability to compare, shop for, and enroll in affordable healthcare plans.

HealthCare.gov launched in October 2013, and encountered serious technical challenges which prevented many people from using the service.

### Project Impact Summary

* A team of private sector engineers and product managers joined CMS staff and contractors to identify and solve website operation problems. By March 2014, over 8 million Americans had successfully signed up for health insurance and the site was stable.
* In the two subsequent open enrollment periods, USDS staff continued to partner with CMS to improve the HealthCare.gov system and services. USDS staff helped CMS implement several private sector best practices including performance tracking of the system and application process, building an improved identity management solution with an uptime of 99.99%, increasing the conversion rate in the new application workflow from 55% to 85%, and building new systems with industry standard open source software.

### The Solution

Over the three month period following the launch, a team of engineers and product managers from the private sector joined with CMS staff and existing contractor teams to troubleshoot the service. Working around the clock, this "tech surge" team systematically identified and solved problems with the service by following industry best practices in site reliability and product management. By March 2014, the end of the Marketplace's first open enrollment period, over 8 million Americans had successfully signed up for health insurance.

The HealthCare.gov turn-around demonstrated the enormous potential of empowering small teams of America's brightest digital talent to apply modern technology best practices to Federal Government projects. In August 2014, the White House established the U.S. Digital Service (USDS) to apply this technique to a greater number of projects. Mikey Dickerson, a site reliability engineer on the HealthCare.gov team, was appointed the USDS Administrator.

In the two subsequent open enrollment periods (ending February 2015 and January 2016), USDS engineers, product managers and designers partnered with CMS staff to continue to improve HealthCare.gov systems and processes used to deliver the service.

![Screenshot of HealthCare.gov](https://cloud.githubusercontent.com/assets/1237498/18360744/3f80e3a4-75cd-11e6-92e6-04cd0b8a2a8b.png)

For example, contractors from multiple companies along with CMS staff improved coordination in the Healtchare.gov operations center by embracing a "one-team" mentality with fewer process restrictions, which has improved the ability of this team to troubleshoot issues and make important decisions quickly. The team also implemented application monitoring to track performance.

Additionally, USDS supported several smaller teams working on components of HealthCare.gov which adopted agile and iterative development processes, allowing them to quickly deliver functioning software. In one such case, a small team built and launched the Scalable Login System (SLS), a replacement for HealthCare.gov's previous identity management solution. SLS has proven to be vastly more stable and efficient since it was created specifically for use by Marketplace consumers.

Additionally, CMS launched a simpler and more efficient application for healthcare plan enrollment (Marketplace Lite 2.0 App). The conversion rate in the new application workflow stands at around 85%, compared with approximately 55% in the previous system. Finally, CMS with input from the insurer community, built and launched a new set of decision support tools for the window shopping and plan compare tools. These tools allow consumers to search for preferred doctors, prescription drugs, and facilities while shopping for a health plan. This was one of the most requested features from Marketplace consumers over the past several years.

| **Success Criteria** | **Status** |
| --- | --- |
| Transition HealthCare.gov to a scalable login system with an uptime of 99% or greater | Complete. Scalable Login System implemented and users migrated to the system in 2015. Uptime 99.99% |
| Implement application monitoring. | Complete. Monitoring installed and in use. |
| Launch the Marketplace Lite 2.0 app | Complete. App launched in 2015, resulting in improved conversion rates. |

### Milestones
- October 2013: HealthCare.gov launches. "Tech surge" assists with troubleshooting the service.
- March 2014: First open enrollment period closes with 8 million Americans enrolled (5.3 million through HealthCare.gov).
- August 2014: USDS created.
- November 2014: Second open enrollment period begins. USDS team supports Marketplace operations.
- February 2015: Second open enrollment period ends with 11.7 million enrollments (8.8 million through HealthCare.gov). USDS team supports Marketplace operations and assists with the transition from to SLS.
- November 2015: Third open enrollment period begins. USDS team supports Marketplace operations
- January 2016: Third open enrollment period ends with 12.7 million enrollments (9.6 million through HealthCare.gov). USDS support role winds down.

### The Process and Lessons Learned

1. **Install application monitoring.** At initial launch of HealthCare.gov, there was no end-to-end monitoring of the production system, making identification, prioritization and diagnosis of errors very challenging. One of the first actions the "tech surge" team took was to recommend the addition of an application monitoring tool, which has remained an important resource for the team to identify issues as they occur.

2. **Facilitate open and direct communication between technical contributors.** HealthCare.gov has many components, many of which were created by different companies hired by CMS. Problems with the integration of these components was a source of many errors in the initial launch. The most effective solution was to bring individual technical contributors from these various teams to a single location where problems could be discussed openly, solutions could be explored, and assignments could be made. Additionally, all staff and contractors working on aspects of HealthCare.gov began to use a collaboration tool to communicate more effectively.

3. **Deploy in a flexible hosting environment.** Traffic on HealthCare.gov is highly variable. Near the end of an enrollment period, for example, the number of visitors can increase by an order of magnitude.

    Several of the newer components of HealthCare.gov are deployed in a flexible cloud hosting environment (including SLS and the Marketplace Lite App 2.0 described above). CMS has experienced high availability and increased development speeds with this approach, and is seeking to use this approach for more of its components.

4. **Build services using agile and iterative processes.** CMS has had success using small teams to incrementally deliver enhanced functionality based on an evolving understanding of user needs. For example, the Marketplace Lite App 2.0 continues to be iteratively improved based on user feedback and metrics.

5. **Choose a modern technology stack.** The Scalable Login System was built with industry standard open source software components commonly used by the private sector. The service is deployed in the public commercial cloud. These decisions enabled the team to build the service at a lower cost.
