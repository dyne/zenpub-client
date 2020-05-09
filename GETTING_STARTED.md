<div style="
    text-align: center;
">

# How we develop our interfaces

</div>

<div style="
    text-align: center;
">
<img src="https://user-content.gitlab-static.net/ad5bff60561e4253b2793ab58506a4870fd9ff4e/68747470733a2f2f7777772e74656b6567616c6c6572792e636f6d2f73746f72652f696d6167652f7468756d626e61696c732f31382f63382f526f63636f5f4c6f6d62617264695f315f6a70672d3130313530342d3230343878313532342e6a7067" alt="Artwork by Rocco Lombardi | medium" data-canonical-src="https://www.tekegallery.com/store/image/thumbnails/18/c8/Rocco_Lombardi_1_jpg-101504-2048x1524.jpg" class="js-lazy-loaded qa-js-lazy-loaded" width="500" height="400">
</div>

CommonsPub is a multifunctional federated network that allows communities to coordinate a wide range of needs together and connect to other like-minded communities. 

Over the last year we worked hard to define a streamlined and productive development process to code, customize and evolve the user interface (UI) of this open federated network.

Our vision was to **achieve modularity through simplicity**, an old and ongoing quest, even more important when the product should reflect not only the company brand, ethics and goals, but also be flexible enough to satisfy diverse needs. After all, each instance on the federated networks might be run by people with different goals and values.
 
As open source software is becoming more and more prominent over the web, we have to deal also with wider issues: 

- How does the design of open source software help shape a communities? 
- How do communities shape the open source software?
- How can this symbiosis can empower both parties? (rather than slowly bind them to an unproductive and frustrating relationship)


The following is a technical documentation to describe how we developed the CommonsPub front-end codebase to accomplish such challenges and a way to encourage designers, developers and instance admins to contribute with ideas and codes to such vision.

## Getting started

The CommonsPub client connects to a graphql endpoint to perform queries and mutation over the database. 

In order to launch locally the client, you’ll need a running backend. [Here](https://gitlab.com/commonspub/Server/-/blob/develop/HACKING.md) you will find a detailed documentation about how to run the CommonsPub backend locally (manually or with docker).

Once you’ve a backend up and running on http://localhost:4000/api/graphql, you can move further running the client.
*(nd. If you just want to run `storybook`, there is no need to install and run any backend, as stories are populated with fake data)*

Change your `.env` file to use the correct backend. The `zenpub` dev API currently starts on port `4004`
`REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4004/api/graphql`

##### Get the code
`git clone https://gitlab.com/CommonsPub/Client.git commonspub`

##### Install the needed dependencies
```
cd commonspub
yarn
```

##### Extract the languages
We use [linguijs](https://lingui.js.org/index.html) to provide multi-languages. Before launching the app, make sure you’ve added one or more translations to the app.

Currently CommonsPub is translated in the following languages: 

	en_GB: 'English, British',
    en_US: 'English, USA',
    es_MX: 'Español, Méjico',
    es_ES: 'Español, España',
    fr_FR: 'Français, France',
    eu: 'Euskara',
    ar_SA: 'العربية, المملكة العربية السعودية'
    

Apart from en_GB that is the default language, feel free do add the needed translations for your scope, when launching the script:
 
```
yarn add locale en_GB en_US es_MX es_ES fr_FR eu ar_SA
```


##### Launch CommonsPub
`yarn start`

Visit http://localhost:3000 🌱

##### or launch Storybook
`yarn storybook`

Visit http://localhost:5000 🍄

## The tech stack
*(Describe the main libraries we use, and how they are related to each others)*

Our main dependencies are:
- [Typescript](https://www.typescriptlang.org/) - *a strict syntactical superset of JavaScript*
- [React](https://reactjs.org/) - *a JavaScript library for building user interfaces*
- [Apollo](https://www.apollographql.com/docs/react/) - *a complete state management library for JavaScript apps*    
- [Rebass](https://rebassjs.org/) - *react primitive UI components built with styled-system* 
- [Styled-components](https://styled-components.com/) - *styled-components allows you to write actual CSS code to style your components*
- [Storybook](https://storybook.js.org/) - *It makes building stunning UIs organized and efficient*
- [Lingui](https://lingui.js.org/index.html) - *A readable, automated, and optimized (5 kb) internationalization for JavaScript*

## How to create a new feature 
(Describe our internal flow when dealing with a new feature: how we design the related module and implement the needed business logic to hook it to the Back end)


## How to customize CommonsPub
(Describe in which ways and terms a community can adapt CommonsPub FE to their own requirement)

1. ### Configure CommonsPub via the admin dashboard
2. ### Create a new theme
3. ### Edit a module in the component library
4. ### Add a new language
5. ### ...


## How to contribute to CommonsPub Front-end


## Next steps

1. ### Export the component library in separate library
