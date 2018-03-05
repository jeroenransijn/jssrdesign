# Personas Case Study

Segment’s core data router product tracks over 2.9 billion end users every single month. That data powers analytics, marketing automation and machine learning tools for our customers. Segment Personas is the next generation of tools and products build on top of this massive data pipeline. The goal of Personas is to make every interaction with your users cohesive, personal and relevant.

When I joined the Personas team (formerly called User Record team) early 2017. We were a small, nimble team within the organization — often referred to as a startup within Segment. I worked closely with the PM behind Personas as well as the engineers on the team. It was the perfect fit for me, we moved fast and I got to wear multiple hats. I spend a lot of my time designing in code and building out complex data-driven UI systems.

## Understanding the Problem Set

Customer feedback has been the driving force behind the Personas product. The biggest problem is that it’s hard to build out a single personalized customer journey across the entire user experience. The key problems that stood out where:

Users often have multiple touch points across different platforms and devices, and alternate between anonymous and logged in sessions. The data that is being tracked about these users often paints an incomplete picture of their customer journey. To help fix this problem, we have build a foundational technology in Personas that is called the Identity Graph.

The Identity Graph helps unify user history across devices and channels into one comprehensive profile. For the first time Segment would hold a stateful representation of the users flowing through our pipeline. Now we had this technology it was up to us to figure out what value we could provide to the companies that are using Segment.

## Validating Solutions

The first thing we had to design for Personas was a way to display the stateful user profile. We build out a UI Framework that would allow us to build any profile we wanted. We got signal internally and from our customers that it would useful to have a user profile inside of Zendesk and Salesforce — in which people would normally lack the complete context about a user. We build out a extension for Zendesk to validate this idea.

<div class="image-well">
<div class="grid-columns-3">
<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_A3A89DED5D964A4369D44865F3BA34BA895B8A60A50E9264DA77B8A8E003C8BD_1520113401619_Screenshot+2018-03-03+13.41.31.png" />
<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_A3A89DED5D964A4369D44865F3BA34BA895B8A60A50E9264DA77B8A8E003C8BD_1520113401505_Screenshot+2018-03-03+13.41.59.png" />
<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_A3A89DED5D964A4369D44865F3BA34BA895B8A60A50E9264DA77B8A8E003C8BD_1520113401619_Screenshot+2018-03-03+13.41.31.png" />
</div>
</div>

The profile view and extension in Zendesk and Salesforce was a useful tool for our customer success team and sales team and quickly showed that the user profiles were often incomplete and hard to parse.

A lot of the information was in the event history of a user and there was no way to understand that data from a higher level. Our customer were giving the same signal, they liked the user profiles, but they wanted to synthesize new information based on the event history.

## Synthesizing Information on the User Profile

At this point profiles were useful and we got signal for synthesizing new information on top of the user. We did a lot of crazy 8 sessions and other design thinking sprints at the time. As we are thinking about this problem, we came up with a couple of different ways of solving this problem.

* **Lambda functions,** a real-time programming environment to compute new traits on a user.
* **SQL editor,** a programming environment to write scheduled SQL queries and compute new traits on a user.
* **Trait catalog**, a preset catalog of traits to synthesize on your user.
* **Trait builder,** a slightly more complex interface to compute traits.
* **Audience builder,** a very complex UI builder to map SQL queries.

**Our first choice**
Some of the early use cases involved doing real-time computations and a lambda function environment seemed like a good fit to start. We also wanted to build out a trait catalog and some ways to configure those traits.

**Learning as we go**
As we are building out different types of products and validating it with customers, it turns out that our real-time lambda environment only covered some of the use cases. Most of the use cases needed historical data of each user, and our technology at the time could not handle this in real-time. We decided to focus on the trait builder and catalog.

## Our First User Conference as a Deadline

As we are building out Personas, the company wanted to organize the first ever user conference about 2 months ahead. We wanted to announce Personas and at this exclusive user conference. This meant we had to move even faster than before, and were now taxed by coming up with a compelling demo for our CEO and Head of Product to demo on stage.

## Doubling down on Prototyping a Product Demo

It seemed like a impossible deadline to build out a product before Synapse. There was no way we could build our complete product and demo it on-stage, we were still pivoting often and learning more. At this point most of the design work was still in Sketch, and all we had build was our failed real-time functions environment.

I identified a opportunity for me to step up and hopefully convince our team to build out a interactive prototype in code. I gave our team and Head of Product an ultimatum for the product demo.

* **Low Risk, Low Reward:** Build out a clickable prototype with no interaction that obviously feels fake.
* **Medium Risk, High Reward:** Build out a interactive prototype in React with fake data that seems like the real thing.
* **High Risk, High Reward:** Build out all of the actual product, and make it work for the product demo. (in reality we are launching Personas almost 10 months later)

It was clear to our team that the best way forward would be to focus on the prototype and the product demo. Now it was time for me to start building out our prototype the product demo.

## Opportunity for a Design System

Our goal was to build a interactive prototype for a on-stage demo for our Head of Product. We learned a ton from building out the UI Framework for the user profiles, but now we pivoted towards building out the experience inside of our application. This product would require a lot of new components and interaction patterns.

At this point I had build out the existing UI Framework in our existing app about a year ago, and a UI Framework for the user profiles that run inside our extension for Zendesk and Salesforce. Those experiences have thought me how to build out a UI Framework and have also painfully revealed how incomplete our design system was at the time. It was prime opportunity to start building out a new Design System and UI Framework.

## Building out Evergreen

I started doing a redesigned set of our components and adding ones that were missing for Personas. Since I had to build out a interactive prototype, I started building out our open-source UI Framework called Evergreen. I am currently leading the effort to roll out this system across the rest of our product and organization.

## Synapse is a Huge Success

After countless iterations of the demo script and test runs with the team, we finally had a product demo that felt polished and compelling. Our CEO and Head of Product did an amazing job presenting the product demo on stage — I was up stairs in the tech booth controlling the prototype. Our first exclusive user conference was a huge success for the company and was a great way to announce Personas.

<div class="image-well">
<div class="video-container">
<iframe src="https://player.vimeo.com/video/251344095" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
<p><a href="https://vimeo.com/251344095">Introducing Segment 2.0</a> from <a href="https://vimeo.com/segmenthq">Segment</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
</div>

> "Personas helps you drive loyalty and revenue — by making every customer conversation, across every channel, personal and relevant.”
>
> Peter Reinhardt, CEO of Segment

## Today and Further On

After a successful product demo we still had to realize our promises and build out the actual product. At the same time we had a first pass on our new Design System. Those two ingredients allowed our team to move faster than before. I continued designing in the prototype and it was easy for our engineers to build out the product inside our application — all they had to do was look at my code and port it over.

Today we are almost at general availability for Personas. Our team has made an incredible progress on building out this product and we learned a ton on the way. Going forward I will be leading the efforts to further drive adoption and implementation of our Design System across the organization. I will also continue to work on the Personas product and make it a huge success for Segment.
