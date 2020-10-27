### How to get a website up and Running

Written mainly by @RichardLitt

FOSS Responders did not start as a premeditated project with planning and deliverables. Instead, it was a group of individuals who roughly cobbled together resources to help solve a need. Our website, operations, and social media accounts weren't any different; they were a general architectural mishmash, a hodgepodge, and a melange of resources. We winged it, using duct-tape and rubber cement. With that having been said, here is what we did and how we went about it.


#### The Website



*   Buy a **domain**. We used [Hover.com](hover.com) to buy ours. We pointed our domains at Google for email, and at Netlify for hosting the website. Netlify also set us up with an SSL certificate. 
*   Figure out **hosting**. We used the [Jamstack](https://jamstack.wtf/) and hosted our content on [Netlify](netlify.com), so one had to pay for hosting. 
*   Figure out your **stack**. Like I said, we used Jamstack - Jekyll, APIs, and markdown. This made it very easy to iterate on and to build and modify, especially as our main dev (the person writing this, Richard) has built dozens of Jekyll websites. Inside this stack:
    *   Sass
    *   Vanilla JavaScript
    *   Bootstrap
    *   Gulp for asset management. This was probably a mistake.
    *   Git submodules
    *   Npm and npx
    *   Bundler
*   **Version control**: We used Git, and, unsurprisingly, GitHub. Initially there was some discussion about switching to GitLab - however, due to network effects and because we originally had a submission process through GitHub repos, we stayed on GitHub.
*   **Design assets:** When foss responders was reaching a point where they needed to ‘evolve’ past using existing free visuals, logos and assets an open source designer was approached to start involving the team n how to develop a logo, which slowly became an extended ‘brand identity’ You can see the process of this particular design development in this closed [ticket in our repo.(Link here!)](https://github.com/foss-responders/fossresponders.com/issues/10)
*   Designing the website layout post initial infomed, speculative design suggestions included an in-depth discussion with foss responders members on who they intend to serve and how? Both from a service level point of view and a functional level from the website. From this discussion a content plan was collaboratively put in place using a share doc platform and created the basis for the user experience of the website, aligning towards an experience which asked the website visitors to ‘orient’ themselves through ‘I’ statements, graphics that included human figures/avatars which led to actions based on those ‘I’ statements e.g. “I’m a foss organiser who had to cancel an event recently due to coronavirus. I’m going to struggle to recuperate all the deposits for venues etc. and I need some financial support”
*   From the logo, brand identity and website layouts, further pages, graphics and assets were created and stored in an Adobe XD file ([local copy](https://drive.google.com/file/d/1v3VVVtEic4KNNPOb4WWnJkdKd-t_WIRF/view?usp=sharing) in .xd) ([web link](https://xd.adobe.com/view/8e9576cb-18da-4d9f-58b8-7d00d753377f-f8a4/)). A second open source designer joined to work on blog pages and worked in [Figma](https://www.figma.com/file/eqiXamWjAerrBr4ajtLf5Z/foss-responders?node-id=26%3A132).
*   Design needs/issues were created through a combination of spoken, meeting based needs either in groups or individuals or raised as issues in the [repo](https://github.com/foss-responders/fossresponders.com/issues) with the label: "[Design - UX](https://github.com/foss-responders/fossresponders.com/issues?q=is%3Aissue+is%3Aopen+label%3A%22Design+-+UX%22)" "[Design - Web](https://github.com/foss-responders/fossresponders.com/issues?q=is%3Aissue+is%3Aopen+label%3A%22Design+-+Web%22)" "[Design - Graphics & Visuals](https://github.com/foss-responders/fossresponders.com/issues?q=is%3Aissue+is%3Aopen+label%3A%22Design+-+Graphics+%26+Visuals%22)" depending on the nature of the design task.


#### Other accounts



*   **Payments:** We used [Open Collective](https://opencollective.com/) for payment and payment processing. OC was very involved, from the beginning, so using them instead of implementing our own solution was a no-brainer.
*   **Listservs:** Google Groups. We initially had a @googlegroups.com email account, which we almost never used.
*   **Emails.** We used @fossresponders.com accounts, hosted on Google. An interim step before buying paid accounts was to set up fossresponders.com as an alias of one of our private user accounts, so that we didn't have to pay more. It was relatively painless to switch.
*   **Analytics:** We installed Google Analytics, but haven't used it much.
*   **Mailing:** HOW DID WE DO THIS TODO
*   **Forum:** We used Discourse. Setting it up at a subdomain took some effort, and there were a lot of crossed wires about it. But we did eventually settle on a domain. I would encourage you to talk to Discourse directly - they're helpful people - about setting this up.
*   **Twitter**
    *   Buffer: We used this to schedule tweets (I think).
    *   TweetDeck: We used this to allow multiple people to control the Twitter account.
    *   We used/setup twitter ads so we could use some of the layouts available. Please be careful here as an individual's credit card details are associated with this part of twitter so credentials should be given out carefully!
*   **LinkedIn**: We set up a LinkedIn Group, and encouraged members to join.
*   **Instagram**: We didn't end up using this, largely due to lack of design assets.
