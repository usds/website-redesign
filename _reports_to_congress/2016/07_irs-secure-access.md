---
layout: default
title: Providing Secure Access to IRS Taxpayer Information
short: IRS Secure Access
sub: true
report: 2016
permalink: /report-to-congress/2016/irs-secure-access/
---
### The Challenge

Over 150 million taxpayers interact with the IRS each year. The IRS wants to offer taxpayers digital services such as online access to individual tax records and tax refund statuses. There is clear demand for these services from taxpayers – for example, the "Where's My Refund" online tool is one of the most popular Federal Government websites, with over 200 million requests in 2015. However, providing online taxpayer services is difficult due to the challenge of distinguishing a legitimate taxpayer from an identity thief who may try to steal information held by the IRS to commit fraud. IRS currently withstands more than one million attempts to maliciously access its systems each day.

One important IRS digital service is Get Transcript Online. The tool lets taxpayers access their official tax history, which can be needed for student loan applications, mortgage paperwork, or even filing the current year's returns. In May 2015, widespread unauthorized access of the tool forced IRS to take it offline. After analysis, IRS determined that bad actors had been using taxpayers' personal information stolen from data breaches outside the IRS to circumvent the tool's identity verification process. As a result, some taxpayer information was released to unauthorized users, who used the data to commit tax return fraud.

Creating a new authentication system that solves the difficult challenge of verifying the identity of individuals seeking to use IRS services was a top priority for the agency. Not only would this allow the IRS to restore access to the Get Transcript Online tool, but a method for securely identifying taxpayers is a prerequisite for many future digital services that the IRS is seeking to build for the American people.

One approach considered early in the Secure Access project was to add a "PIN in the mail" step to the user registration process, in which the IRS would mail an activation code to a taxpayer's physical address. The IRS was not satisfied with this solution because it wouldn't provide a better user experience than the default process of simply mailing tax transcripts directly to taxpayers that request them, a process which takes 5-10 days. The IRS wanted a solution that would allow taxpayers to get access to their own data in minutes, not days.

### Project Impact Summary


- In May of 2015, the IRS removed the ability for millions of taxpayers to get online access their tax transcript because the "Get Transcript Online" service had been abused by unauthorized users.
- One option considered to secure the service would be to physically mail transcripts or account PIN numbers. However the IRS wanted a solution that could be completed in minutes, not days.
- A team of three USDS personnel worked with IRS beginning in October 2015 to help design and implement a new Secure Access online process.
- With the help of the USDS team, IRS executed a controlled launch in which the new service was tested with small groups of real users prior to full launch. The team also implemented fine-grained error-tracking and log monitoring. With this approach, USDS helped IRS achieve a 4x reduction in the error rate prior to full launch.
- The new Secure Access process takes an average of 12 minutes for users to complete, compared to the 5-10 calendar day wait for mailed transcripts without Secure Access.
- "Get Transcript Online" was returned to service for all taxpayers using the new Secure Access process in June 2016.
- As of August 22, 2016, taxpayers have accessed over 2.7 million transcripts using the online Secure Access process.
- IRS plans to re-use the Secure Access process for four additional services in IRS' e-Services suite.

### The Solution

Recognizing the importance of secure online access, the IRS asked to partner with experts from the USDS in determining how to strengthen their authentication protocols while remaining convenient for taxpayers. Together USDS and IRS outlined the characteristics of a tool called "Secure Access": a user verification process using strong identity proofing and two-factor authentication in line with both industry best practices and federal standards from OMB and NIST.

The new system adheres to the "Level 3" standards of Electronic Authentication Level of Assurance, as defined by NIST in  [SP 800-63-2](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-2.pdf). This level of assurance requires an individual to demonstrate control over a physical object (i.e. "something you have") in addition to demonstrating knowledge of personal information such as name, birth date and social security number (i.e. "something you know"). The old system adhered to LOA2, which allowed access to the system using personal information as well as knowledge-based multiple choice questions. This level of assurance proved insufficient, because some of the personal information used to verify users' identities in this approach had already been compromised in various data breaches from sources other than the IRS.

