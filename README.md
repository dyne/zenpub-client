# ZenPub Client

## About the project
This app is based on [CommonsPub](http://commonspub.org), a project to create a generic federated server, based on the `ActivityPub` and `ActivityStreams` web standards). 

This is the front-end, written in Typescript that uses Apollo to fetch and update contents against a Graphql API.

This codebase was forked from [MoodleNet](http://moodle.net/).

---

## Documentation 

Do you wish to run the client on your local machine? Read the [Getting started](GETTING_STARTED.md).

---

## Forks and branches

### Flavours 

CommonsPub comes in different flavours, which are made up of a combination of extensions and probably some custom branding. Each flavour has its own branch in the [CommonsPub repo](https://gitlab.com/CommonsPub/Server) regularly merged back-and-forth with its own repository.

- `flavour/commonspub` - Contains the generic flavour of [CommonsPub](http://commonspub.org) (currently packaged with all extensions except for `extension/valueflows`). 
- `flavour/moodlenet` - The original [MoodleNet](https://gitlab.com/moodlenet/frontend) flavour. 
- `flavour/zenpub` - WIP [ZenPub](https://github.com/dyne/zenpub-client) flavour (with all extensions), which will use [ZenRoom](https://zenroom.org/) for public key signing and end-to-end encryption.

### Extensions

New functionality should be developed in seperate namespaces in order to make the software more modular (there are future plans for a plugin system). Each "extension" has its own branch in the [CommonsPub repo](https://gitlab.com/CommonsPub/Client). Here are some examples of extensions:

- `extension/valueflows` - WIP implementation of the [ValueFlows](https://valueflo.ws/) economic vocabulary, to power distributed economic networks for the next economy.
- `extension/organisation` - Adds functionality for organisations to maintain a shared profile.
- `extension/taxonomy` - WIP to enable user-maintained taxonomies and tagging objects with tree-based categories. 
- `extension/measurement` - Various units and measures for indicating amounts (incl duration).
- `extension/locales` - Extensive schema of languages/countries/etc. The data is also open and shall be made available oustide the repo.
- `extension/geolocation` - Shared 'spatial things' database for tagging objects with a location.

### Commit & merge workflow

Please commit your work to the appropriate extension branches (and your WIP to new feature/fix branches as needed). 

Avoid commiting directly to `flavour/commonspub` or any of the flavours. 

#### Merging completed work

If you made changes to an extension used by a flavour, merge it into the appropriate flavour branche(s).

If you made changes to core functionality (outside of any extension), merge those (and only those) into `flavour/moodlenet`.

#### Please **avoid mixing flavours!** 

For example, DO NOT merge from `flavour/commonspub`-->`flavour/moodlenet`. 

The only exception to this rule being that we DO merge changes from `flavour/moodlenet`-->`flavour/commonspub` since upstream MoodleNet development is still happening directly in core modules.

#### Merging with upstream 

Regularly merge-request changes from `flavour/moodlenet` to [MoodleNet](https://gitlab.com/moodlenet/backend)'s `develop` branch.

Regularly merge changes from [MoodleNet](https://gitlab.com/moodlenet/backend)'s `develop` branch to `flavour/moodlenet`.

---

## Copyright and License

Copyright © 2018-2019 by Git Contributors.

Contains code from [MoodleNet](http://moodle.net/), Pleroma <https://pleroma.social/> and CommonsPub <https://commonspub.org/>

Licensed under the GNU Affero GPL version 3.0 (GNU AGPLv3).
