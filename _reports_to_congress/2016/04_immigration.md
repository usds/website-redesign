---
layout: default
title: Modernizing the Immigration System at DHS
short: Immigration System
sub: true
report: 2016
permalink: /report-to-congress/2016/immigration-system/
---
### The Challenge

Every year, the Department of Homeland Security's U.S. Citizenship and Immigration Services (USCIS) processes millions of immigration requests. This system is mostly paper-based, consists of multiple forms, and results in long waiting periods for applicants who have little visibility into the status of their applications.

USCIS wanted to modernize the process. They wanted a streamlined experience that would allow applicants to identify which form was meant for their specific situation, and enable adjudicators to process applications more efficiently and effectively than on paper.

To achieve this goal, USCIS began a five-year engagement with a technology vendor to create the Electronic Immigration System (ELIS). The project ran into a host of issues: the project scope was too large, the proprietary technology adopted was too complex and inflexible, and releases happened years after the project began. The agency was heavily reliant on specific vendors and proprietary technologies that proved costly and difficult to customize to address USCIS' product requirements.

ELIS fell short of expectations and didn't meet user needs – so USCIS made the hard but correct decision to restart the project using a new management style and a new technical approach that took key plays from private industry.

In 2014, members of the USDS joined the USCIS team to help the agency implement these changes, and the USDS has provided ongoing support to the agency since then.

### Project Impact Summary

- Every year, USCIS processes millions of immigration requests. Its multi-year project to modernize this process (the ELIS project) ran into a host of issues common in Federal Government IT projects, leading USCIS to restart the project.
- In 2014, USDS staff engineers, designers and product managers began working with USCIS to help it implement private sector IT management best practices including agile software development and continuous integration.
- In March 2015, following a November 2014 soft launch, USDS supported USCIS with the release of online filing and adjudication of the Form I-90, the application to replace permanent resident cards. 92% of online I-90 filers (renewing or replacing their green cards) reported being satisfied with the experience.
- In February 2015, USCIS partnered with 18F, private contractors, and USDS to launch myUSCIS, a new service to help applications and their representatives better navigate the immigration process.
- The Immigrant Fee payment launched in August 2015, enabling over 1.1 million applicants to make fee payments digitally.
- USCIS has adopted deployment approaches that allow it to release improvements to ELIS weekly, compared to the quarterly release schedule the project followed previously.
- Today, 25% of immigration applications are processed electronically and USDS continues to work with USCIS to increase this percentage.

### The Solution

In restarting the project, USCIS leadership changed the way they did business.

The team embraced an agile, iterative style of product development that allowed the agency to design, build and deploy functionality more quickly to respond to user needs. While the previous project had taken years before an initial launch, the new approach led to a beta release just one year after development began. Agency staff are now heavily involved in the day-to-day development effort, running stand-up meetings and increasing visibility across the team. Seasoned USDS product managers, engineers and designers partnered with the USCIS team to integrate these modern digital service practices.

In order for the team to effectively support this agile development style, USCIS had to change its approach to contracting. They engaged with multiple vendors instead of using one large contract with a single vendor. The teams worked together to deliver features, build and maintain the infrastructure for the service, and enable the continuous integration of new improvements into the production system. The contracts are designed to support frequent prototyping, refining of product requirements, and delivery of working software. Most of them give USCIS the flexibility to ramp up or down the number of development teams from each vendor based on that vendor's performance.

USCIS also conducted deep research on their customers that led them to re-imagine the end-to-end immigrant experience well beyond the core actions of filing and processing requests. They began to redesign the immigrant experience around people, not form numbers.