Using Secure Access to protect sensitive applications like Get Transcript Online would enable taxpayers to have convenient, real-time access to their transcripts without making that information vulnerable to automated fraudulent attacks. Working side by side with the agency, USDS helped IRS deliver the Secure Access project following principles from the  [Digital Services Playbook](https://playbook.cio.gov/). These proven approaches enabled the IRS to efficiently deliver the Secure Access project in a timely manner. In June of 2016, the IRS launched Secure Access and brought Get Transcript Online back into service.

| **Success Criteria** | **Status** |
| --- | --- |
| Restore online access to tax records in a manner that is secure against automated attacks (implementation of the NIST Level of Assurance Level 3 standard) | Complete. Service launched in June 2016. As of August 22, 2016 taxpayers have accessed over 2.7 million transcripts. |
| Build an account creation process that takes less than 15 minutes for a user to complete. | Complete. Account creation takes an average of 12 minutes, vs. 5-10 days for mailed transcripts or PIN numbers. |
| Implement error tracking and log monitoring. Collect and report daily business metrics. | Complete. Daily statistics on attempts, pass rates, error rates and overall traffic are collected and disseminated. Error tracking and log monitoring implemented. Phased launch strategy resulted in fourfold reduction in error rate. |
| Secure Access process used for at least one additional IRS service in addition to Get Transcript Online. | Complete. Secure Access is now used for the "Get an Identity Protection PIN" service in addition to Get Transcript Online. IRS also plans to implement Secure Access for four additional services in IRS' e-Services suite (Registration Services, e-File Application, Transcript Delivery, and TIN Matching). |

### Milestones

- October 2015: Discovery Sprint completed
- November 2015: Project start date
- February 2016: Secure Access protocol code completed
- March 2016: Internal employee test
- May 2016: Service launched to production, beginning controlled phase-in approach
- June 2016: Service launched to all users

### The Process and Lessons Learned

1. **Assign one leader.** The IRS recognized the need for a single executive to help provide consistent oversight over all authentication and authorization needs across the many IRS functions and channels. They created the Identity Assurance Office, led by a senior IRS executive with experience working with both business and information technology groups. USDS worked side by side with this executive, helping clarify the business, product, process, and technical decisions that come with the responsibility of meeting user demands. USDS also worked with partners at OMB and NIST to get relevant background information that would help this leader make decisions that would meet federal standards while also meeting both user and business needs.

2. **Understand what people need and design a simple and intuitive service.** USDS worked with the IRS team to maintain constant focus on taxpayer needs. At the beginning of the project, USDS gathered input from the United Kingdom's Government Digital Service to inform early directions and learn from this organization's hard-won experience. One of the key insights from the U.K. team proved particularly valuable. The U.K. team learned it was important to set user expectations about how the authentication process would work up front, and to provide graceful alternatives if the user cannot or does not wish to continue with the online authentication process.

    USDS worked with the IRS to create draft user flows and tested them with users on a weekly basis. USDS improved the navigation, flow and messaging based on these tests. For example, an early prototype confused taxpayers by stating that authentication would require a "Credit card or auto loan, mortgage, home equity loan account number." In usability tests, the team learned that taxpayers thought they needed the account number for the credit card, not just the last eight digits of the credit card itself. The team changed the wording to be clearer. The IRS will continue to use this iterative design process to help determine which features and fixes should be prioritized.

3. **Build the service using agile and iterative practices.** In addition to the iterative design process described above, at the suggestion of the USDS, the IRS used a phased launch process to test and refine the Secure Access protocol before its full launch. Initially, the agency limited access to the authentication system to only IRS employees. This controlled test allowed the team to get end-to-end user data that accelerated debugging and improvements.

4. **The USDS worked together with developers and business analysts to understand how users were getting stuck in order to improve the process.** An example of an issue that was discovered and fixed in this controlled launch was in a data entry field. When users were prompted to enter their account number, some users included the "#" character when typing the number. This would generate an error message that explained the "input was too long," confusing users. This problem did not surface in internal quality assurance testing, and would not have been discovered without letting real users interact with the system prior to full launch. The team fixed the problem and redeployed the improved code to another cohort of internal users. After this internal test, the IRS used a public beta period where the improved Get Transcript Online service was offered to a small percentage of public visitors to the IRS website. This beta period allowed the team to fix even more issues. This iterative process was used to identify and fix many subtle errors and points of confusion prior to full launch.

5. **Use data to drive decisions.** Collecting good data on how users were interacting with the system was a key to success. With USDS assistance, the IRS developers implemented fine-grained error codes and log monitoring. With this data, the team could categorize bugs and list the most common errors, allowing the team to prioritize its efforts. In one such case, a bug that resulted in a small number of users in the public beta test being unable to register was identified and eliminated. In this case, USDS engineers examined the code and speculated that an input validation filter on one of the field items had been accidentally set too strictly, rejecting some valid inputs. An IRS developer used the error monitoring data to identify that the error was highly correlated with specific versions of the Firefox web browser. With these insights, the team was able to identify the root cause of the error and deploy a fix before the tool's public announcement, saving hundreds of users a day from having the same issue.

    Between the initial deployment of the Secure Access protocol and the full public launch, iterative development coupled with good monitoring allowed the IRS to achieve a fourfold drop in the error rate. The agency will continue to monitor errors and prioritize effort based on this data.
