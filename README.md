# Vigilant

## Inspiration
We wanted to create an app that could provide access to accurate and current information on ongoing wars across the world. We were inspired by ongoing conflicts such as the Ukraine - Russian war, and hoped to empower civilians and government to work together and plan better against invading forces.

## What it does
Vigilant allows civilians to report military sightings and provide other users information of military movements and unsafe areas.  With information provided by Vigilant, civilians can take steps to keep themselves safe, and government forces can use this crowdsourced data to protect cities and individuals. It provides real time summaries and trends so civilians can keep an eye on warfront developments. The app has authentication checks in place to limit spam and false reports, and uses algorithms to ensure accuracy of data and predict / simulate future movements of reported groups.

## How we built it
We started off by scoping out our web app on Google Docs and broke our project down to simpler issues on Trello. We first figured out our database schemas for Mongodb. Next, we designed our webpages using Figma to visualize in detail how our webpages were supposed to look. Express was used in the backend to hook up our database with our application and React was used for the frontend. We did our data analytics, including polynomial regression, multivariate simulation, and predictions in Python and hooked it up with our app by building out a Flask API for it. Our authorization uses Auth0 and we hosted our application using Docker.

## Challenges we ran into
The main challenges we faced included designing the frontend to be intuitive but detailed in terms of the potential data points provided. Another challenge was trying to run a python script through our express backend, which we solved by setting up a Flask API for this aspect. Our main challenges were just being able to get the sheer amount of work done in a timely manner.


## Accomplishments that we're proud of
The main accomplishment we are proud of is the functionality and planning of our app. Vigilant allows civilians to crowd source reports and information, which can then be used by data analysts to gain life - changing military insights. We believe that this is an invaluable tool in conflicts such as the Ukraine - Russia conflict to keep civilians safe, away from dangerous areas, and utilize machine learning simulations to monitor and predict the path of the war front.

## What we learned
One of the most important lessons we learned is to NOT DELAY INTEGRATION TESTING. While we were done with many different aspects of our frontend, backend, and Flask API by Saturday night, integration testing led to much struggle with ensuring systems received and sent data in sync. Another lesson was to remember to be aware of the scope of the project. While we are proud of the parts of the project we did accomplish, we have many other ideas for Vigilant that were hard to implement in 36 hours. 

## What's next for Vigilant
In the future, we hope to add many more data analytics and authentication features to Vigilant. For instance, one such idea would be to have processing for on the fly anomaly detection and to use interesting algorithms to weed out bad faith actors. Another idea we hope to work on is a verification system and to add to our roles system, such that reports would be classified based on their potential trustworthiness. 

As students, we hope to take our ideas and interests in machine learning, simulation, and application development to companies and organizations across the DMV area. In the future, civilians who find themselves involuntarily engulfed in war zones will not be powerless – armed with the tools and technology of the modern world, they will utilize the power of crowdsourcing and good government to stay alert and vigilant.
