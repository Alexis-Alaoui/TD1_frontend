# ![RealWorld Example App](logo.png)

> ### [Svelte](https://github.com/sveltejs/svelte) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://realworld.svelte.dev)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

J'utilise votre backend.
Dans celui-ci j'ai modifié cette partie :
```bash
console.error(err.stack);
switch (err.name) {
case "NotFoundError":
return res.status(404).send({err: err.message});
case "ValidationError":
case "DuplicateError":
return res.status(400).send({err: err.message});
default:
return res.status(500).send("Something broke!");
}
};

module.exports = httpErrorHelper;
```
cette modification a été faite pour gérer les erreurs lors de la connexion
dans le login et le register
## Utilisation de l'app

Dans le backend: run le fichier index.js
Dans le frontend: ouvrir un terminal et taper ceci 
```bash
npm run install
```
puis cliquer sur le lien
## User Stories

#### US1: As a random visitor, I want to be able to register an account or log-in, so I can access all features

Faite

#### US2: As a random visitor, I want to be redirected to the login/register page when I click on “location" tab, so that I know I must log-in to see its content

Faite

#### US3: As a logged-in user, I want to see locations and be able to click on one location to open a modal containing details, so that the website is useful

Faite

#### US4: As an “admin" user, I want to see a “Add Location” button in the location page, so that I can create a new location

Faite

#### US5: As an “admin" user, I want to see a button to edit locations in the array of locations, so that I can edit existing locations

Faite

#### US6: As an “admin" user, I want to see a button to delete locations in the array of locations so that I can delete existing locations

Il faut refresh la page pour voir que la ligne a bien été supprimé
