---
layout: default
title: Helping Students Make More Informed College Choices at Department of Education
short: College Scorecard
sub: true
report: 2016
permalink: /report-to-congress/2016/college-scorecard/
---
### The Challenge

For students, higher education may be the single most important investment they can make in their futures to ensure they have the knowledge and skills needed to compete in an increasingly global marketplace. College is the surest path to becoming part of America's middle class and for this reason, selecting a college is an incredibly important decision for many people. But, many potential college students and their families do not have the advisors or resources to help them find a college that will serve them well.

With college costs and student debt on the rise, the choices that American families make when searching for and selecting a college have never been more important. Yet, students and the organizations that serve them struggle to find clear, reliable, and comparable data on critical questions of college affordability and value, such as whether they are likely to graduate, find middle-class jobs, and repay their loans. At a time when America needs colleges to focus on ensuring affordability and supporting all students who enroll, many of the existing college rankings instead reward schools for spending more money and rejecting more students. Additionally, college leaders and state policymakers who seek to improve institutions' performance often lack reliable ways to determine how well their schools are serving students.

To address this challenge, the Department of Education sought to redesign the  [College Scorecard](https://collegescorecard.ed.gov/).

### Project Impact Summary

- The USDS team at the Department of Education, with help from 18F, launched the College Scorecard to help students and their families make more informed choices about where to go to school.
- The Scorecard makes comprehensive data on college costs, graduation rates, graduate debt, repayment rates, and post-college earnings accessible to help students choose a school based on access, affordability and outcomes.
- The project drew on hundreds of interviews with students, parents and guidance counselors to ensure that the product would fit their needs.
- In its first two weeks, College Scorecard attracted over 850,000 unique users, a major uptick from the 160,000 who used the prior version of the tool the entire year before.
- The project opened the data to the public and made an API available specifically for third-party developers to build more applications to help students and policymakers. More than a dozen organizations have built new tools using this data.
- Google has now integrated College Scorecard data so that it shows up front and center in the results of hundreds of millions of education-related searches.

### The Solution

The new College Scorecard was redesigned with direct input from students, families, and their advisers to provide the clearest, most accessible, and most reliable national data on college costs, graduation rates, and post-college earnings. This new College Scorecard can empower Americans to rate colleges based on what matters most to them; enable policymakers and the public to highlight colleges that are serving students of all backgrounds well; and focus greater attention on making a quality, affordable education within reach. The new tool for assessing college choices, with the help of technology and open data, makes it possible for anyone—a student, a school, a policymaker, or a researcher—to evaluate an institution on the factors that matter most to them.

The public can now access the most reliable and comprehensive data on students' outcomes at specific colleges, including former students' earnings, graduates' student debt, and borrowers' repayment rates. This data is published through an open application programming interface (API), enabling researchers, policymakers, and developers to customize their own analyses of college performance more quickly and easily.

More than a dozen organizations are using this data to build new tools. For example, Scholar Match, Propublica, and College Abacus—three college search resources—are using the new, unique data to help students search for, compare, and develop a list of colleges based on the outcomes data that the Department of Education made available for the first time through an API. InsideTrack, comprised of a team of coaches and consultants working to improve student outcomes by helping students find the institutions that are right for them, uses the data to develop and implement effective student-centered initiatives.

![College Scorecard screen shots](https://cloud.githubusercontent.com/assets/1237498/20021492/6407ba3e-a2ac-11e6-81a5-2ae01f17209d.png)
*The College Scorecard*

The Department of Education plans to continue releasing new College Scorecard data and promoting use of these new access, affordability and outcome metrics.

### Success Criteria

| **Success Criteria** | **Status** |
| --- | --- |
| Engage a diverse set of students and their supporters, especially high-need, low-income and first-generation college-goers. | Ongoing. In the first two weeks the Scorecard was launched, it was accessed by 850,000 users. The previous version of the tool received 160,000 total users in the previous year. |
| Educate the marketplace and shift focus to key outcome metrics and institutional performance | Ongoing. External organizations and third party developers are making use of this new data in their tools and research. |
| Enable more informed college matching | Ongoing. As of September 2016, 1.5 million unique users have accessed the tool. The previous version of the tool received 160,000 unique views a year. |
| Foster continuous improvement | Ongoing. New data was released to the Scorecard in September 2016. All Scorecard information is now appears in search results for colleges. |

### Milestones

- April 2015: Project Start Date.
- July 2015: Code Start Date.
- September 2015: Go-Live Date.
- May 2016: USDS Project End Date.
- September 2016: New data released to Scorecard. All data indexed and searchable.

### The Process and Lessons Learned

- **Understand what people need.**  USDS, Ed, and 18F built College Scorecard by working with users at every stage of the project to find out how they made decisions about college. The team met with students (both high school and adult), parents, guidance counselors and advisors, open data users, and people who wrote to the President about their college search experiences. Long before the first line of software code was written, the team was working with students, testing paper prototypes to make sure they were as easy-to-use as possible.

![img](https://www.whitehouse.gov/sites/whitehouse.gov/files/images/Scorecard%20Demo.png)

*Getting feedback on a paper prototype of the new College Scorecard.*

- **Build services using agile and iterative processes.** The Department of Education built the College Scorecard using agile development methodology. To deliver the right product — what students actually need — as efficiently as possible, the team built the new College Scorecard using an approach that allowed the team to work in short iterations, and to test, scale, and design the tool with a process that could adapt to changes in technology and user needs. The team maintained a project rhythm of two week iterations, with daily stand up meetings to coordinate progress.

- **Run a developer beta.** USDS ran a beta specifically for developers — giving them a chance to test the data and documentation and flag opportunities to make it even easier to use. The feedback from the developers made it possible to release the data in a way that led to easy re-use by third parties.

- **Launch a minimum viable product (MVP).** The team focused on launching a MVP, building the right products to meet customer needs as efficiently as possible. This approach allowed the project to launch with less than 3 months of development time. The team built the project mobile-first and focused on the most critical feature set and information that each user type advocated for.

- **Release open data, and build services using the same APIs offered to the public.** Rather than focusing solely on creating a user-facing website, the team also created documentation for, and released, open data for over 7,300 colleges and universities, going back 18 years. This made it possible for third-parties to incorporate the data into their own products and tools, increasing the chance that the information makes it to users wherever and whenever they might be looking for it.

    To make it easier for third parties to integrate this data, Department of Education  [published an API](https://collegescorecard.ed.gov/data/documentation/). This API serves both as the engine for the College Scorecard itself as well as a source for external software developers or researchers who want to use the data in their own digital products. The College Scorecard effort is one of the first government digital services that not only releases open data, but also builds a user-facing tool on top of the very same API it provides to the public. This is a common practice used by American's best technology companies.
