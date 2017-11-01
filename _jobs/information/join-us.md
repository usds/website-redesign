---
title: Join Us
permalink: /join/

lede_markdown: We launched our Design, Technology, and Innovation Fellows program in June 2016 as an opportunity for Austin’s passionate and civic-minded designers and developers to bring the principles, values, and practices of the technology sector into government.

# DON'T EDIT ANYTHING BETWEEN THE <div> TAGS BELOW!
---

<div class="hidden-md hidden-lg hidden-xl" role="menu">
{% assign new_collection = site.collections | where: "title", page.nav_from_collection | first %}
{% assign items = new_collection.docs | sort: "url" | sort: "position" %}
{% assign base_path = page.nav_from_collection | downcase | prepend: "/_" | append: "/"  %}
{% include recursive-nav.html items=items base_path=base_path  %}
</div>


We’re currently looking for [front-end](https://cityofaustin.github.io/innovation-fellows/join/positions/front-end-developer/), [back-end](https://cityofaustin.github.io/innovation-fellows/join/positions/back-end-developer/), and [full-stack](https://cityofaustin.github.io/innovation-fellows/join/positions/full-stack-developer/) developers to support our  engineering team in their efforts to improve ATXfloods, launch a new platform for austin.gov, and help the city employees break up with paper processes. 

We’re also looking for senior practitioners in [visual design](https://cityofaustin.github.io/innovation-fellows/join/positions/ui-designer/), [experience design](https://cityofaustin.github.io/innovation-fellows/join/positions/ux-designer/), and [service design](https://cityofaustin.github.io/innovation-fellows/join/positions/service-designer/) to develop patterns for the future of city services, and experts in [content strategy](https://cityofaustin.github.io/innovation-fellows/join/positions/content-strategist/) to help us concept, prototype, and implement content solutions across departments and initiatives.
  
Across projects, we’re seeking experienced [project managers](https://cityofaustin.github.io/innovation-fellows/join/positions/agile-project-manager/) and [program managers](https://cityofaustin.github.io/innovation-fellows/join/positions/program-manager/) to help our teams continue to deliver the best possible work for Austin’s residents, and set an example for how to lead design and technology in local government.

If none of our current openings are the right fit for you, connect with us to be notified of future openings, or [send us your resume](https://jobs.lever.co/austintexas/7367149f-2727-4c51-82fe-124ad57f3a28).


--



#### Get Updates
{% include bloomfire-form.html %}
