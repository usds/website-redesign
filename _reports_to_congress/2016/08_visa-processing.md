---
layout: default
title: Improving the Visa Processing System at Department of State
short: Visa Processing
sub: true
report: 2016
permalink: /report-to-congress/2016/visa-processing/
---
### The Challenge

The Department of State (State) protects the lives and interests of U.S. citizens overseas and strengthens the security of U.S. borders through the vigilant adjudication of visa and passport applications. State provides a range of services to U.S. citizens and foreign nationals, including issuance of U.S. passports and Consular Reports of Birth and Death Abroad and adjudication of nonimmigrant and immigrant visa applications. These processes largely are conducted through a collection of custom applications that depend on a system called the Consular Consolidated Database (CCD).

Many government systems, including the CCD, were designed at a time before most modern technologies to support distributed data processing were available. As a result, CCD's technical approach – innovative at the time it was implemented – deviates from what are now industry best practices. Over time, development focused on adding new features rather than modifying the underlying platforms and tools.

The integration of various components made the CCD progressively more complex. As a result, it became more difficult to ensure new features were integrated in a high-quality, easily maintainable manner. As demand increased, some tools were not able to be improved upon in a timely fashion.

### Project Impact Summary

- In June 2016, the USDS team began discovery work around how to improve the visa application process. The team honed in on better ways to update applicants and petitioners on case status by making adjustments to a tool built in 2012.
- Over the past year, the CEAC Visa Status Check site received over 3 million visits per month from users ranging from petitioners in the United States to applicants across the world.
- The National Visa Center, a visa application processing center run by the Department of State, receives approximately 9,000 phone calls a day. The vast majority of those calls are about a visa applicant's case status.
- The USDS team, in partnership with the Bureau of Consular Affairs, is in the process of engineering improvements to the tool that will show users better information about their case status and how to advance to the next stage of the application process.
- The USDS team performed robust user testing of the new status tool and tested how improved information using plain language may help cases move more quickly through the appropriate parts of the process.
- The status tool will launch soon. We will measure the impact of the tool against several metrics, including how it impacts the National Visa Center's call volume.

### The Solution

USDS worked closely with State's Bureau of Consular Affairs' Office of Consular Systems and Technology (CST), which supports, develops, and maintains the technology that enables a global network of consular systems to support U.S. consulates and embassies, domestic visa processing centers, and domestic passport processing agencies and centers. CST already had a number of viable plans to improve overarching stability of the CCD and related applications, but attempts to execute these plans had been stymied by the system's complexity. USDS served as technical consultants, both vetting possible solutions and advising on industry best practices and as an empowering authority facilitating communication across divisions and organizations.

| **Success Criteria** | **Status** |
| --- | --- |
| Standardize software development processes and tooling, enabling the Federal Government to have better visibility into contractor-developed custom software. | Completed. Established central source control repositories on a unified source control system. Completed a pilot that has improved developer workflows and allowed greater oversight into how code is being developed. |
| Transition how information is batched and sent to partner agencies to ensure there are no artificially created backlogs. | Completed. Changes made from both ends have been implemented and information is more efficiently transferred between agencies. |
| Immigration process and status is clear and comprehensible to applicants. | Ongoing. USDS team is currently implementing improvements to an existing tool that should more clearly communicate case status to applicants. |

### Milestones

- December 2015: USDS began engagement to improve information security of various State applications.
- February 2016: USDS began exploration of what kind of developer tools were needed within State to improve engineering practices.
- March 2016: State received USDS recommendations for improved developer tools, including usage of version control software.
- April 2016: USDS began assisting a State vendor with implementation of a version control software pilot.
- April 2016: USDS began discovery work on how to improve how State transmits information for Security Advisory Opinions with partner agencies.
- June 2016: USDS began determining ways to improve how visa status information is shared with applicants, petitioners, and their agents.
- June 2016: Technical implementation of the Security Advisory Opinion data sharing process began.
- July 2016: Technical implementation of improvements to visa status check tool began.
- September 2016: Completion of the technical and business process changes for the Security Advisory Opinion data sharing process.
- September 2016: USDS completed work on a pilot that saw a number of contractors using modern software development tools in the form of version control software.

### The Process and Lessons Learned

1. **Working with and Empowering the Agency:** State identified a number of areas where it could improve its information security. USDS provided assistance in the form of consultation on system remediation and coordination of implementation. USDS also worked closely with teams within State to identify how to prioritize various kinds of remediation that needed to be implemented and how to rank ongoing concerns. Using these techniques, State has markedly improved its defensive posture.

2. **Breaking Agency Silos to Solve Problems Together:** In many cases both the technical expertise and the most appropriate solution were already present within the organization. However, in an agency the size of State it is sometimes difficult to convene these groups and share solutions to senior leadership and across the agency. USDS conducted extensive site visits to bring various branches and contractor groups across State together, and with State leadership's help was able to create cross-team collaboration that sped up the development and deployment of solutions. The project to modernize developers' tools, for example, is a collaboration between multiple divisions within CA/CST: Configuration Control, Systems Engineering and Integration, and Service, Systems and Operations.

3. **Technical Vetting and Evaluation:** USDS provided State program and project managers with objective technical advice. This gave State better accountability and communication among contractors. Since problems were often spread over applications and systems governed by several contracts, government managers heard different technical explanations. USDS engaged in several "fact finding missions," allowing State to use this information to prioritize tasks effectively.

4. **Embrace pilots:** Pilots are great opportunities to perform experiments in a contained, structured way. The ability to experiment is essential when bringing on new tools, services, or methodologies. It's not clear which will work best in a given environment, so experimentation is essential to bringing new tools, services, and methodologies to an organization. Knowing that the results will be used to determine if a pilot will continue helps stakeholders embrace new methods of doing things.

5. **Test early and often:** Manual and automated testing are essential parts of the software development process. Increasing your test coverage makes it easier to deploy a tool or functionality quickly and securely. We are hopeful that by working with stakeholders and contractor teams, we can improve the testing culture for how Department software is developed.
