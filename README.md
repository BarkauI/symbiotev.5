## Symbiote Project

Symbiote is a text-pad/note-editor type of website with basic CRUD functionality. 
This project had a few main goals:
- To utilise the firebase firestore database to create individual content for each user.
- To create a minimalistic clean experience that allows the users to not be distracted by the content of the page and focus on writing their notes. 
- The main theme is purposefully emulating 70s-80s kind of design with some modern elements as well.

### Go to [symbiote-project.web.app](https://symbiote-project.web.app/)
Log in using your google account. Currently other login methods are not supported.

The sidebar will appear and here you can add your first document. 
### Add 
A new document will appear on the page with some initial text where you can edit the text, the title delete (ctrl + del) and add new lines.

### Delete 
To delete a doc press the red "X". To delete a text line click on the line you want to delete and pres Ctrl + Del.

### Sidebar
You can close and open the sidebar if you'd like. 

### Auto saving
Don't worry about saving the documents are saved every time you click away from the text.

# Dependencies & tech
This project uses these technologies:

## Tools
- The website is built using JavaScript library [react](https://reactjs.org/) with [typescript](https://www.typescriptlang.org/), [redux](https://redux.js.org/), [redux toolkit](https://redux-toolkit.js.org/), [router](https://reactrouter.com/).
- The website is Hosted on the [Firebase](https://firebase.google.com/) platform and uses Firebase Authentication and the Firestore Database.

### Dependecies used: ###
  * [Matrial UI](https://mui.com/) - React User Interface library 
  * [Styled Components](https://styled-components.com/) - library built for React that allows you to use component-level styles using a technique called CSS-in-JS.
  * [Dotenv](https://github.com/motdotla/dotenv) - create environmental variables from .env file
  