In partnership with 18F and private contractors, USCIS brought this vision to life by launching  [myUSCIS](https://my.uscis.gov/), a new service built to help applicants and their representatives. myUSCIS allows visitors to determine which immigration options are available to them, with a search-driven, plain-language knowledge base of direct answers to common immigration questions. It also now allows immigrants to apply for naturalization, make fee payments, provide supporting evidence, and look up their case status online.

![Digitization of the eligibility worksheet](https://cloud.githubusercontent.com/assets/1237498/18360797/7802de80-75cd-11e6-9511-5f295b346985.png)

Finally, USCIS technical leaders also made important changes to the architecture of ELIS. The development team has adopted many modern software development practices drawn from the private sector, including the use of open source software components, flexible deployment environments, and real-time monitoring. The team also continuously integrates changes to the system, using modern deployment and testing processes and tools. USCIS is implementing the "DevOps" model, in which there is no separation between development and operations teams.

These improvements in software development practices, design and system architecture are making it easier for users to interact with our immigration system. The team has hit several important milestones, including the release of online filing and adjudication of the Form I-90 (application to replace permanent resident card). USCIS has also begun to electronically process applications for naturalization. USCIS will continue to bring more parts of the immigration process into the new digital system and improve its processes around design, high-quality delivery, and system monitoring and response.

USDS will remain involved with the project to assist with delivery, design and operations.

| **Success Criteria** | **Status** |
| --- | --- |
| Increased percentage of immigration applications processed electronically | In progress. 25% of immigration applications are now processed electronically |
| Increased customer satisfaction rating over time | In progress. 92% of online I-90 filers (renewing or replacing their green cards) reported being satisfied with the experience. |
| Increase frequency of ELIS releases | Complete. ELIS releases new code weekly, up from previous quarterly releases |

### Milestones

- July 2014: A "pilot" USDS engagement prior to its official launch in August began with a "Discovery Sprint" focused on ELIS
- November 2014: ELIS2 I-90 Three-Day "Soft" Launch
- March 2015: ELIS2 I-90 Full Launch
- August 2015: Immigrant Fee payment launched
- April 2016: ELIS2 Naturalization Pre-processing Go-live Date

### The Process and Lessons Learned

1. **Understand what people need.**  The USDS team helped USCIS implement a user-centered design process to ensure that the delivery team understood what people need the service to offer. USDS coordinated and led visits to field offices and the National Benefit Center to conduct direct observation of application processing, giving insight into users' needs and experiences. This user research informed the design of the system. The team further refined these designs by getting adjudicator feedback on simple mockups of functionality, and testing early versions of the system with adjudicators.

2. **Build services using agile and iterative practices.** In the new system, USCIS chose two high-volume services and focused on rapidly digitizing them using an agile development process. The Form I-90 application to replace a permanent resident card was first launched in November 2014, and USCIS Immigrant Fee Payment launched in August 2015. These services were rolled out in an incremental manner, and teams continue to deliver bug fixes and enhancements on a weekly basis. The teams collect feedback from end users and engage in regular usability testing to identify opportunities to improve efficiency and inform development of future product lines.

3. **Structure budgets and contracts to support delivery.** The USCIS CIO spearheaded an innovative contracting approach, which replaced a single large vendor with multiple contractors working together and competing for business. Each contractor provides cross-functional development teams that participate in the iterative product development process, working with federal product owners and project managers. Each vendor is evaluated based on its ability to rapidly deliver working software.

4. **Deploy services in a flexible hosting infrastructure.** USCIS chose to use a "public cloud" infrastructure service provider to host the service. This choice makes it easy and cost-effective for the team to provision, configure and adjust virtual computing resources as needed.

5. **Identify and empower product owners.** USCIS centralized the product development effort in its Office of Transformation Coordination, led by a single executive. This executive has identified product owners for each business line, who are each empowered and responsible for the digitization of that business line's product. Each product owner can prioritize work, advocate for users, and accept delivery of features from the contractor staff. USDS provided training and support to these product owners, and advocated for the creation of this product management structure.

6. **Implement robust monitoring and incident response.** USDS led an initiative to create a rapid response procedure for troubleshooting major incidents such as service outages. This procedure involves identifying "incident commanders" who are empowered to make quick decisions and the use of an alerting tool (currently PagerDuty) to coordinate incident response.

7. **Use "soft launches" to help identify issues prior to full release.** The USCIS team has incremental releases built into its process. For example, the ELIS2 external interface was opened to accept I-90 applications for 72 hours in November 2014. The applications received in this "soft launch" window were then processed using the new system, allowing USCIS to complete an end-to-end test of the service with real data. The results of this test were used to refine the service prior to its full launch in February 2015.

8. **Rely on automated tests to increase development speed.** Good automated test coverage allows the team to verifiably demonstrate the system is working as intended, and speeds the development process by providing instant and reliable feedback to developers about how changes they have made to the system have impacted existing functionality. Working together, USDS engineers and contractor teams have increased the use of automated unit and integration tests.
